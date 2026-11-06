import CertificationsPageContent, {
  type CertificationsPageData,
} from "@/components/CertificationsPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { pageMetadata } from "@/sanity/lib/metadata";
import { CERTIFICATIONS_PAGE_QUERY } from "@/sanity/lib/queries";

export function generateMetadata() {
  return pageMetadata("certificationsPage", {
    title: "Certifications | Madhav KRG Environmental Solution Limited",
    description:
      "ISO 9001 / 14001, GPCB, MOEFCC and EHS certifications quality, environmental and safety standards Madhav KRG Environmental Solution Limited operates under.",
  });
}

export default async function CertificationsPage() {
  const { data } = await sanityFetch({
    query: CERTIFICATIONS_PAGE_QUERY,
    tags: ["certificationsPage"],
  });
  return <CertificationsPageContent data={data as CertificationsPageData} />;
}
