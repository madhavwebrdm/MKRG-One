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
      defineField({ name: "eyebrow", type: "string", initialValue: initialEyebrow }),
      defineField({ name: "heading", type: "string" }),
      defineField({ name: "intro", type: "text", rows: 3 }),
      defineField({
        name: "items",
        type: "array",
        validation: (r) => r.min(1).max(8),
        of: [
          defineArrayMember({
            type: "object",
            fields: [
              defineField({ name: "title", type: "string", validation: (r) => r.required() }),
              defineField({ name: "body", type: "text", rows: 3 }),
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
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Environment, Health & Safety" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 4 }),
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
      title: title || "EHS page",
      subtitle: "Singleton",
    }),
  },
});
