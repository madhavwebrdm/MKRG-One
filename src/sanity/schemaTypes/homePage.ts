import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const homePage = defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  icon: HomeIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "metrics", title: "Metrics" },
    { name: "teasers", title: "Section teasers" },
  ],
  fields: [
    /* HERO */
    defineField({
      name: "hero",
      type: "object",
      group: "hero",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Waste is a Resource, Not a Problem" }),
        defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
        defineField({ name: "subheading", type: "text", rows: 3 }),
        defineField({
          name: "positioningTags",
          type: "array",
          of: [{ type: "string" }],
          description: "e.g. Eco-conscious · Reliable · Forward-thinking · Community-driven",
        }),
        defineField({
          name: "image",
          title: "Hero image",
          type: "image",
          options: { hotspot: true },
          description: "Recommended ≥ 2000px wide. A placeholder illustration shows until uploaded.",
          fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
        }),
        defineField({ name: "primaryCtaLabel", type: "string" }),
        defineField({ name: "primaryCtaHref", type: "string" }),
        defineField({ name: "secondaryCtaLabel", type: "string" }),
        defineField({ name: "secondaryCtaHref", type: "string" }),
      ],
    }),

    /* METRICS BAR */
    defineField({
      name: "metricsHeading",
      type: "string",
      group: "metrics",
    }),
    defineField({
      name: "metricsIntro",
      type: "text",
      rows: 2,
      group: "metrics",
    }),
    defineField({
      name: "metrics",
      type: "array",
      group: "metrics",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", type: "number", validation: (r) => r.required() }),
            defineField({ name: "suffix", type: "string" }),
            defineField({ name: "label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "note", type: "string" }),
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
        defineField({ name: "mission", type: "text", rows: 4 }),
        defineField({ name: "vision", type: "text", rows: 4 }),
        defineField({ name: "ctaLabel", type: "string", initialValue: "Learn more about us" }),
        defineField({ name: "ctaHref", type: "string", initialValue: "/about" }),
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
        defineField({
          name: "highlights",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "label", type: "string" }),
                defineField({ name: "value", type: "string" }),
              ],
            },
          ],
        }),
        defineField({ name: "ctaLabel", type: "string", initialValue: "See our impact" }),
        defineField({ name: "ctaHref", type: "string", initialValue: "/sustainability" }),
      ],
    }),

    defineField({
      name: "processesTeaser",
      type: "object",
      group: "teasers",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Processes" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 4 }),
        defineField({
          name: "steps",
          type: "array",
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
        defineField({ name: "ctaLabel", type: "string", initialValue: "Explore the process" }),
        defineField({ name: "ctaHref", type: "string", initialValue: "/processes" }),
      ],
    }),

    defineField({
      name: "leadershipTeaser",
      type: "object",
      group: "teasers",
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
        defineField({
          name: "badges",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "label", type: "string" }),
                defineField({ name: "issuer", type: "string" }),
              ],
              preview: { select: { title: "label", subtitle: "issuer" } },
            },
          ],
        }),
        defineField({ name: "ctaLabel", type: "string", initialValue: "View certifications" }),
        defineField({ name: "ctaHref", type: "string", initialValue: "/certifications" }),
      ],
    }),

    defineField({
      name: "mediaTeaser",
      type: "object",
      group: "teasers",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Media" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 3 }),
        defineField({
          name: "items",
          type: "array",
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
        defineField({ name: "ctaLabel", type: "string", initialValue: "Browse the gallery" }),
        defineField({ name: "ctaHref", type: "string", initialValue: "/media" }),
      ],
    }),
  ],
  preview: {
    select: { title: "hero.heading" },
    prepare: ({ title }) => ({ title: title || "Home page", subtitle: "Singleton" }),
  },
});
