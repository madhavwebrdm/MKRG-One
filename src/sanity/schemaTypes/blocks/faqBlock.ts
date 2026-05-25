import { defineArrayMember, defineField, defineType } from "sanity";
import { HelpCircleIcon } from "@sanity/icons";

export const faqBlock = defineType({
  name: "faqBlock",
  title: "FAQ",
  type: "object",
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: "heading",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "intro", type: "text", rows: 3 }),
    defineField({
      name: "items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "question",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "answer",
              type: "array",
              of: [{ type: "block" }],
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: "question" } },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: title || "FAQ", subtitle: "FAQ" }),
  },
});
