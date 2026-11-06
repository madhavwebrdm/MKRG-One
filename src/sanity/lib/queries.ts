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
    "videoUrl": video.asset->url,
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
    headerLogo{
      "onDarkUrl": onDark.asset->url, "onDarkAlt": onDark.alt,
      "onLightUrl": onLight.asset->url, "onLightAlt": onLight.alt,
      "compactOnDarkUrl": compactOnDark.asset->url, "compactOnDarkAlt": compactOnDark.alt,
      "compactOnLightUrl": compactOnLight.asset->url, "compactOnLightAlt": compactOnLight.alt
    },
    primaryNav[]{ label, href, children[]{ label, href } },
    headerCta{ label, href },
    "footerLogoUrl": footerLogo.asset->url,
    "footerLogoAlt": footerLogo.alt,
    "footerBackgroundUrl": footerBackground.asset->url,
    company{ legalName, cin, tagline, addressLines },
    contact{ salesEmail, generalEmail, hrEmail, phone },
    footerColumns[]{ title, links[]{ label, href } },
    footerConnectHeading,
    socials{ linkedin, twitter, youtube, instagram, facebook },
    footerCta{ heading, highlight, body, buttonLabel, buttonHref },
    footerBottom{
      rightsText, slogan,
      legalLinks[]{ label, href },
      creditPrefix, creditLabel, creditHref
    }
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
      "videos": videos[]{ "src": video.asset->url, startAt, duration },
      primaryCtaLabel, primaryCtaHref,
      secondaryCtaLabel, secondaryCtaHref
    },
    marqueeItems,
    metricsEyebrow,
    metricsHeading,
    metricsIntro,
    metrics[]{ value, suffix, label, note },
    missionVision{
      eyebrow, heading, missionLabel, mission, visionLabel, vision,
      "imageUrl": image.asset->url, "imageAlt": image.alt, imageCaption,
      ctaLabel, ctaHref
    },
    sustainabilityTeaser{
      eyebrow, heading, body,
      highlights[]{ label, value, href, "imageUrl": image.asset->url, "imageAlt": image.alt },
      cardLinkLabel,
      ctaLabel, ctaHref
    },
    parallaxImpact{ heading, "imageUrl": image.asset->url },
    processesTeaser{
      eyebrow, heading, body,
      "sealUrl": sealImage.asset->url, "sealAlt": sealImage.alt,
      proofPoints[]{ value, label },
      steps[]{ title, body },
      ctaLabel, ctaHref
    },
    leadershipTeaser{
      eyebrow, heading, quote, attribution,
      "portraitUrl": portrait.asset->url,
      ctaLabel, ctaHref
    },
    "leaderPortraitUrl": *[_type == "leadershipPage"][0].additionalLeaders[name match "Rahul*"][0].image.asset->url,
    certificationsTeaser{
      eyebrow, heading, body,
      "imageUrl": image.asset->url, "imageAlt": image.alt, imageBadge,
      badges[]{ label, issuer },
      ctaLabel, ctaHref
    },
    mediaTeaser{
      eyebrow, heading, body,
      items[]{ kind, title, source, date, href },
      ctaLabel, ctaHref
    },
    "mediaArticles": *[_type == "mediaPage"][0].articlesSection.items | order(date desc) [0...3]{
      "kind": topic, title, source, date, href,
      "imageUrl": image.asset->url, "imageAlt": image.alt
    }
  }
`);

/* -------------------------------------------------------------------------- */
/* Per-page singletons                                                         */
/* -------------------------------------------------------------------------- */

export const ABOUT_PAGE_QUERY = defineQuery(`
  *[_type == "aboutPage"][0]{
    ${HERO_FRAGMENT},
    heroVideos[]{ "url": video.asset->url, duration },
    purpose{ eyebrow, heading, missionLabel, mission, visionLabel, vision },
    sustainabilityStatement{ heading, body },
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
      closingHeading, closingBody,
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
      items[]{ title, body, icon, "imageUrl": image.asset->url, "imageAlt": image.alt }
    },
    recyclingStats{
      eyebrow, heading, intro,
      "imageUrl": image.asset->url, "imageAlt": image.alt,
      items[]{ label, value, note }
    },
    communityPrograms{ eyebrow, heading, intro },
    csrSection{
      eyebrow, heading, body,
      "imageUrl": image.asset->url, "imageAlt": image.alt
    },
    ehsSection{
      eyebrow, heading, body,
      "imageUrl": image.asset->url, "imageAlt": image.alt
    },
    ${SEO_FRAGMENT}
  }
`);

export const PROCESSES_PAGE_QUERY = defineQuery(`
  *[_type == "processesPage"][0]{
    ${HERO_FRAGMENT},
    processFlow{
      eyebrow, heading, body,
      flowNumber, flowTitle, flowCaption,
      steps[]{
        label, body,
        "imageUrl": image.asset->url, "imageAlt": image.alt
      },
      calloutText
    },
    technology{ heading, body },
    wasteToZinc{
      eyebrow, heading, caption,
      "sealUrl": seal.asset->url, "sealAlt": seal.alt,
      "illustrationUrl": illustration.asset->url, "illustrationAlt": illustration.alt,
      steps[]{ title, body }
    },
    ${SEO_FRAGMENT}
  }
`);

export const PROJECTS_PAGE_QUERY = defineQuery(`
  *[_type == "projectsPage"][0]{
    ${HERO_FRAGMENT},
    highlights{
      eyebrow, heading,
      items[]{ title, icon }
    },
    overview{
      eyebrow, heading, body,
      "imageUrl": image.asset->url, "imageAlt": image.alt
    },
    challenge{ eyebrow, heading, body },
    timeline{
      eyebrow, heading, intro,
      entries[]{ year, title, body }
    },
    process{
      eyebrow, heading, intro,
      steps[]{ title, body, icon },
      capacityStats[]{ value, label }
    },
    impact{
      eyebrow, heading, intro,
      achievements,
      "imageUrl": image.asset->url, "imageAlt": image.alt
    },
    circularEconomy{
      eyebrow, heading, intro,
      items[]{ title, icon }
    },
    stats{
      eyebrow, heading, intro,
      items[]{ value, suffix, label, note }
    },
    partnership{ eyebrow, heading, body },
    futureVision{ eyebrow, heading, body },
    ${SEO_FRAGMENT}
  }
`);

export const PRODUCT_PAGE_QUERY = defineQuery(`
  *[_type == "productPage"][0]{
    ${HERO_FRAGMENT},
    overview{
      eyebrow, heading, intro,
      families[]{
        title, tagline,
        "imageUrl": image.asset->url, "imageAlt": image.alt
      },
      applications{
        items[]{ title, body },
        ctaLabel, ctaHref
      }
    },
    parallax{ heading, "imageUrl": image.asset->url },
    zinc{
      eyebrow, heading, intro,
      products[]{
        name, description,
        "imageUrl": image.asset->url, "imageAlt": image.alt
      },
      calloutTitle, calloutBody,
      noteHeading, noteBody,
      noteSpecs[]{ label, value }
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
    focus{ eyebrow, heading, intro, cardLinkLabel },
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
      },
      seoTitle, seoDescription
    },
    detailPages{
      heroEyebrow, backLinkLabel,
      initiativesEyebrow, initiativesHeading,
      othersHeading, viewAllLabel
    },
    closingCta{ heading, body, primaryLabel, primaryHref },
    ${SEO_FRAGMENT}
  }
`);

export const EHS_PAGE_QUERY = defineQuery(`
  *[_type == "ehsPage"][0]{
    ${HERO_FRAGMENT},
    overview{ eyebrow, heading, body },
    environment{
      eyebrow, heading, intro,
      items[]{ title, body, icon }
    },
    health{
      eyebrow, heading, intro,
      items[]{ title, body, icon }
    },
    safety{
      eyebrow, heading, intro,
      items[]{ title, body, icon }
    },
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
    pullQuote{
      text, attribution,
      "backgroundImageUrl": backgroundImage.asset->url
    },
    director{
      eyebrow, heading, name, role, story,
      "imageUrl": image.asset->url, "imageAlt": image.alt
    },
    additionalLeaders[]{
      eyebrow, heading, name, role, story,
      "imageUrl": image.asset->url, "imageAlt": image.alt
    },
    contactEmail,
    ${SEO_FRAGMENT}
  }
`);

export const CERTIFICATIONS_PAGE_QUERY = defineQuery(`
  *[_type == "certificationsPage"][0]{
    ${HERO_FRAGMENT},
    intro{ eyebrow, heading, body, cardLinkLabel },
    certificates[]{
      category, title, issuer, body, status, icon,
      "downloadUrl": downloadFile.asset->url,
      "thumbnailUrl": thumbnail.asset->url, "thumbnailAlt": thumbnail.alt
    },
    awardsSection{ eyebrow, heading, body },
    closingCta{ heading, body, primaryLabel, primaryHref },
    ${SEO_FRAGMENT}
  }
`);

export const MEDIA_PAGE_QUERY = defineQuery(`
  *[_type == "mediaPage"][0]{
    ${HERO_FRAGMENT},
    articlesSection{
      eyebrow, heading, intro,
      items[]{
        topic, title, source, date, href,
        "imageUrl": image.asset->url, "imageAlt": image.alt
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
    enquiryForm{
      eyebrow, heading, intro, productOptions,
      nameLabel, companyLabel, phoneLabel, emailLabel,
      messageLabel, productLabel, submitLabel, sendingLabel,
      successHeading, successMessage, sendAnotherLabel
    },
    reachSection{ eyebrow, heading },
    offices[]{ label, icon, lines },
    contactLines[]{ label, icon, value, href },
    follow{ label, links[]{ platform, url } },
    mapSection{
      eyebrow, heading, intro, mapTitle,
      locationLabel, locationText,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt
    },
    mapEmbedUrl,
    ${SEO_FRAGMENT}
  }
`);

export const CAREERS_PAGE_QUERY = defineQuery(`
  *[_type == "careersPage"][0]{
    ${HERO_FRAGMENT},
    applySection{
      eyebrow, heading,
      nameLabel, emailLabel, phoneLabel, roleLabel,
      coverNoteLabel, cvLabel, cvPlaceholder,
      submitLabel, sendingLabel,
      successHeading, successMessage, applyEmail
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

