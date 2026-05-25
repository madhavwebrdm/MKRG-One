import { defineField, defineType } from "sanity";
import { BlockquoteIcon } from "@sanity/icons";

export const quoteBlock = defineType({
  name: "quoteBlock",
  title: "Pull quote",
  type: "object",
  icon: BlockquoteIcon,
  fields: [
    defineField({
      name: "text",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "attribution",
      type: "string",
      description: "Name, role.",
    }),
    defineField({
      name: "tone",
      type: "string",
      options: {
        list: [
          { title: "Dark (deep green)", value: "dark" },
          { title: "Light", value: "light" },
        ],
        layout: "radio",
      },
      initialValue: "dark",
    }),
  ],
  preview: {
    select: { title: "text", subtitle: "attribution" },
    prepare: ({ title, subtitle }) => ({
      title: title ? `"${title.slice(0, 60)}…"` : "Pull quote",
      subtitle,
    }),
  },
});
