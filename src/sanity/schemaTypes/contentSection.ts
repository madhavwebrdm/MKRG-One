import { defineField, defineType } from "sanity";
import { TextIcon } from "@sanity/icons";

export const contentSection = defineType({
  name: "contentSection",
  title: "Content section",
  type: "object",
  icon: TextIcon,
  fields: [
    defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  preview: {
    select: { heading: "heading" },
    prepare: ({ heading }) => ({ title: heading || "Content section" }),
  },
});
