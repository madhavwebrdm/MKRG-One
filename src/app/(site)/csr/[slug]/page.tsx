import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CsrFocusAreaContent from "@/components/CsrFocusAreaContent";
import {
  CSR_SLUGS,
  resolveCsrArea,
  type CsrDetailLabels,
  type SanityFocusArea,
} from "@/lib/csr";
import { sanityFetch } from "@/sanity/lib/live";
import { CSR_PAGE_QUERY } from "@/sanity/lib/queries";

type CsrPageResult = {
  focusAreas?: SanityFocusArea[] | null;
  detailPages?: CsrDetailLabels;
} | null;

async function fetchCsrPage(): Promise<CsrPageResult> {
  const { data } = await sanityFetch({ query: CSR_PAGE_QUERY, tags: ["csrPage"] });
  return data as CsrPageResult;
}

async function fetchFocusAreas(): Promise<SanityFocusArea[] | null | undefined> {
  return (await fetchCsrPage())?.focusAreas;
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
    title:
      area.seoTitle ?? `${area.title} | CSR | Madhav KRG Environmental Solution Limited`,
    description: area.seoDescription ?? area.summary,
  };
}

export default async function CsrFocusAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const csr = await fetchCsrPage();
  const focusAreas = csr?.focusAreas;
  if (!resolveCsrArea(slug, focusAreas)) notFound();
  return (
    <CsrFocusAreaContent
      slug={slug}
      focusAreas={focusAreas}
      labels={csr?.detailPages}
    />
  );
}
