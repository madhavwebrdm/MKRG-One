export const token = process.env.SANITY_API_READ_TOKEN;

if (!token) {
  // Don't throw token is only required for drafts and Live mode.
  // Some build steps (e.g. generateStaticParams against published) work fine without it.
  console.warn(
    "Missing SANITY_API_READ_TOKEN drafts and Live Content updates will be disabled.",
  );
}

