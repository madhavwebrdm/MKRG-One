import { defineArrayMember, defineField, defineType } from "sanity";
import { TrolleyIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { seoFields } from "./shared/seoFields";

export const wasteWeBuyPage = defineType({
  name: "wasteWeBuyPage",
  title: "Waste We Buy page",
  type: "document",
  icon: TrolleyIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { ...heroField, group: "hero" },

    defineField({
      name: "intro",
      title: "Introduction",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", title: "Small label above the heading", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "body", title: "Text", type: "text", rows: 4 }),
      ],
    }),

    defineField({
      name: "materials",
      title: "Materials we buy",
      type: "array",
      group: "content",
      description: "Each material is shown as a card. Add a photo to show it on the card.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Material name", type: "string" }),
            defineField({ name: "description", title: "Short description", type: "text", rows: 3 }),
            defineField({
              name: "image",
              title: "Photo (optional)",
              type: "image",
              options: { hotspot: true },
              fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
            }),
          ],
          preview: { select: { title: "name", subtitle: "description", media: "image" } },
        }),
      ],
    }),

    defineField({
      name: "cta",
      title: "Closing call to action",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "body", title: "Text", type: "text", rows: 3 }),
        defineField({ name: "buttonLabel", title: "Button text", type: "string" }),
        defineField({ name: "buttonHref", title: "Button link", type: "string" }),
      ],
    }),

    ...seoFields.map((f) => ({ ...f, group: "seo" })),
  ],
  preview: { prepare: () => ({ title: "Waste We Buy" }) },
});
