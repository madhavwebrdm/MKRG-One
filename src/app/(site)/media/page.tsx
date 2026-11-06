import MediaPageContent, { type MediaPageData } from "@/components/MediaPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { pageMetadata } from "@/sanity/lib/metadata";
import { MEDIA_PAGE_QUERY } from "@/sanity/lib/queries";

export function generateMetadata() {
  return pageMetadata("mediaPage", {
    title: "Media | Madhav KRG Environmental Solution Limited",
    description:
      "Industry articles featuring Madhav KRG Environmental Solution Limited, covering recycling innovation, sustainability policy and the circular economy.",
  });
}

export default async function MediaPage() {
  const { data } = await sanityFetch({
    query: MEDIA_PAGE_QUERY,
    tags: ["mediaPage"],
  });
  return <MediaPageContent data={data as MediaPageData} />;
}

