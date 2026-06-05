import ProcessesPageContent, {
  type ProcessesPageData,
} from "@/components/ProcessesPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { PROCESSES_PAGE_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "Processes Madhav KRG Group",
  description:
    "The Recycle2X process Scrap to Steel and Waste to Zinc. Two output streams, one closed loop, APCD air protection and zero landfill.",
};

export default async function ProcessesPage() {
  const { data } = await sanityFetch({
    query: PROCESSES_PAGE_QUERY,
    tags: ["processesPage"],
  });
  return <ProcessesPageContent data={data as ProcessesPageData} />;
}
