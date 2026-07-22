import AboutPageContent, { type AboutPageData } from "@/components/AboutPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "About Madhav KRG Group",
  description:
    "Mission, vision, values, brand identity, differentiators and the company history of Madhav KRG Group India's state-of-the-art recycler.",
};

export default async function AboutPage() {
  const { data } = await sanityFetch({
    query: ABOUT_PAGE_QUERY,
    tags: ["aboutPage"],
  });
  return <AboutPageContent data={data as AboutPageData} />;
}

