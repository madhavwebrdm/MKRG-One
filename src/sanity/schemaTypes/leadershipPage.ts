import { defineArrayMember, defineField, defineType } from "sanity";
import { UsersIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { seoFields } from "./shared/seoFields";

const principalFields = (defaultEyebrow: string) => [
  defineField({ name: "eyebrow", type: "string", initialValue: defaultEyebrow }),
  defineField({ name: "heading", type: "string" }),
  defineField({
    name: "name",
    type: "string",
    validation: (r) => r.required(),
  }),
  defineField({ name: "role", type: "string" }),
  defineField({
    name: "story",
    title: "Message",
    type: "text",
    rows: 6,
    description: "One paragraph per line.",
  }),
  defineField({
    name: "image",
    title: "Portrait",
    type: "image",
    options: { hotspot: true },
    fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
  }),
];

export const leadershipPage = defineType({
  name: "leadershipPage",
  title: "Leadership page",
  type: "document",
  icon: UsersIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { ...heroField, group: "hero" },

    defineField({
      name: "founder",
      title: "Founder message",
      type: "object",
      group: "content",
      fields: principalFields("Founder"),
    }),

    defineField({
      name: "pullQuote",
      title: "Pull quote",
      type: "object",
      group: "content",
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
      ],
    }),

    defineField({
      name: "director",
      title: "Director message",
      type: "object",
      group: "content",
      fields: principalFields("Director"),
    }),

    defineField({
      name: "additionalLeaders",
      title: "Additional leadership messages",
      description:
        "More leadership sections shown below the Director message, in order.",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "object",
          fields: principalFields("Leadership"),
          preview: { select: { title: "name", subtitle: "role", media: "image" } },
        }),
      ],
    }),

    ...seoFields.map((f) => ({ ...f, group: "seo" })),
  ],
  preview: {
    select: { title: "hero.heading" },
    prepare: ({ title }) => ({
      title: title || "Leadership page",
      subtitle: "Singleton",
    }),
  },
});
