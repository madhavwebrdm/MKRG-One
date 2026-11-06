import CareersPageContent, { type CareersPageData } from "@/components/CareersPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { pageMetadata } from "@/sanity/lib/metadata";
import { CAREERS_PAGE_QUERY } from "@/sanity/lib/queries";

export function generateMetadata() {
  return pageMetadata("careersPage", {
    title: "Careers | Madhav KRG Environmental Solution Limited",
    description:
      "Join Madhav KRG Environmental Solution Limited across plant operations, engineering, sales, finance and EHS. Apply with your CV and a short cover note.",
  });
}

export default async function CareersPage() {
  const { data } = await sanityFetch({
    query: CAREERS_PAGE_QUERY,
    tags: ["careersPage"],
  });
  return <CareersPageContent data={data as CareersPageData} />;
}
