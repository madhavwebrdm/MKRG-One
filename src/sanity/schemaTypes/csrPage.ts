import { defineArrayMember, defineField, defineType } from "sanity";
import { HeartIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { iconKeyField } from "./shared/iconKey";
import { seoFields } from "./shared/seoFields";

const imageWithAlt = (name = "image", title = "Image") =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
  });

/** value + label stat (string value so "30,000+", "1 lakh+" etc. are allowed). */
const statMember = () =>
  defineArrayMember({
    type: "object",
    name: "stat",
    fields: [
      defineField({ name: "value", type: "string", validation: (r) => r.required() }),
      defineField({ name: "label", type: "string", validation: (r) => r.required() }),
    ],
    preview: { select: { title: "value", subtitle: "label" } },
  });

export const csrPage = defineType({
  name: "csrPage",
  title: "CSR page",
  type: "document",
  icon: HeartIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { ...heroField, group: "hero" },

    // Impact band
    defineField({
      name: "impact",
      title: "Impact band",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Our impact so far" }),
        defineField({ name: "heading", type: "text", rows: 2 }),
        defineField({
          name: "stats",
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
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Where we focus" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "intro", type: "text", rows: 3 }),
      ],
    }),

    // Focus areas (cards + detail-page content)
    defineField({
      name: "focusAreas",
      title: "Focus areas",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "slug",
              type: "slug",
              options: { source: "title" },
              description: "Used in the URL: /csr/<slug>.",
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
            iconKeyField,
            imageWithAlt("heroImage", "Hero image"),
            defineField({
              name: "cardStat",
              title: "Card headline stat",
              type: "object",
              fields: [
                defineField({ name: "value", type: "string" }),
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
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      type: "string",
                      validation: (r) => r.required(),
                    }),
                    imageWithAlt(),
                    defineField({
                      name: "body",
                      title: "Body paragraphs",
                      type: "array",
                      of: [{ type: "string" }],
                      description: "One entry per paragraph.",
                    }),
                    defineField({
                      name: "bullets",
                      type: "array",
                      of: [{ type: "string" }],
                    }),
                  ],
                  preview: { select: { title: "title", media: "image" } },
                }),
              ],
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "tagline", media: "heroImage" },
          },
        }),
      ],
    }),

    // Closing CTA band
    defineField({
      name: "closingCta",
      title: "Closing call to action",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 3 }),
        defineField({ name: "primaryLabel", type: "string" }),
        defineField({ name: "primaryHref", type: "string" }),
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
