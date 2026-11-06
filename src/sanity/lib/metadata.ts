import type { Metadata } from "next";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "./live";

const SEO_QUERY = defineQuery(`
  *[_type == $type][0].seo{
    title,
    description,
    "imageUrl": image.asset->url,
    noIndex
  }
`);

type Seo = {
  title?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  noIndex?: boolean | null;
} | null;

/**
 * Page <title>/description from the singleton's SEO fields in Sanity, falling
 * back to the given defaults. Use in a page's generateMetadata():
 *
 *   export function generateMetadata() {
 *     return pageMetadata("aboutPage", { title: "About | …", description: "…" });
 *   }
 */
export async function pageMetadata(
  type: string,
  fallback: { title: string; description?: string },
): Promise<Metadata> {
  const { data } = await sanityFetch({
    query: SEO_QUERY,
    params: { type },
    stega: false,
    tags: [type],
  });
  const seo = data as Seo;
  const title = seo?.title?.trim() || fallback.title;
  const description = seo?.description?.trim() || fallback.description;
  return {
    title,
    description,
    ...(seo?.imageUrl ? { openGraph: { images: [seo.imageUrl] } } : {}),
    ...(seo?.noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
