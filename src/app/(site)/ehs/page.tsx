import EhsPageContent, { type EhsPageData } from "@/components/EhsPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { EHS_PAGE_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "EHS Madhav KRG Group",
  description:
    "Environment, Health & Safety at Madhav KRG Group. Detailed programs and standards coming soon.",
};

export default async function EhsPage() {
  const { data } = await sanityFetch({ query: EHS_PAGE_QUERY, tags: ["ehsPage"] });
  return <EhsPageContent data={data as EhsPageData} />;
}
