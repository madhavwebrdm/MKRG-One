import WasteWeBuyPageContent, { type WasteWeBuyPageData } from "@/components/WasteWeBuyPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { pageMetadata } from "@/sanity/lib/metadata";
import { WASTE_WE_BUY_PAGE_QUERY } from "@/sanity/lib/queries";

export function generateMetadata() {
  return pageMetadata("wasteWeBuyPage", {
    title: "Waste We Buy | Madhav KRG Environmental Solution Limited",
    description:
      "Bag house powder, lead dust, lead flue dust and other metal-bearing powders: industrial waste Madhav KRG Environmental Solution Limited buys and recycles.",
  });
}

export default async function WasteWeBuyPage() {
  const { data } = await sanityFetch({
    query: WASTE_WE_BUY_PAGE_QUERY,
    tags: ["wasteWeBuyPage"],
  });
  return <WasteWeBuyPageContent data={data as WasteWeBuyPageData} />;
}
