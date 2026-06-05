import SustainabilityPageContent, {
  type SustainabilityPageData,
} from "@/components/SustainabilityPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { SUSTAINABILITY_PAGE_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "Sustainability Madhav KRG Group",
  description:
    "Environmental impact, recycling statistics and community programs at Madhav KRG Group emissions avoided, resources conserved, communities supported.",
};

export default async function SustainabilityPage() {
  const { data } = await sanityFetch({
    query: SUSTAINABILITY_PAGE_QUERY,
    tags: ["sustainabilityPage"],
  });
  return <SustainabilityPageContent data={data as SustainabilityPageData} />;
}
