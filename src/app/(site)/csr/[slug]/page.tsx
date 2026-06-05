import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CsrFocusAreaContent from "@/components/CsrFocusAreaContent";
import { CSR_SLUGS, resolveCsrArea, type SanityFocusArea } from "@/lib/csr";
import { sanityFetch } from "@/sanity/lib/live";
import { CSR_PAGE_QUERY } from "@/sanity/lib/queries";

type CsrPageResult = { focusAreas?: SanityFocusArea[] | null } | null;

async function fetchFocusAreas(): Promise<SanityFocusArea[] | null | undefined> {
  const { data } = await sanityFetch({ query: CSR_PAGE_QUERY, tags: ["csrPage"] });
  return (data as CsrPageResult)?.focusAreas;
}

// Pre-render the built-in slugs; any Sanity-only slugs render on demand.
export function generateStaticParams() {
  return CSR_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = resolveCsrArea(slug, await fetchFocusAreas());
  if (!area) return {};
  return {
    title: `${area.title} CSR Madhav KRG Group`,
    description: area.summary,
  };
}

export default async function CsrFocusAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const focusAreas = await fetchFocusAreas();
  if (!resolveCsrArea(slug, focusAreas)) notFound();
  return <CsrFocusAreaContent slug={slug} focusAreas={focusAreas} />;
}
