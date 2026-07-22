import MediaPageContent, { type MediaPageData } from "@/components/MediaPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { MEDIA_PAGE_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "Media Madhav KRG Group",
  description:
    "Industry articles, company news, press releases, videos and events from Madhav KRG Group recycling innovation, sustainability policy and the circular economy.",
};

export default async function MediaPage() {
  const { data } = await sanityFetch({
    query: MEDIA_PAGE_QUERY,
    tags: ["mediaPage"],
  });
  return <MediaPageContent data={data as MediaPageData} />;
}

