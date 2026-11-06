import ProcessesPageContent, {
  type ProcessesPageData,
} from "@/components/ProcessesPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { pageMetadata } from "@/sanity/lib/metadata";
import { PROCESSES_PAGE_QUERY } from "@/sanity/lib/queries";

export function generateMetadata() {
  return pageMetadata("processesPage", {
    title: "Processes | Madhav KRG Environmental Solution Limited",
    description:
      "The Recycle2X process Waste to Zinc. One closed loop, APCD air protection and zero landfill.",
  });
}

export default async function ProcessesPage() {
  const { data } = await sanityFetch({
    query: PROCESSES_PAGE_QUERY,
    tags: ["processesPage"],
  });
  return <ProcessesPageContent data={data as ProcessesPageData} />;
}
