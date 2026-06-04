import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CsrFocusAreaContent from "@/components/CsrFocusAreaContent";
import { CSR_FOCUS_AREAS, getCsrFocusArea } from "@/lib/csr";

export function generateStaticParams() {
  return CSR_FOCUS_AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getCsrFocusArea(slug);
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
  const area = getCsrFocusArea(slug);
  if (!area) notFound();
  return <CsrFocusAreaContent slug={slug} />;
}
