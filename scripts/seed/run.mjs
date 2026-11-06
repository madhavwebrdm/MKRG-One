/**
 * Seeds Sanity with the content the site currently shows, so every field in
 * the Studio is pre-filled for the client handover.
 *
 * Each file in scripts/seed/data/*.mjs default-exports one document (or an
 * array of documents): { _id, _type, ...fields }. Assets are written as
 * placeholders and uploaded on --write:
 *   { _type: "image", _file: "public/images/x.jpg", alt: "..." }
 *   { _type: "image", _url: "https://example.com/x.jpg" }
 *   { _type: "file",  _file: "public/videos/x.mp4" }
 *
 * FILL-ONLY: a field that already has a value in Sanity is never changed.
 * Missing documents are created; existing drafts get the same fill.
 * Arrays are filled when missing/empty; when Sanity already has an array of
 * the same length, missing sub-fields are filled item by item.
 *
 * Usage:
 *   node --env-file=.env.local scripts/seed/run.mjs [names...]          # dry run
 *   node --env-file=.env.local scripts/seed/run.mjs --write [names...]  # apply
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { pathToFileURL } from "node:url";
import { createClient } from "@sanity/client";

const args = process.argv.slice(2);
const WRITE = args.includes("--write");
const only = args.filter((a) => !a.startsWith("--"));
const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, "scripts", "seed", "data");

const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN;
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "72k8551o",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token,
  perspective: "raw",
  useCdn: false,
});

const isPlainObject = (v) => v && typeof v === "object" && !Array.isArray(v);
const isAsset = (v) => isPlainObject(v) && (v._type === "image" || v._type === "file");
const isPlaceholder = (v) => isAsset(v) && (v._file || v._url);
const isEmpty = (v) =>
  v === undefined || v === null || v === "" || (Array.isArray(v) && v.length === 0);
const key = () => crypto.randomBytes(6).toString("hex");

const problems = [];
const uploads = new Map(); // source -> asset _id

async function uploadAsset(ph, where) {
  const source = ph._file || ph._url;
  // An image and a file asset of the same source are different Sanity assets.
  const cacheKey = `${ph._type}:${path.normalize(source)}`;
  if (uploads.has(cacheKey)) return uploads.get(cacheKey);
  let body;
  let filename;
  if (ph._file) {
    const abs = path.join(ROOT, ph._file);
    if (!fs.existsSync(abs)) {
      problems.push(`${where}: missing file ${ph._file}`);
      return null;
    }
    filename = path.basename(abs);
    body = WRITE ? fs.createReadStream(abs) : null;
  } else {
    filename = path.basename(new URL(ph._url).pathname) || "remote";
    if (WRITE) {
      const res = await fetch(ph._url);
      if (!res.ok) {
        problems.push(`${where}: could not fetch ${ph._url} (${res.status})`);
        return null;
      }
      body = Buffer.from(await res.arrayBuffer());
    }
  }
  if (!WRITE) {
    uploads.set(cacheKey, `(would upload ${source})`);
    return uploads.get(cacheKey);
  }
  const asset = await client.assets.upload(ph._type === "file" ? "file" : "image", body, { filename });
  uploads.set(cacheKey, asset._id);
  return asset._id;
}

/** Turn seed data into Sanity-ready data: upload assets, add array _keys. */
async function materialize(v, where) {
  if (Array.isArray(v)) {
    const out = [];
    for (let i = 0; i < v.length; i++) {
      let item = await materialize(v[i], `${where}[${i}]`);
      if (isPlainObject(item) && !item._key) item = { _key: key(), ...item };
      out.push(item);
    }
    return out;
  }
  if (isPlaceholder(v)) {
    const ref = await uploadAsset(v, where);
    if (!ref) return undefined;
    const { _file, _url, ...rest } = v;
    const extra = await materialize(rest, where);
    return { ...extra, _type: v._type, asset: { _type: "reference", _ref: ref } };
  }
  if (isPlainObject(v)) {
    const out = {};
    for (const [k, val] of Object.entries(v)) {
      const m = await materialize(val, `${where}.${k}`);
      if (m !== undefined) out[k] = m;
    }
    return out;
  }
  return v;
}

/** Fill-only merge of seed into existing. Records filled paths in `filled`. */
async function fill(existing, seed, where, filled) {
  if (isPlaceholder(seed)) {
    if (existing?.asset) {
      // Asset already chosen in Sanity: only fill sub-fields such as alt text.
      const { _file, _url, _type, ...sub } = seed;
      return fill(existing, sub, where, filled);
    }
    const m = await materialize(seed, where);
    if (m === undefined) return existing;
    filled.push(where);
    const keep = isPlainObject(existing)
      ? Object.fromEntries(Object.entries(existing).filter(([, x]) => !isEmpty(x)))
      : {};
    return { ...m, ...keep, asset: m.asset };
  }
  if (isEmpty(existing)) {
    if (isEmpty(seed)) return existing; // nothing to add (e.g. empty marks: [])
    const m = await materialize(seed, where);
    if (m !== undefined) filled.push(where);
    return m === undefined ? existing : m;
  }
  if (Array.isArray(seed)) {
    if (!Array.isArray(existing) || existing.length !== seed.length) return existing;
    const out = [];
    for (let i = 0; i < seed.length; i++) {
      out.push(
        isPlainObject(seed[i]) && isPlainObject(existing[i])
          ? await fill(existing[i], seed[i], `${where}[${i}]`, filled)
          : existing[i],
      );
    }
    return out;
  }
  if (isPlainObject(seed) && isPlainObject(existing)) {
    const out = { ...existing };
    for (const [k, val] of Object.entries(seed)) {
      if (k === "_type" || k === "_key" || k === "_file" || k === "_url") continue;
      const next = await fill(existing[k], val, `${where}.${k}`, filled);
      if (next !== undefined) out[k] = next;
    }
    return out;
  }
  return existing; // existing primitive wins
}

async function seedDoc(doc, label) {
  const { _id, _type, ...fields } = doc;
  if (!_id || !_type) throw new Error(`${label}: every document needs _id and _type`);
  const ids = [_id, `drafts.${_id}`];
  const existing = await client.fetch(`*[_id in $ids]`, { ids });
  const published = existing.find((d) => d._id === _id);
  const draft = existing.find((d) => d._id === `drafts.${_id}`);
  const tx = client.transaction();
  const report = [];

  for (const [target, current] of [[_id, published], [`drafts.${_id}`, draft]]) {
    if (target.startsWith("drafts.") && !current) continue; // only touch drafts that exist
    const filled = [];
    if (!current) {
      const body = await fill({}, fields, "", filled);
      tx.createIfNotExists({ _id: target, _type, ...body });
      report.push(`  create ${target} (${filled.length} fields)`);
      continue;
    }
    const sets = {};
    for (const [k, val] of Object.entries(fields)) {
      const before = filled.length;
      const next = await fill(current[k], val, k, filled);
      if (filled.length > before) sets[k] = next;
    }
    if (Object.keys(sets).length) {
      tx.patch(target, (p) => p.set(sets));
      report.push(`  fill ${target}: ${filled.length} field(s)`);
      for (const f of filled.slice(0, 40)) report.push(`    + ${f}`);
      if (filled.length > 40) report.push(`    … ${filled.length - 40} more`);
    } else {
      report.push(`  ${target}: already complete`);
    }
  }
  console.log(`${label} → ${_id}\n${report.join("\n")}`);
  if (WRITE) await tx.commit();
}

const files = fs
  .readdirSync(DATA_DIR)
  .filter((f) => f.endsWith(".mjs"))
  .filter((f) => !only.length || only.includes(f.replace(/\.mjs$/, "")))
  .sort();

console.log(`${WRITE ? "WRITE" : "DRY RUN"}: ${files.length} seed file(s)\n`);
for (const f of files) {
  const mod = await import(pathToFileURL(path.join(DATA_DIR, f)).href);
  const docs = Array.isArray(mod.default) ? mod.default : [mod.default];
  for (const d of docs) await seedDoc(d, f);
}
console.log(`\nAssets: ${uploads.size} ${WRITE ? "uploaded" : "to upload"}`);
if (problems.length) {
  console.log(`\nPROBLEMS:\n${problems.map((p) => "  " + p).join("\n")}`);
  process.exitCode = 1;
}
