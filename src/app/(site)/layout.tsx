import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { SanityLive, sanityFetch } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";

type LinkItem = { label?: string | null; href?: string | null };

type SiteSettings = {
  title?: string;
  description?: string;
  logoUrl?: string | null;
  headerLogo?: {
    onDarkUrl?: string | null;
    onDarkAlt?: string | null;
    onLightUrl?: string | null;
    onLightAlt?: string | null;
    compactOnDarkUrl?: string | null;
    compactOnDarkAlt?: string | null;
    compactOnLightUrl?: string | null;
    compactOnLightAlt?: string | null;
  } | null;
  primaryNav?: Array<{
    label: string;
    href: string;
    children?: Array<{ label: string; href: string }> | null;
  }>;
  headerCta?: LinkItem | null;
  footerLogoUrl?: string | null;
  footerLogoAlt?: string | null;
  footerBackgroundUrl?: string | null;
  footerColumns?: Array<{ title?: string | null; links?: LinkItem[] | null }> | null;
  footerConnectHeading?: string | null;
  footerCta?: {
    heading?: string | null;
    highlight?: string | null;
    body?: string | null;
    buttonLabel?: string | null;
    buttonHref?: string | null;
  } | null;
  footerBottom?: {
    rightsText?: string | null;
    slogan?: string | null;
    legalLinks?: LinkItem[] | null;
    creditPrefix?: string | null;
    creditLabel?: string | null;
    creditHref?: string | null;
  } | null;
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
      <Header
        siteTitle={settings?.title}
        logoUrl={settings?.logoUrl}
        logos={settings?.headerLogo}
        nav={
          settings?.primaryNav && settings.primaryNav.length > 0
            ? settings.primaryNav
            : undefined
        }
        cta={settings?.headerCta}
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
        logoUrl={settings?.footerLogoUrl}
        logoAlt={settings?.footerLogoAlt}
        backgroundUrl={settings?.footerBackgroundUrl}
        columns={settings?.footerColumns}
        connectHeading={settings?.footerConnectHeading}
        cta={settings?.footerCta}
        bottom={settings?.footerBottom}
      />
      <SanityLive />
      {isDraft && <VisualEditing />}
    </SmoothScroll>
  );
}
