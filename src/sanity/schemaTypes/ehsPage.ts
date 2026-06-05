import { defineField, defineType } from "sanity";
import { ActivityIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { seoFields } from "./shared/seoFields";

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

    // Coming-soon block
    defineField({
      name: "comingSoon",
      title: "Coming soon block",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Coming soon" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 4 }),
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
      title: title || "EHS page",
      subtitle: "Singleton",
    }),
  },
});
