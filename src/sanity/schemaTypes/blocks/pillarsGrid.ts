import { defineArrayMember, defineField, defineType } from "sanity";
import { ThListIcon } from "@sanity/icons";
import { iconKeyField } from "../shared/iconKey";

export const pillarsGrid = defineType({
  name: "pillarsGrid",
  title: "Pillars grid",
  type: "object",
  icon: ThListIcon,
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({
      name: "heading",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "intro", type: "text", rows: 3 }),
    defineField({
      name: "pillars",
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
            defineField({ name: "body", type: "text", rows: 3 }),
            iconKeyField,
          ],
          preview: {
            select: { title: "title", subtitle: "icon" },
          },
        }),
      ],
    }),
    defineField({
      name: "tone",
      type: "string",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Dark (deep green)", value: "dark" },
          { title: "Green gradient", value: "green-gradient" },
        ],
        layout: "radio",
      },
      initialValue: "light",
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({
      title: title || "Pillars grid",
      subtitle: "Pillars / values grid",
    }),
  },
});
