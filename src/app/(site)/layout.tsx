import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { SanityLive, sanityFetch } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";

type SiteSettings = {
  title?: string;
  description?: string;
  logoUrl?: string | null;
  primaryNav?: Array<{ label: string; href: string }>;
  company?: {
    legalName?: string | null;
    cin?: string | null;
    tagline?: string | null;
    addressLines?: string[] | null;
  } | null;
  contact?: {
    salesEmail?: string | null;
    generalEmail?: string | null;
    hrEmail?: string | null;
    phone?: string | null;
  } | null;
  socials?: {
    linkedin?: string | null;
    twitter?: string | null;
    youtube?: string | null;
    instagram?: string | null;
    facebook?: string | null;
  } | null;
} | null;

export default async function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [{ isEnabled: isDraft }, { data: rawSettings }] = await Promise.all([
    draftMode(),
    sanityFetch({ query: SITE_SETTINGS_QUERY, tags: ["siteSettings"] }),
  ]);
  const settings = rawSettings as SiteSettings;

  return (
    <SmoothScroll>
      <CustomCursor />
      <Header
        siteTitle={settings?.title}
        logoUrl={settings?.logoUrl}
        nav={
          settings?.primaryNav && settings.primaryNav.length > 0
            ? settings.primaryNav
            : undefined
        }
      />
      <main>{children}</main>
      <Footer
        siteTitle={settings?.title}
        tagline={settings?.company?.tagline ?? undefined}
        legalName={settings?.company?.legalName}
        cin={settings?.company?.cin}
        addressLines={settings?.company?.addressLines}
        contact={settings?.contact}
        socials={settings?.socials}
      />
      <SanityLive />
      {isDraft && <VisualEditing />}
    </SmoothScroll>
  );
}
