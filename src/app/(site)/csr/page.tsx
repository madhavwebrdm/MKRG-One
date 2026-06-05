import CsrPageContent, { type CsrPageData } from "@/components/CsrPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { CSR_PAGE_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "CSR Madhav KRG Group",
  description:
    "Madhav KRG Group's Corporate Social Responsibility work across education, health, environment, infrastructure, women empowerment and skill development in the communities around our operations.",
};

export default async function CsrPage() {
  const { data } = await sanityFetch({ query: CSR_PAGE_QUERY, tags: ["csrPage"] });
  return <CsrPageContent data={data as CsrPageData} />;
}
