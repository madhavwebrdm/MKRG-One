import SustainabilityPageContent, {
  type SustainabilityPageData,
} from "@/components/SustainabilityPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { pageMetadata } from "@/sanity/lib/metadata";
import { SUSTAINABILITY_PAGE_QUERY } from "@/sanity/lib/queries";

export function generateMetadata() {
  return pageMetadata("sustainabilityPage", {
    title: "Sustainability | Madhav KRG Environmental Solution Limited",
    description:
      "Environmental impact, recycling statistics and community programs at Madhav KRG Environmental Solution Limited, emissions avoided, resources conserved, communities supported.",
  });
}

export default async function SustainabilityPage() {
  const { data } = await sanityFetch({
    query: SUSTAINABILITY_PAGE_QUERY,
    tags: ["sustainabilityPage"],
  });
  return <SustainabilityPageContent data={data as SustainabilityPageData} />;
}
