import { defineQuery } from "next-sanity";

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

export const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "homePage"][0]{
    hero{
      eyebrow,
      heading,
      subheading,
      positioningTags,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      primaryCtaLabel,
      primaryCtaHref,
      secondaryCtaLabel,
      secondaryCtaHref
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
