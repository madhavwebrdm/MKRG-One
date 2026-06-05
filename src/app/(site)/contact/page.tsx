import ContactPageContent, { type ContactPageData } from "@/components/ContactPageContent";
import { sanityFetch } from "@/sanity/lib/live";
import { CONTACT_PAGE_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "Contact Madhav KRG Group",
  description:
    "Sales, technical, partnership and audit enquiries for Madhav KRG Group offices in Ahmedabad and the Recycle2X plant in Mehsana, Gujarat.",
};

export default async function ContactPage() {
  const { data } = await sanityFetch({
    query: CONTACT_PAGE_QUERY,
    tags: ["contactPage"],
  });
  return <ContactPageContent data={data as ContactPageData} />;
}
