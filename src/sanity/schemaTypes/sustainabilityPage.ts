import { defineArrayMember, defineField, defineType } from "sanity";
import { EarthGlobeIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { iconKeyField } from "./shared/iconKey";
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

// The hero heading on this page uses a line break, so it is a multi-line text
// box here (the shared hero uses a single-line input).
const sustainabilityHeroField = {
  ...heroField,
  fields: (heroField as unknown as { fields: Array<{ name: string }> }).fields.map((f) =>
    f.name === "heading"
      ? {
          ...f,
          type: "text",
          rows: 2,
          description: "Press Enter to start a new line in the heading.",
        }
      : f,
  ),
} as typeof heroField;

export const sustainabilityPage = defineType({
  name: "sustainabilityPage",
  title: "Sustainability page",
  type: "document",
  icon: EarthGlobeIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { ...sustainabilityHeroField, group: "hero" },

    defineField({
      name: "metricsBlock",
      title: "Environmental impact (dark green band)",
      type: "object",
      group: "content",
      description: "The animated numbers below the hero.",
      fields: [
        defineField({ name: "eyebrow", title: "Small label above heading", type: "string", initialValue: "Impact" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "intro", title: "Intro text", type: "text", rows: 3 }),
        defineField({
          name: "items",
          title: "Metrics",
          type: "array",
          validation: (r) => r.min(1).max(8),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "value",
                  title: "Number",
                  type: "number",
                  description: "Counts up from 0 when scrolled into view.",
                  validation: (r) => r.required(),
                }),
                defineField({
                  name: "suffix",
                  title: "Unit / suffix",
                  type: "string",
                  description: 'Shown after the number, e.g. " Mt" or "%". Include a leading space if you want a gap.',
                }),
                defineField({
                  name: "label",
                  type: "string",
                  validation: (r) => r.required(),
                }),
                defineField({ name: "note", title: "Small note", type: "string" }),
              ],
              preview: {
                select: { value: "value", suffix: "suffix", label: "label" },
                prepare: ({ value, suffix, label }) => ({
                  title: `${value ?? ""}${suffix ?? ""}`,
                  subtitle: label,
                }),
              },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "pillars",
      title: "Pillars of impact",
      type: "object",
      group: "content",
      description: "Heading and the photo cards below the impact numbers.",
      fields: [
        defineField({ name: "eyebrow", title: "Small label above heading", type: "string", initialValue: "Our pillars" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "intro", title: "Intro text", type: "text", rows: 3 }),
        defineField({
          name: "items",
          title: "Pillar cards",
          type: "array",
          validation: (r) => r.min(1).max(8),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  type: "string",
                  validation: (r) => r.required(),
                }),
                defineField({ name: "body", title: "Text", type: "text", rows: 3 }),
                imageWithAlt("image", "Photo"),
                // Not shown on the website (cards use photos), kept for older content.
                { ...iconKeyField, hidden: true },
              ],
              preview: { select: { title: "title", subtitle: "body", media: "image" } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "recyclingStats",
      title: "Recycling statistics",
      type: "object",
      group: "content",
      description: "Photo on the left, heading and stat boxes on the right.",
      fields: [
        defineField({ name: "eyebrow", title: "Small label above heading", type: "string" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "intro", title: "Intro text", type: "text", rows: 3 }),
        imageWithAlt("image", "Photo"),
        defineField({
          name: "items",
          title: "Stat boxes",
          type: "array",
          validation: (r) => r.min(1).max(6),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "label",
                  type: "string",
                  validation: (r) => r.required(),
                }),
                defineField({
                  name: "value",
                  type: "string",
                  validation: (r) => r.required(),
                }),
                defineField({ name: "note", title: "Small note", type: "text", rows: 2 }),
              ],
              preview: { select: { title: "label", subtitle: "value" } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "communityPrograms",
      title: "Community programs (section header)",
      type: "object",
      group: "content",
      description: "Heading above the CSR and EHS cards.",
      fields: [
        defineField({ name: "eyebrow", title: "Small label above heading", type: "string" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "intro", title: "Intro text", type: "text", rows: 3 }),
      ],
    }),

    defineField({
      name: "csrSection",
      title: "CSR card",
      type: "object",
      group: "content",
      description: "Left card in the Community programs section.",
      fields: [
        defineField({ name: "eyebrow", title: "Small label above heading", type: "string", initialValue: "CSR" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", title: "Text", type: "text", rows: 4 }),
        imageWithAlt("image", "Photo"),
      ],
    }),

    defineField({
      name: "ehsSection",
      title: "EHS card",
      type: "object",
      group: "content",
      description: "Right card in the Community programs section.",
      fields: [
        defineField({ name: "eyebrow", title: "Small label above heading", type: "string", initialValue: "EHS" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", title: "Text", type: "text", rows: 4 }),
        imageWithAlt("image", "Photo"),
      ],
    }),

    // Not shown on the website at the moment; hidden so editors are not confused.
    defineField({
      name: "subpages",
      title: "Sub-page cards",
      type: "array",
      group: "content",
      hidden: true,
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({ name: "body", type: "text", rows: 3 }),
            defineField({
              name: "href",
              type: "string",
              validation: (r) => r.required(),
            }),
            iconKeyField,
          ],
          preview: { select: { title: "title", subtitle: "href" } },
        }),
      ],
    }),

    ...seoFields.map((f) => ({ ...f, group: "seo" })),
  ],
  preview: {
    select: { title: "hero.heading" },
    prepare: ({ title }) => ({
      title: title || "Sustainability page",
      subtitle: "Singleton",
    }),
  },
});
