/**
 * Renames the company across Sanity content (published docs AND drafts):
 *   Madhav KRG Environmental Solutions Private Limited / Pvt. Ltd. / Ltd.
 *     -> Madhav KRG Environmental Solution Limited (MKESL)
 *   MKESPL -> MKESL, Rahul Goel -> Rahul Goyal, site title "MKRG" -> full name.
 *
 * References to the parent MADHAV KRG GROUP / Madhav KRG Limited (steel
 * operations, 2014 pilot plant) are historical facts and are left alone.
 *
 * Usage (needs an Editor token in .env.local as SANITY_API_WRITE_TOKEN,
 * or SANITY_API_READ_TOKEN if that token has Editor permission):
 *   node --env-file=.env.local scripts/rename-company-sanity.mjs --dry
 *   node --env-file=.env.local scripts/rename-company-sanity.mjs
 */
import { createClient } from "@sanity/client";

const DRY = process.argv.includes("--dry");
const FULL = "Madhav KRG Environmental Solution Limited";

const RULES = [
  [/\bGoel\b/g, "Goyal"],
  [/It is classified as a private limited company & is located in/g, "It is located in"],
  [/Madhav KRG Environmental Solutions Private Limited/g, FULL],
  [/Madhav KRG Environmental Solutions Pvt\.? Ltd\.?/g, FULL],
  [/Madhav KRG Environmental Solutions Ltd\./g, `${FULL}.`],
  [/Madhav KRG Environmental Solutions\b/g, FULL],
  [/\bMKESPL\b/g, "MKESL"],
  [/Leading MKRG\b/g, "Leading MKESL"],
  [/how Madhav KRG Group grew/g, `how ${FULL} grew`],
  [/At Madhav KRG Group we maintain/g, `At ${FULL} we maintain`],
];

const SKIP_KEYS = new Set(["_id", "_type", "_ref", "_key", "_rev", "_createdAt", "_updatedAt", "url", "originalFilename"]);

function collect(doc) {
  const sets = {};
  const walk = (val, path) => {
    if (typeof val === "string") {
      let next = val;
      for (const [re, rep] of RULES) next = next.replace(re, rep);
      if (doc._type === "siteSettings" && path === "title" && val === "MKRG") next = FULL;
      if (next !== val) sets[path] = { from: val, to: next };
    } else if (Array.isArray(val)) {
      val.forEach((item, i) => {
        const seg = item && typeof item === "object" && item._key ? `[_key=="${item._key}"]` : `[${i}]`;
        walk(item, `${path}${seg}`);
      });
    } else if (val && typeof val === "object") {
      for (const [k, v] of Object.entries(val)) {
        if (!SKIP_KEYS.has(k)) walk(v, path ? `${path}.${k}` : k);
      }
    }
  };
  walk(doc, "");
  return sets;
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "72k8551o",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN,
  perspective: "raw",
  useCdn: false,
});
const docs = await client.fetch(`*[!(_type match "sanity.*") && !(_id in path("_.**"))]`);

const tx = client.transaction();
let count = 0;
for (const doc of docs) {
  const sets = collect(doc);
  const paths = Object.keys(sets);
  if (!paths.length) continue;
  console.log(`\n${doc._id} (${doc._type})`);
  for (const p of paths) {
    console.log(`  ${p}\n    - ${sets[p].from.slice(0, 160)}\n    + ${sets[p].to.slice(0, 160)}`);
  }
  tx.patch(doc._id, (patch) => patch.set(Object.fromEntries(paths.map((p) => [p, sets[p].to]))));
  count++;
}

if (!count) console.log("Nothing to update.");
else if (DRY) console.log(`\nDry run: ${count} document(s) would be updated.`);
else {
  await tx.commit();
  console.log(`\nUpdated ${count} document(s).`);
}
