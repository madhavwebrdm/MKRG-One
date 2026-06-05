import LeadershipPageContent, {
  type LeadershipPageData,
} from "@/components/LeadershipPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { LEADERSHIP_PAGE_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "Leadership Madhav KRG Group",
  description:
    "Founder story, leadership team and the environmental mission behind Madhav KRG Group.",
};

export default async function LeadershipPage() {
  const { data } = await sanityFetch({
    query: LEADERSHIP_PAGE_QUERY,
    tags: ["leadershipPage"],
  });
  return <LeadershipPageContent data={data as LeadershipPageData} />;
}
