import CsrPageContent, { type CsrPageData } from "@/components/CsrPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { pageMetadata } from "@/sanity/lib/metadata";
import { CSR_PAGE_QUERY } from "@/sanity/lib/queries";

export function generateMetadata() {
  return pageMetadata("csrPage", {
    title: "CSR | Madhav KRG Environmental Solution Limited",
    description:
      "Madhav KRG Environmental Solution Limited's Corporate Social Responsibility work across education, health, environment, infrastructure, women empowerment and skill development in the communities around our operations.",
  });
}

export default async function CsrPage() {
  const { data } = await sanityFetch({ query: CSR_PAGE_QUERY, tags: ["csrPage"] });
  return <CsrPageContent data={data as CsrPageData} />;
}
