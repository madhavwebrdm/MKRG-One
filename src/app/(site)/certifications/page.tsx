import CertificationsPageContent, {
  type CertificationsPageData,
} from "@/components/CertificationsPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { CERTIFICATIONS_PAGE_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "Certifications Madhav KRG Group",
  description:
    "ISO 9001 / 14001, GPCB, MOEFCC and EHS certifications quality, environmental and safety standards Madhav KRG Group operates under.",
};

export default async function CertificationsPage() {
  const { data } = await sanityFetch({
    query: CERTIFICATIONS_PAGE_QUERY,
    tags: ["certificationsPage"],
  });
  return <CertificationsPageContent data={data as CertificationsPageData} />;
}
