import QualityControlPageContent, {
  type QualityControlPageData,
} from "@/components/QualityControlPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { pageMetadata } from "@/sanity/lib/metadata";
import { QUALITY_CONTROL_PAGE_QUERY } from "@/sanity/lib/queries";

export function generateMetadata() {
  return pageMetadata("qualityControlPage", {
    title: "Quality Control | Madhav KRG Environmental Solution Limited",
    description:
      "How Madhav KRG Environmental Solution Limited tests and checks every batch of recycled zinc, from incoming APCD dust to finished ingots.",
  });
}

export default async function QualityControlPage() {
  const { data } = await sanityFetch({
    query: QUALITY_CONTROL_PAGE_QUERY,
    tags: ["qualityControlPage"],
  });
  return <QualityControlPageContent data={data as QualityControlPageData} />;
}
