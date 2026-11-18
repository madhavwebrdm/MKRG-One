import { defineArrayMember, defineField, defineType } from "sanity";
import { CheckmarkCircleIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { seoFields } from "./shared/seoFields";

export const qualityControlPage = defineType({
  name: "qualityControlPage",
  title: "Quality Control page",
  type: "document",
  icon: CheckmarkCircleIcon,
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
        defineField({
          name: "body",
          title: "Text",
          type: "text",
          rows: 4,
          description: "One paragraph per line.",
        }),
      ],
    }),

    defineField({
      name: "commitments",
      title: "Our commitments",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", title: "Small label above the heading", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "items",
          title: "Commitments",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
          description: "Each line is shown as a ticked item.",
        }),
      ],
    }),

    defineField({
      name: "testing",
      title: "Testing & laboratory",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", title: "Small label above the heading", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "body",
          title: "Text",
          type: "text",
          rows: 6,
          description: "One paragraph per line. Describe the testing equipment and lab checks.",
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
        }),
      ],
    }),

    defineField({
      name: "policy",
      title: "Quality policy",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", title: "Small label above the heading", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "body",
          title: "Text",
          type: "text",
          rows: 5,
          description: "One paragraph per line.",
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
  preview: { prepare: () => ({ title: "Quality Control" }) },
});
