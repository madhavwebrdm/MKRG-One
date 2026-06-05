import { defineQuery } from "next-sanity";

/* -------------------------------------------------------------------------- */
/* Shared GROQ fragments                                                       */
/* -------------------------------------------------------------------------- */

const HERO_FRAGMENT = `
  hero{
    eyebrow,
    heading,
    intro,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt,
    primaryCtaLabel,
    primaryCtaHref,
    secondaryCtaLabel,
    secondaryCtaHref
  }
`;

const SEO_FRAGMENT = `
  seo{
    title,
    description,
    "imageUrl": image.asset->url,
    noIndex
  }
`;

// Page builder section blocks narrow projections per _type so unknown blocks
// don't bloat the payload and TypeGen can discriminate cleanly.
const SECTIONS_FRAGMENT = `
  sections[]{
    _key,
    _type,
    _type == "impactSection" => {
      heading, intro,
      stats[]{ value, suffix, label }
    },
    _type == "contentSection" => { heading, body },
    _type == "ctaBlock" => {
      eyebrow, heading, body,
      primaryLabel, primaryHref,
      secondaryLabel, secondaryHref, tone
    },
    _type == "imageTextSplit" => {
      eyebrow, heading, body, caption, imageSide,
      "imageUrl": image.asset->url, "imageAlt": image.alt
    },
    _type == "pillarsGrid" => {
      eyebrow, heading, intro, tone,
      pillars[]{ title, body, icon }
    },
    _type == "timelineBlock" => {
      eyebrow, heading, intro,
      entries[]{ year, title, body }
    },
    _type == "quoteBlock" => { text, attribution, tone },
    _type == "faqBlock" => {
      heading, intro,
      items[]{ question, answer }
    },
    _type == "gallery" => {
      heading, intro, columns,
      images[]{
        "imageUrl": asset->url,
        "alt": alt,
        "caption": caption
      }
    }
  }
`;

/* -------------------------------------------------------------------------- */
/* Site-wide                                                                   */
/* -------------------------------------------------------------------------- */

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings"][0]{
    title,
    description,
    "logoUrl": logo.asset->url,
    primaryNav[]{ label, href },
    company{ legalName, cin, tagline, addressLines },
    contact{ salesEmail, generalEmail, hrEmail, phone },
    socials{ linkedin, twitter, youtube, instagram, facebook }
  }
`);

/* -------------------------------------------------------------------------- */
/* Home (unchanged shape already consumed by app/(site)/page.tsx)            */
/* -------------------------------------------------------------------------- */

export const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "homePage"][0]{
    hero{
      eyebrow, heading, subheading, positioningTags,
      "imageUrl": image.asset->url, "imageAlt": image.alt,
      primaryCtaLabel, primaryCtaHref,
      secondaryCtaLabel, secondaryCtaHref
    },
    metricsHeading,
    metricsIntro,
    metrics[]{ value, suffix, label, note },
    missionVision{ eyebrow, heading, mission, vision, ctaLabel, ctaHref },
    sustainabilityTeaser{
      eyebrow, heading, body,
      highlights[]{ label, value },
      ctaLabel, ctaHref
    },
    processesTeaser{
      eyebrow, heading, body,
      steps[]{ title, body },
      ctaLabel, ctaHref
    },
    leadershipTeaser{
      eyebrow, heading, quote, attribution,
      "portraitUrl": portrait.asset->url,
      ctaLabel, ctaHref
    },
    certificationsTeaser{
      eyebrow, heading, body,
      badges[]{ label, issuer },
      ctaLabel, ctaHref
    },
    mediaTeaser{
      eyebrow, heading, body,
      items[]{ kind, title, source, date, href },
      ctaLabel, ctaHref
    }
  }
`);

/* -------------------------------------------------------------------------- */
/* Per-page singletons                                                         */
/* -------------------------------------------------------------------------- */

export const ABOUT_PAGE_QUERY = defineQuery(`
  *[_type == "aboutPage"][0]{
    ${HERO_FRAGMENT},
    purpose{ eyebrow, heading, mission, vision },
    values{
      eyebrow, heading, intro,
      items[]{ title, body, icon }
    },
    brandIdentity{
      eyebrow, heading, body, caption,
      "imageUrl": image.asset->url, "imageAlt": image.alt
    },
    differentiators{
      eyebrow, heading, intro,
      items[]{
        title, body, icon,
        "imageUrl": image.asset->url, "imageAlt": image.alt
      }
    },
    timeline{
      eyebrow, heading, intro,
      entries[]{ year, title, body },
      closingCtaLabel, closingCtaHref
    },
    ${SEO_FRAGMENT}
  }
`);

export const SUSTAINABILITY_PAGE_QUERY = defineQuery(`
  *[_type == "sustainabilityPage"][0]{
    ${HERO_FRAGMENT},
    metricsBlock{
      eyebrow, heading, intro,
      items[]{ value, suffix, label, note }
    },
    pillars{
      eyebrow, heading, intro,
      items[]{ title, body, icon }
    },
    recyclingStats{
      heading, intro,
      items[]{ label, value, note }
    },
    csrSection{
      eyebrow, heading, body,
      "imageUrl": image.asset->url, "imageAlt": image.alt
    },
    ehsSection{
      eyebrow, heading, body,
      "imageUrl": image.asset->url, "imageAlt": image.alt
    },
    subpages[]{ title, body, href, icon },
    ${SEO_FRAGMENT}
  }
`);

export const PROCESSES_PAGE_QUERY = defineQuery(`
  *[_type == "processesPage"][0]{
    ${HERO_FRAGMENT},
    scrapToSteel{
      eyebrow, heading, body, accent,
      steps[]{ label, icon }
    },
    wasteToZinc{
      eyebrow, heading, body, accent,
      steps[]{ label, icon }
    },
    zincInputs,
    apcdSection{
      eyebrow, heading, body,
      "imageUrl": image.asset->url, "imageAlt": image.alt
    },
    subpages[]{ title, body, href, icon },
    ${SEO_FRAGMENT}
  }
`);

export const PRODUCT_PAGE_QUERY = defineQuery(`
  *[_type == "productPage"][0]{
    ${HERO_FRAGMENT},
    overview{
      eyebrow, heading, intro,
      families[]{
        title, tagline, icon,
        "imageUrl": image.asset->url, "imageAlt": image.alt,
        productsIncluded, applications,
        ctaLabel, ctaHref
      }
    },
    greenSteel{
      eyebrow, heading, intro,
      products[]{
        name, description,
        "imageUrl": image.asset->url, "imageAlt": image.alt
      },
      calloutTitle, calloutBody
    },
    zinc{
      eyebrow, heading, intro,
      products[]{
        name, description,
        "imageUrl": image.asset->url, "imageAlt": image.alt
      },
      calloutTitle, calloutBody
    },
    closingCta{ heading, body, primaryLabel, primaryHref },
    ${SEO_FRAGMENT}
  }
`);

export const CSR_PAGE_QUERY = defineQuery(`
  *[_type == "csrPage"][0]{
    ${HERO_FRAGMENT},
    impact{
      eyebrow, heading,
      stats[]{ value, label }
    },
    focus{ eyebrow, heading, intro },
    focusAreas[]{
      "slug": slug.current,
      title, tagline, summary, icon,
      "heroImageUrl": heroImage.asset->url, "heroImageAlt": heroImage.alt,
      cardStat{ value, label },
      stats[]{ value, label },
      initiatives[]{
        title,
        "imageUrl": image.asset->url, "imageAlt": image.alt,
        body, bullets
      }
    },
    closingCta{ heading, body, primaryLabel, primaryHref },
    ${SEO_FRAGMENT}
  }
`);

export const EHS_PAGE_QUERY = defineQuery(`
  *[_type == "ehsPage"][0]{
    ${HERO_FRAGMENT},
    comingSoon{ eyebrow, heading, body },
    closingCta{ heading, body, primaryLabel, primaryHref },
    ${SEO_FRAGMENT}
  }
`);

export const LEADERSHIP_PAGE_QUERY = defineQuery(`
  *[_type == "leadershipPage"][0]{
    ${HERO_FRAGMENT},
    founder{
      eyebrow, heading, name, role, story,
      "imageUrl": image.asset->url, "imageAlt": image.alt
    },
    pullQuote{ text, attribution },
    team{
      eyebrow, heading, intro,
      members[]{
        name, role, bio, linkedin, email,
        "photoUrl": photo.asset->url, "photoAlt": photo.alt
      },
      closingCtaLabel, closingCtaHref
    },
    ${SEO_FRAGMENT}
  }
`);

export const CERTIFICATIONS_PAGE_QUERY = defineQuery(`
  *[_type == "certificationsPage"][0]{
    ${HERO_FRAGMENT},
    intro{ eyebrow, heading, body },
    certificates[]{
      title, issuer, body, status, icon,
      "downloadUrl": downloadFile.asset->url
    },
    closingCta{ heading, body, primaryLabel, primaryHref },
    ${SEO_FRAGMENT}
  }
`);

export const MEDIA_PAGE_QUERY = defineQuery(`
  *[_type == "mediaPage"][0]{
    ${HERO_FRAGMENT},
    articlesSection{
      eyebrow, heading,
      items[]{
        topic, title, source, date, href,
        "imageUrl": image.asset->url, "imageAlt": image.alt
      }
    },
    companyNewsSection{
      eyebrow, heading,
      items[]{
        kind, title, body, date, href,
        "imageUrl": image.asset->url, "imageAlt": image.alt
      }
    },
    pressReleasesSection{
      eyebrow, heading,
      items[]{
        title, summary, date, href,
        "downloadUrl": downloadFile.asset->url
      }
    },
    videosSection{
      eyebrow, heading,
      items[]{
        title, duration, kind, href,
        "thumbnailUrl": thumbnail.asset->url, "thumbnailAlt": thumbnail.alt
      }
    },
    eventsSection{
      eyebrow, heading,
      items[]{
        title, location, date, kind, href,
        "imageUrl": image.asset->url, "imageAlt": image.alt
      }
    },
    subpages[]{ title, body, href, icon },
    ${SEO_FRAGMENT}
  }
`);

export const CONTACT_PAGE_QUERY = defineQuery(`
  *[_type == "contactPage"][0]{
    ${HERO_FRAGMENT},
    offices[]{ label, icon, lines },
    contactLines[]{ label, icon, value, href },
    mapEmbedUrl,
    enquiryForm{
      heading, intro, productOptions,
      submitLabel, successMessage
    },
    ${SEO_FRAGMENT}
  }
`);

/* -------------------------------------------------------------------------- */
/* Generic pages + landing pages                                               */
/* -------------------------------------------------------------------------- */

export const PAGE_SLUGS_QUERY = defineQuery(`
  *[_type == "page" && defined(slug.current)][].slug.current
`);

export const PAGE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{
    _id, title, "slug": slug.current,
    ${HERO_FRAGMENT},
    ${SECTIONS_FRAGMENT},
    ${SEO_FRAGMENT}
  }
`);

export const LANDING_PAGE_SLUGS_QUERY = defineQuery(`
  *[_type == "landingPage" && status == "live" && defined(slug.current)][].slug.current
`);

export const LANDING_PAGE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "landingPage" && slug.current == $slug && status != "archived"][0]{
    _id, title, "slug": slug.current, status,
    ${HERO_FRAGMENT},
    ${SECTIONS_FRAGMENT},
    conversion{
      showEnquiryForm, formHeading, formIntro, trackingId
    },
    ${SEO_FRAGMENT}
  }
`);

/* -------------------------------------------------------------------------- */
/* Posts / Case studies                                                        */
/* -------------------------------------------------------------------------- */

export const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  | order(publishedAt desc) [0...20] {
    _id, title, "slug": slug.current, excerpt, publishedAt,
    "coverImage": coverImage.asset->url
  }
`);

export const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    _id, title, excerpt, publishedAt, body,
    "coverImage": coverImage.asset->url
  }
`);

