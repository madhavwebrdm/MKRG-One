import { defineField, defineType } from "sanity";
import { RocketIcon } from "@sanity/icons";

export const ctaBlock = defineType({
  name: "ctaBlock",
  title: "CTA section",
  type: "object",
  icon: RocketIcon,
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({
      name: "heading",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "body", type: "text", rows: 3 }),
    defineField({ name: "primaryLabel", type: "string" }),
    defineField({ name: "primaryHref", type: "string" }),
    defineField({ name: "secondaryLabel", type: "string" }),
    defineField({ name: "secondaryHref", type: "string" }),
    defineField({
      name: "tone",
      type: "string",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Dark (deep green)", value: "dark" },
        ],
        layout: "radio",
      },
      initialValue: "light",
    }),
  ],
  preview: {
    select: { title: "heading", subtitle: "eyebrow" },
    prepare: ({ title, subtitle }) => ({
      title: title || "CTA section",
      subtitle: subtitle || "CTA",
    }),
  },
});
