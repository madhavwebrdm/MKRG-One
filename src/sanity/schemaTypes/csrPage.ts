import { defineArrayMember, defineField, defineType } from "sanity";
import { HeartIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { ICON_KEYS } from "./shared/iconKey";
import { seoFields } from "./shared/seoFields";

const imageWithAlt = (name = "image", title = "Image", description?: string) =>
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
        description: "Short description of the photo for screen readers and search engines.",
      }),
    ],
  });

/** value + label stat (string value so "30,000+", "1 lakh+" etc. are allowed). */
const statMember = () =>
  defineArrayMember({
    type: "object",
    name: "stat",
    fields: [
      defineField({
        name: "value",
        title: "Number",
        type: "string",
        description: 'Written exactly as shown, e.g. "30,000+" or "1 lakh+".',
        validation: (r) => r.required(),
      }),
      defineField({ name: "label", type: "string", validation: (r) => r.required() }),
    ],
    preview: { select: { title: "value", subtitle: "label" } },
  });

// Shared icon list plus the three icons used only by the CSR focus areas
// (resolved in src/lib/csr.ts).
const CSR_ICON_KEYS = [...ICON_KEYS, "graduation-cap", "heart-pulse", "wrench"];

export const csrPage = defineType({
  name: "csrPage",
  title: "CSR page",
  type: "document",
  icon: HeartIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Content", default: true },
    { name: "focusAreas", title: "Focus areas" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { ...heroField, group: "hero" },

    // Impact band
    defineField({
      name: "impact",
      title: "Impact band (dark green)",
      type: "object",
      group: "content",
      description: "The row of big numbers below the hero.",
      fields: [
        defineField({ name: "eyebrow", title: "Small label above heading", type: "string", initialValue: "Our impact so far" }),
        defineField({ name: "heading", type: "text", rows: 2 }),
        defineField({
          name: "stats",
          title: "Numbers",
          type: "array",
          validation: (r) => r.min(1).max(8),
          of: [statMember()],
        }),
      ],
    }),

    // Focus-areas section header
    defineField({
      name: "focus",
      title: "Focus areas (section header)",
      type: "object",
      group: "content",
      description: "Heading above the focus-area cards on the CSR page.",
      fields: [
        defineField({ name: "eyebrow", title: "Small label above heading", type: "string", initialValue: "Where we focus" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "intro", title: "Intro text", type: "text", rows: 3 }),
        defineField({
          name: "cardLinkLabel",
          title: "Card link text",
          type: "string",
          description: 'Link text at the bottom of every focus-area card, e.g. "Explore focus area".',
        }),
      ],
    }),

    // Focus areas (cards + detail-page content)
    defineField({
      name: "focusAreas",
      title: "Focus areas",
      type: "array",
      group: "focusAreas",
      description:
        "Each focus area is a card on the CSR page and has its own page at /csr/<slug>.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "slug",
              type: "slug",
              options: { source: "title" },
              description:
                "Used in the URL: /csr/<slug>. Changing it changes the page address, so old links stop working.",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "title",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "tagline",
              type: "text",
              rows: 2,
              description: "One-line summary shown on the focus-area card.",
            }),
            defineField({
              name: "summary",
              type: "text",
              rows: 3,
              description: "Longer intro shown in the detail-page hero.",
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              description: 'Shown in the "Explore other focus areas" list.',
              options: {
                list: CSR_ICON_KEYS.map((key) => ({ title: key, value: key })),
              },
            }),
            imageWithAlt(
              "heroImage",
              "Hero image",
              "Background of the detail-page hero and the photo on the focus-area card.",
            ),
            defineField({
              name: "cardStat",
              title: "Card headline stat",
              type: "object",
              description: "Big number on the card (also shown in the other-focus-areas list).",
              fields: [
                defineField({ name: "value", title: "Number", type: "string" }),
                defineField({ name: "label", type: "string" }),
              ],
            }),
            defineField({
              name: "stats",
              title: "Detail-page stats",
              type: "array",
              of: [statMember()],
            }),
            defineField({
              name: "initiatives",
              title: "Initiatives",
              type: "array",
              description: "The alternating photo and text blocks on the detail page.",
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      type: "string",
                      validation: (r) => r.required(),
                    }),
                    imageWithAlt("image", "Photo"),
                    defineField({
                      name: "body",
                      title: "Paragraphs",
                      type: "array",
                      of: [{ type: "text", rows: 4 }],
                      description: "One entry per paragraph.",
                    }),
                    defineField({
                      name: "bullets",
                      title: "Bullet points",
                      type: "array",
                      of: [{ type: "string" }],
                      description: "Optional tick-mark list shown under the paragraphs.",
                    }),
                  ],
                  preview: { select: { title: "title", media: "image" } },
                }),
              ],
            }),
            defineField({
              name: "seoTitle",
              title: "Detail page: meta title",
              type: "string",
              description: "Browser-tab and search-result title of this focus-area page.",
            }),
            defineField({
              name: "seoDescription",
              title: "Detail page: meta description",
              type: "text",
              rows: 3,
              description: "Search-result description of this focus-area page.",
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "tagline", media: "heroImage" },
          },
        }),
      ],
    }),

    // Labels shared by all focus-area detail pages
    defineField({
      name: "detailPages",
      title: "Focus-area pages (shared text)",
      type: "object",
      group: "focusAreas",
      description: "Headings and link labels that appear on every /csr/<slug> page.",
      fields: [
        defineField({
          name: "heroEyebrow",
          title: "Small label in the hero",
          type: "string",
        }),
        defineField({
          name: "backLinkLabel",
          title: "Back link text",
          type: "string",
          description: "Link back to the CSR page, above the stats.",
        }),
        defineField({
          name: "initiativesEyebrow",
          title: "Initiatives: small label above heading",
          type: "string",
        }),
        defineField({
          name: "initiativesHeading",
          title: "Initiatives: heading",
          type: "string",
        }),
        defineField({
          name: "othersHeading",
          title: "Other focus areas: heading",
          type: "string",
        }),
        defineField({
          name: "viewAllLabel",
          title: "Other focus areas: link text",
          type: "string",
          description: "Link back to the CSR page, next to the heading.",
        }),
      ],
    }),

    // Closing CTA band
    defineField({
      name: "closingCta",
      title: "Closing call to action",
      type: "object",
      group: "content",
      description: "Dark green box at the bottom of the CSR page.",
      fields: [
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", title: "Text", type: "text", rows: 3 }),
        defineField({ name: "primaryLabel", title: "Button text", type: "string" }),
        defineField({
          name: "primaryHref",
          title: "Button link",
          type: "string",
          description: 'A page on this site (e.g. "/contact") or a full web address.',
        }),
      ],
    }),

    ...seoFields.map((f) => ({ ...f, group: "seo" })),
  ],
  preview: {
    select: { title: "hero.heading" },
    prepare: ({ title }) => ({
      title: title || "CSR page",
      subtitle: "Singleton",
    }),
  },
});
