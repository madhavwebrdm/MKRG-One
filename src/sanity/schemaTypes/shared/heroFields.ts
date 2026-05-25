import { defineField } from "sanity";

export const heroField = defineField({
  name: "hero",
  title: "Hero",
  type: "object",
  options: { collapsible: true, collapsed: false },
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({
      name: "heading",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "intro", type: "text", rows: 3 }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
    }),
    defineField({ name: "primaryCtaLabel", type: "string" }),
    defineField({ name: "primaryCtaHref", type: "string" }),
    defineField({ name: "secondaryCtaLabel", type: "string" }),
    defineField({ name: "secondaryCtaHref", type: "string" }),
  ],
});
