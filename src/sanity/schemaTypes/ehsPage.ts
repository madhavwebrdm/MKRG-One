import { defineArrayMember, defineField, defineType } from "sanity";
import { ActivityIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { iconKeyField } from "./shared/iconKey";
import { seoFields } from "./shared/seoFields";

const pillarSection = (name: string, title: string, initialEyebrow: string) =>
  defineField({
    name,
    title,
    type: "object",
    group: "content",
    fields: [
      defineField({ name: "eyebrow", title: "Small label above heading", type: "string", initialValue: initialEyebrow }),
      defineField({ name: "heading", type: "string" }),
      defineField({ name: "intro", title: "Intro text", type: "text", rows: 3 }),
      defineField({
        name: "items",
        title: "Cards",
        type: "array",
        validation: (r) => r.min(1).max(8),
        of: [
          defineArrayMember({
            type: "object",
            fields: [
              defineField({ name: "title", type: "string", validation: (r) => r.required() }),
              defineField({ name: "body", title: "Text", type: "text", rows: 3 }),
              iconKeyField,
            ],
            preview: { select: { title: "title", subtitle: "icon" } },
          }),
        ],
      }),
    ],
  });

export const ehsPage = defineType({
  name: "ehsPage",
  title: "EHS page",
  type: "document",
  icon: ActivityIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { ...heroField, group: "hero" },

    // Overview statement
    defineField({
      name: "overview",
      title: "Overview statement",
      type: "object",
      group: "content",
      description: "Centred heading and text below the hero.",
      fields: [
        // Not shown on the website at the moment; hidden so editors are not confused.
        defineField({
          name: "eyebrow",
          type: "string",
          initialValue: "Environment, Health & Safety",
          hidden: true,
        }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", title: "Text", type: "text", rows: 4 }),
      ],
    }),

    pillarSection("environment", "Environment section", "Environment"),
    pillarSection("health", "Health section", "Health"),
    pillarSection("safety", "Safety section", "Safety"),

    // Closing CTA band
    defineField({
      name: "closingCta",
      title: "Closing call to action",
      type: "object",
      group: "content",
      description: "Dark green band at the bottom of the page.",
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
      title: title || "EHS page",
      subtitle: "Singleton",
    }),
  },
});
