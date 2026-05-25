import { defineArrayMember, defineField, defineType } from "sanity";
import { ClockIcon } from "@sanity/icons";

export const timelineBlock = defineType({
  name: "timelineBlock",
  title: "Timeline",
  type: "object",
  icon: ClockIcon,
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({
      name: "heading",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "intro", type: "text", rows: 3 }),
    defineField({
      name: "entries",
      type: "array",
      validation: (r) => r.min(1),
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "year",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "title",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({ name: "body", type: "text", rows: 3 }),
          ],
          preview: {
            select: { title: "title", subtitle: "year" },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({
      title: title || "Timeline",
      subtitle: "Timeline",
    }),
  },
});
