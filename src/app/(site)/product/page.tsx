import ProductPageContent, { type ProductPageData } from "@/components/ProductPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { PRODUCT_PAGE_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "Products Madhav KRG Group",
  description:
    "Certified green steel and high-purity commercial zinc recovered from industrial scrap and hazardous waste. TMT bars, structural steel, pipes, coils, zinc ingots, sheets and feedstock.",
};

export default async function ProductPage() {
  const { data } = await sanityFetch({
    query: PRODUCT_PAGE_QUERY,
    tags: ["productPage"],
  });

  return <ProductPageContent data={data as ProductPageData} />;
}
