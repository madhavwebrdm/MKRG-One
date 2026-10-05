import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import MetricsBar from "@/components/MetricsBar";
import MissionVisionTeaser from "@/components/MissionVisionTeaser";
import SustainabilityTeaser from "@/components/SustainabilityTeaser";
import ParallaxImpact from "@/components/ParallaxImpact";
import ProcessesTeaser from "@/components/ProcessesTeaser";
import CertificationsTeaser from "@/components/CertificationsTeaser";
import MediaTeaser from "@/components/MediaTeaser";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";

type HomeData = {
  hero?: {
    eyebrow?: string;
    heading?: string;
    subheading?: string;
    positioningTags?: string[];
    imageUrl?: string | null;
    imageAlt?: string | null;
    primaryCtaLabel?: string;
    primaryCtaHref?: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
  };
  metricsHeading?: string;
  metricsIntro?: string;
  metrics?: Array<{ value: number; suffix?: string; label: string; note?: string }>;
  missionVision?: {
    eyebrow?: string;
    heading?: string;
    mission?: string;
    vision?: string;
    ctaLabel?: string;
    ctaHref?: string;
  };
  sustainabilityTeaser?: {
    eyebrow?: string;
    heading?: string;
    body?: string;
    highlights?: Array<{ label: string; value: string }>;
    ctaLabel?: string;
    ctaHref?: string;
  };
  processesTeaser?: {
    eyebrow?: string;
    heading?: string;
    body?: string;
    steps?: Array<{ title: string; body: string }>;
    ctaLabel?: string;
    ctaHref?: string;
  };
  leaderPortraitUrl?: string | null;
  leadershipTeaser?: {
    eyebrow?: string;
    heading?: string;
    quote?: string;
    attribution?: string;
    portraitUrl?: string | null;
    ctaLabel?: string;
    ctaHref?: string;
  };
  certificationsTeaser?: {
    eyebrow?: string;
    heading?: string;
    body?: string;
    badges?: Array<{ label: string; issuer: string }>;
    ctaLabel?: string;
    ctaHref?: string;
  };
  mediaTeaser?: {
    eyebrow?: string;
    heading?: string;
    body?: string;
    items?: Array<{
      kind?: string | null;
      title?: string | null;
      source?: string | null;
      date?: string | null;
      href?: string | null;
    }>;
    ctaLabel?: string;
    ctaHref?: string;
  };
  mediaArticles?: Array<{
    kind?: string | null;
    title?: string | null;
    source?: string | null;
    date?: string | null;
    href?: string | null;
    imageUrl?: string | null;
    imageAlt?: string | null;
  }>;
} | null;

export default async function Home() {
  const { data } = await sanityFetch({
    query: HOME_PAGE_QUERY,
    tags: ["homePage"],
  });

  const page = data as HomeData;

  return (
    <>
      <Hero {...(page?.hero ?? {})} />
      <MarqueeStrip />
      <MetricsBar
        heading={page?.metricsHeading}
        intro={page?.metricsIntro}
        metrics={page?.metrics}
        leader={{
          ...page?.leadershipTeaser,
          // Same photo the Leadership page shows for Rahul Goel.
          portraitUrl: page?.leadershipTeaser?.portraitUrl || page?.leaderPortraitUrl,
        }}
      />
      <MissionVisionTeaser {...(page?.missionVision ?? {})} />
      <SustainabilityTeaser {...(page?.sustainabilityTeaser ?? {})} />
      <ParallaxImpact />
      <ProcessesTeaser {...(page?.processesTeaser ?? {})} />
      <CertificationsTeaser {...(page?.certificationsTeaser ?? {})} />
      <MediaTeaser
        {...(page?.mediaTeaser ?? {})}
        items={page?.mediaArticles?.length ? page.mediaArticles : page?.mediaTeaser?.items}
      />
    </>
  );
}
