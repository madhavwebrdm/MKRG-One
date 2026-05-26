// Scans every document in the Sanity dataset, finds em dashes (U+2014) in
// any string or Portable Text field, replaces them with commas, and patches
// the document back.
//
// Usage:
//   1. Generate a write token at https://sanity.io/manage/project/72k8551o/api#tokens
//   2. Run:  SANITY_WRITE_TOKEN=sk... node scripts/replace-em-dashes.mjs
//   3. Dry run (no writes):  SANITY_WRITE_TOKEN=sk... DRY_RUN=1 node scripts/replace-em-dashes.mjs

import { createClient } from "next-sanity";

const EM_DASH = "—";
const REPLACEMENT = ",";
const DRY_RUN = process.env.DRY_RUN === "1";

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error("Missing SANITY_WRITE_TOKEN env var.");
  process.exit(1);
}

const client = createClient({
  projectId: "72k8551o",
  dataset: "production",
  apiVersion: "2026-02-01",
  token,
  useCdn: false,
});

function replaceInString(value) {
  if (typeof value !== "string" || !value.includes(EM_DASH)) return value;
  return value.split(EM_DASH).join(REPLACEMENT);
}

function transform(node) {
  if (typeof node === "string") return replaceInString(node);
  if (Array.isArray(node)) return node.map(transform);
  if (node && typeof node === "object") {
    const out = {};
    for (const [k, v] of Object.entries(node)) out[k] = transform(v);
    return out;
  }
  return node;
}

function stripSystemFields(doc) {
  const { _id, _rev, _type, _createdAt, _updatedAt, ...rest } = doc;
  return rest;
}

function diffKeys(before, after) {
  const changed = [];
  for (const k of Object.keys(after)) {
    if (JSON.stringify(before[k]) !== JSON.stringify(after[k])) changed.push(k);
  }
  return changed;
}

async function main() {
  const docs = await client.fetch("*[!(_id in path('_.**'))]");
  console.log(`Scanning ${docs.length} documents...`);

  let touched = 0;
  for (const doc of docs) {
    const before = stripSystemFields(doc);
    const after = transform(before);
    const changedFields = diffKeys(before, after);
    if (changedFields.length === 0) continue;

    touched++;
    console.log(
      `${DRY_RUN ? "[dry] " : ""}${doc._type}/${doc._id} -> ${changedFields.join(", ")}`,
    );

    if (DRY_RUN) continue;

    await client
      .patch(doc._id)
      .set(Object.fromEntries(changedFields.map((k) => [k, after[k]])))
      .commit({ autoGenerateArrayKeys: true });
  }

  console.log(
    `\n${DRY_RUN ? "Would update" : "Updated"} ${touched} document(s).`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
