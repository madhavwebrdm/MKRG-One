import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";
import { seoFields } from "./shared/seoFields";

/** Image with hotspot cropping and alt text for screen readers. */
const imageWithAlt = (name: string, title: string, description?: string) =>
  defineField({
    name,
    title,
    type: "image",
    description,
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        type: "string",
        title: "Alt text",
        description: "Short description for screen readers and search engines.",
      }),
    ],
  });

const NOT_SHOWN = "Not shown on the website at the moment.";

export const homePage = defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  icon: HomeIcon,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "metrics", title: "Metrics" },
    { name: "teasers", title: "Section teasers" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    /* HERO */
    defineField({
      name: "hero",
      type: "object",
      group: "hero",
      description: "The full-screen video banner at the top of the home page.",
      fields: [
        defineField({
          name: "eyebrow",
          type: "string",
          initialValue: "Waste is a Resource, Not a Problem",
          hidden: true,
          description: NOT_SHOWN,
        }),
        defineField({
          name: "heading",
          type: "string",
          description:
            "Big headline. Each comma starts a new line (e.g. \"Waste is a Resource, Not a Problem\").",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "subheading",
          type: "text",
          rows: 3,
          hidden: true,
          description: NOT_SHOWN,
        }),
        defineField({
          name: "positioningTags",
          title: "Tags",
          type: "array",
          of: [{ type: "string" }],
          description:
            "Optional small pills under the headline, e.g. Eco-conscious, Reliable, Forward-thinking. Leave empty to hide them.",
        }),
        defineField({
          name: "videos",
          title: "Background videos",
          type: "array",
          description:
            "These videos play one after another behind the headline and fade into each other, then loop. Use short MP4 clips (ideally under about 8 MB each).",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "video",
                  title: "Video (MP4)",
                  type: "file",
                  options: { accept: "video/mp4" },
                }),
                defineField({
                  name: "startAt",
                  title: "Start at (seconds)",
                  type: "number",
                  description: "Skip the first few seconds of the clip. 0 plays from the start.",
                  initialValue: 0,
                }),
                defineField({
                  name: "duration",
                  title: "Show for (seconds)",
                  type: "number",
                  description: "How long this clip shows before fading to the next one.",
                  initialValue: 5,
                }),
              ],
              preview: {
                select: { filename: "video.asset.originalFilename", duration: "duration" },
                prepare: ({ filename, duration }) => ({
                  title: filename || "Video",
                  subtitle: duration ? `${duration} seconds` : undefined,
                }),
              },
            },
          ],
        }),
        defineField({
          name: "image",
          title: "Poster image",
          type: "image",
          options: { hotspot: true },
          description: "Still image shown while the first video loads.",
          fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
        }),
        defineField({ name: "primaryCtaLabel", title: "Main button text", type: "string" }),
        defineField({
          name: "primaryCtaHref",
          title: "Main button link",
          type: "string",
          description: "A page on this site (e.g. /sustainability) or a full web address.",
        }),
        defineField({ name: "secondaryCtaLabel", title: "Second button text", type: "string" }),
        defineField({ name: "secondaryCtaHref", title: "Second button link", type: "string" }),
      ],
    }),

    defineField({
      name: "marqueeItems",
      title: "Scrolling strip",
      type: "array",
      group: "hero",
      description: "Short phrases that scroll across the dark green strip below the hero.",
      of: [{ type: "string" }],
    }),

    /* METRICS BAR */
    defineField({
      name: "metricsEyebrow",
      title: "Metrics label",
      type: "string",
      group: "metrics",
      description: "Small label above the metrics heading.",
    }),
    defineField({
      name: "metricsHeading",
      title: "Metrics heading",
      type: "string",
      group: "metrics",
    }),
    defineField({
      name: "metricsIntro",
      title: "Metrics intro",
      type: "text",
      rows: 2,
      group: "metrics",
    }),
    defineField({
      name: "metrics",
      type: "array",
      group: "metrics",
      description: "The numbers count up from zero when the visitor scrolls to them.",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", type: "number", validation: (r) => r.required() }),
            defineField({
              name: "suffix",
              type: "string",
              description: "Unit after the number, e.g. \" MT\" or \"%\". Start with a space to leave a gap.",
            }),
            defineField({ name: "label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "note", type: "string", description: "Small grey line under the label." }),
          ],
          preview: {
            select: { value: "value", suffix: "suffix", label: "label" },
            prepare: ({ value, suffix, label }) => ({
              title: `${value ?? ""}${suffix ?? ""}`,
              subtitle: label,
            }),
          },
        },
      ],
    }),

    /* SECTION TEASERS */
    defineField({
      name: "missionVision",
      title: "Mission & Vision teaser (About preview)",
      type: "object",
      group: "teasers",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "About us" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "missionLabel", title: "Mission card label", type: "string" }),
        defineField({ name: "mission", type: "text", rows: 4 }),
        defineField({ name: "visionLabel", title: "Vision card label", type: "string" }),
        defineField({ name: "vision", type: "text", rows: 4 }),
        imageWithAlt("image", "Photo", "Tall photo at the left of the section."),
        defineField({
          name: "imageCaption",
          title: "Photo caption",
          type: "string",
          description: "Shown in the white box at the bottom of the photo.",
        }),
        defineField({
          name: "ctaLabel",
          type: "string",
          initialValue: "Learn more about us",
          hidden: true,
          description: NOT_SHOWN,
        }),
        defineField({
          name: "ctaHref",
          type: "string",
          initialValue: "/about",
          hidden: true,
          description: NOT_SHOWN,
        }),
      ],
    }),

    defineField({
      name: "sustainabilityTeaser",
      type: "object",
      group: "teasers",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Sustainability" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 4 }),
        defineField({ name: "ctaLabel", title: "Link text", type: "string", initialValue: "See our impact" }),
        defineField({ name: "ctaHref", title: "Link", type: "string", initialValue: "/sustainability" }),
        defineField({
          name: "highlights",
          title: "Cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "label", type: "string", title: "Label" }),
                defineField({ name: "value", type: "string", title: "Text" }),
                defineField({
                  name: "href",
                  type: "string",
                  title: "Link",
                  description: "Optional. When set, the whole card links here (e.g. /csr).",
                }),
                imageWithAlt("image", "Photo"),
              ],
              preview: {
                select: { title: "label", subtitle: "value", media: "image" },
              },
            },
          ],
        }),
        defineField({
          name: "cardLinkLabel",
          title: "Card link text",
          type: "string",
          description: "Shown at the bottom of each card that has a link.",
        }),
      ],
    }),

    defineField({
      name: "parallaxImpact",
      title: "Full-screen photo statement",
      type: "object",
      group: "teasers",
      description: "Large statement over a full-screen photo, between Sustainability and the patent highlight.",
      fields: [
        defineField({
          name: "heading",
          type: "text",
          rows: 3,
          description: "Press Enter to start a new line.",
        }),
        defineField({
          name: "image",
          title: "Background photo",
          type: "image",
          options: { hotspot: true },
          description: "Darkened automatically so the text stays readable. Use a wide, high-resolution photo.",
        }),
      ],
    }),

    defineField({
      name: "processesTeaser",
      title: "Patent highlight",
      type: "object",
      group: "teasers",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Processes" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 4 }),
        imageWithAlt("sealImage", "Seal image", "Round seal at the left. A square transparent PNG works best."),
        defineField({
          name: "proofPoints",
          title: "Key figures",
          type: "array",
          description: "Gold figures under the text.",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "value", type: "string", title: "Figure", description: "e.g. 99.9%" }),
                defineField({ name: "label", type: "string", title: "Description" }),
              ],
              preview: { select: { title: "value", subtitle: "label" } },
            },
          ],
        }),
        defineField({
          name: "steps",
          type: "array",
          hidden: true,
          description: NOT_SHOWN,
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", type: "string" }),
                defineField({ name: "body", type: "text", rows: 2 }),
              ],
              preview: { select: { title: "title" } },
            },
          ],
        }),
        defineField({
          name: "ctaLabel",
          type: "string",
          initialValue: "Explore the process",
          hidden: true,
          description: NOT_SHOWN,
        }),
        defineField({
          name: "ctaHref",
          type: "string",
          initialValue: "/processes",
          hidden: true,
          description: NOT_SHOWN,
        }),
      ],
    }),

    defineField({
      name: "leadershipTeaser",
      type: "object",
      group: "teasers",
      hidden: true,
      description: NOT_SHOWN,
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Leadership" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "quote", type: "text", rows: 4 }),
        defineField({ name: "attribution", type: "string", description: "Name, role" }),
        defineField({ name: "portrait", type: "image", options: { hotspot: true } }),
        defineField({ name: "ctaLabel", type: "string", initialValue: "Meet the team" }),
        defineField({ name: "ctaHref", type: "string", initialValue: "/leadership" }),
      ],
    }),

    defineField({
      name: "certificationsTeaser",
      type: "object",
      group: "teasers",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Certifications" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 3 }),
        imageWithAlt("image", "Photo"),
        defineField({
          name: "imageBadge",
          title: "Photo badge",
          type: "string",
          description: "Small pill at the top left of the photo.",
        }),
        defineField({
          name: "badges",
          title: "Certification cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "label", type: "string", title: "Name" }),
                defineField({ name: "issuer", type: "string", title: "Issued by / type" }),
              ],
              preview: { select: { title: "label", subtitle: "issuer" } },
            },
          ],
        }),
        defineField({ name: "ctaLabel", title: "Link text", type: "string", initialValue: "View certifications" }),
        defineField({ name: "ctaHref", title: "Link", type: "string", initialValue: "/certifications" }),
      ],
    }),

    defineField({
      name: "mediaTeaser",
      type: "object",
      group: "teasers",
      description:
        "The cards in this section are the three most recent press articles from the Media page, so edit them there.",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Media" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 3 }),
        defineField({
          name: "items",
          type: "array",
          hidden: true,
          description: "Only used when the Media page has no press articles.",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "kind", type: "string", options: { list: ["Press", "Video", "Event"] } }),
                defineField({ name: "title", type: "string" }),
                defineField({ name: "source", type: "string" }),
                defineField({ name: "date", type: "date" }),
                defineField({ name: "href", type: "url" }),
              ],
              preview: { select: { title: "title", subtitle: "source" } },
            },
          ],
        }),
        defineField({ name: "ctaLabel", title: "Button text", type: "string", initialValue: "Browse the gallery" }),
        defineField({ name: "ctaHref", title: "Button link", type: "string", initialValue: "/media" }),
      ],
    }),

    ...seoFields.map((f) => ({ ...f, group: "seo" })),
  ],
  preview: {
    select: { title: "hero.heading" },
    prepare: ({ title }) => ({ title: title || "Home page", subtitle: "Singleton" }),
  },
});
