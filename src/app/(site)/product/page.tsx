import ProductPageContent, { type ProductPageData } from "@/components/ProductPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { PRODUCT_PAGE_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "Products Madhav KRG Group",
  description:
    "High-purity commercial zinc recovered from hazardous industrial waste. Zinc ingots, sheets and feedstock, refined to 99.9% purity.",
};

export default async function ProductPage() {
  const { data } = await sanityFetch({
    query: PRODUCT_PAGE_QUERY,
    tags: ["productPage"],
  });

  return <ProductPageContent data={data as ProductPageData} />;
}
