import EhsPageContent, { type EhsPageData } from "@/components/EhsPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { pageMetadata } from "@/sanity/lib/metadata";
import { EHS_PAGE_QUERY } from "@/sanity/lib/queries";

export function generateMetadata() {
  return pageMetadata("ehsPage", {
    title: "EHS | Madhav KRG Environmental Solution Limited",
    description:
      "Environment, Health & Safety at Madhav KRG Environmental Solution Limited. Detailed programs and standards coming soon.",
  });
}

export default async function EhsPage() {
  const { data } = await sanityFetch({ query: EHS_PAGE_QUERY, tags: ["ehsPage"] });
  return <EhsPageContent data={data as EhsPageData} />;
}
