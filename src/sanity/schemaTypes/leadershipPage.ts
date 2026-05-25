import { defineArrayMember, defineField, defineType } from "sanity";
import { UsersIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { seoFields } from "./shared/seoFields";

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
      title: "Founder",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Founder" }),
        defineField({ name: "heading", type: "string" }),
        defineField({
          name: "name",
          type: "string",
          validation: (r) => r.required(),
        }),
        defineField({ name: "role", type: "string" }),
        defineField({
          name: "story",
          type: "array",
          title: "Founder story",
          of: [{ type: "block", styles: [{ title: "Normal", value: "normal" }] }],
        }),
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
        }),
      ],
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
      name: "team",
      title: "Leadership team",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "The team" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "intro", type: "text", rows: 3 }),
        defineField({
          name: "members",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "name",
                  type: "string",
                  validation: (r) => r.required(),
                }),
                defineField({ name: "role", type: "string" }),
                defineField({ name: "bio", type: "text", rows: 3 }),
                defineField({
                  name: "photo",
                  type: "image",
                  options: { hotspot: true },
                  fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
                }),
                defineField({ name: "linkedin", type: "url" }),
                defineField({
                  name: "email",
                  type: "string",
                  validation: (r) => r.email(),
                }),
              ],
              preview: { select: { title: "name", subtitle: "role", media: "photo" } },
            }),
          ],
        }),
        defineField({ name: "closingCtaLabel", type: "string" }),
        defineField({ name: "closingCtaHref", type: "string" }),
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
