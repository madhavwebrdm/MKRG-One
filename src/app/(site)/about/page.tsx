import AboutPageContent, { type AboutPageData } from "@/components/AboutPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { pageMetadata } from "@/sanity/lib/metadata";
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";

export function generateMetadata() {
  return pageMetadata("aboutPage", {
    title: "About | Madhav KRG Environmental Solution Limited",
    description:
      "Mission, vision, values, brand identity, differentiators and the company history of Madhav KRG Environmental Solution Limited, India's state-of-the-art recycler.",
  });
}

export default async function AboutPage() {
  const { data } = await sanityFetch({
    query: ABOUT_PAGE_QUERY,
    tags: ["aboutPage"],
  });
  return <AboutPageContent data={data as AboutPageData} />;
}

