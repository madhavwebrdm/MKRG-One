import ContactPageContent, { type ContactPageData } from "@/components/ContactPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { pageMetadata } from "@/sanity/lib/metadata";
import { CONTACT_PAGE_QUERY } from "@/sanity/lib/queries";

export function generateMetadata() {
  return pageMetadata("contactPage", {
    title: "Contact | Madhav KRG Environmental Solution Limited",
    description:
      "Sales, technical, partnership and audit enquiries for Madhav KRG Environmental Solution Limited offices in Ahmedabad and the Recycle2X plant in Mehsana, Gujarat.",
  });
}

export default async function ContactPage() {
  const { data } = await sanityFetch({
    query: CONTACT_PAGE_QUERY,
    tags: ["contactPage"],
  });
  return <ContactPageContent data={data as ContactPageData} />;
}
