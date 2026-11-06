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
import { pageMetadata } from "@/sanity/lib/metadata";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";

export function generateMetadata() {
  return pageMetadata("homePage", {
    title: "Madhav KRG Environmental Solution Limited | Waste is a Resource, Not a Problem",
    description:
      "MKESL recycles hazardous industrial waste into high-purity zinc with zero degradation or contamination intact properties as per International Standards, virtually similar to virgin material, with far lesser impact on the environment.",
  });
}

type HomeData = {
  hero?: {
    eyebrow?: string;
    heading?: string;
    subheading?: string;
    positioningTags?: string[];
    imageUrl?: string | null;
    imageAlt?: string | null;
    videos?: Array<{
      src?: string | null;
      startAt?: number | null;
      duration?: number | null;
    }> | null;
    primaryCtaLabel?: string;
    primaryCtaHref?: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
  };
  marqueeItems?: string[] | null;
  metricsEyebrow?: string;
  metricsHeading?: string;
  metricsIntro?: string;
  metrics?: Array<{ value: number; suffix?: string; label: string; note?: string }>;
  missionVision?: {
    eyebrow?: string;
    heading?: string;
    missionLabel?: string | null;
    mission?: string;
    visionLabel?: string | null;
    vision?: string;
    imageUrl?: string | null;
    imageAlt?: string | null;
    imageCaption?: string | null;
    ctaLabel?: string;
    ctaHref?: string;
  };
  sustainabilityTeaser?: {
    eyebrow?: string;
    heading?: string;
    body?: string;
    highlights?: Array<{
      label: string;
      value: string;
      href?: string | null;
      imageUrl?: string | null;
      imageAlt?: string | null;
    }> | null;
    cardLinkLabel?: string | null;
    ctaLabel?: string;
    ctaHref?: string;
  };
  parallaxImpact?: {
    heading?: string | null;
    imageUrl?: string | null;
  } | null;
  processesTeaser?: {
    eyebrow?: string;
    heading?: string;
    body?: string;
    sealUrl?: string | null;
    sealAlt?: string | null;
    proofPoints?: Array<{ value?: string | null; label?: string | null }> | null;
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
    imageUrl?: string | null;
    imageAlt?: string | null;
    imageBadge?: string | null;
    badges?: Array<{ label: string; issuer: string }> | null;
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
      <MarqueeStrip
        items={page?.marqueeItems?.length ? page.marqueeItems : undefined}
      />
      <MetricsBar
        eyebrow={page?.metricsEyebrow}
        heading={page?.metricsHeading}
        intro={page?.metricsIntro}
        metrics={page?.metrics}
      />
      <MissionVisionTeaser {...(page?.missionVision ?? {})} />
      <SustainabilityTeaser {...(page?.sustainabilityTeaser ?? {})} />
      <ParallaxImpact
        heading={page?.parallaxImpact?.heading ?? undefined}
        imageUrl={page?.parallaxImpact?.imageUrl ?? undefined}
      />
      <ProcessesTeaser {...(page?.processesTeaser ?? {})} />
      <CertificationsTeaser {...(page?.certificationsTeaser ?? {})} />
      <MediaTeaser
        {...(page?.mediaTeaser ?? {})}
        items={page?.mediaArticles?.length ? page.mediaArticles : page?.mediaTeaser?.items}
      />
    </>
  );
}
