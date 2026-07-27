import ProjectsPageContent, {
  type ProjectsPageData,
} from "@/components/ProjectsPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_PAGE_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "Projects Madhav KRG Group",
  description:
    "Inside the Waste Recycling Division's APCD dust to zinc recovery project in Mandi Gobindgarh, from plant timeline and process to environmental impact.",
};

export default async function ProjectsPage() {
  const { data } = await sanityFetch({
    query: PROJECTS_PAGE_QUERY,
    tags: ["projectsPage"],
  });
  return <ProjectsPageContent data={data as ProjectsPageData} />;
}
