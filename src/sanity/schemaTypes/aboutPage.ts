import { defineArrayMember, defineField, defineType } from "sanity";
import { InfoOutlineIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { iconKeyField } from "./shared/iconKey";
import { seoFields } from "./shared/seoFields";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  icon: InfoOutlineIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { ...heroField, group: "hero" },

    defineField({
      name: "purpose",
      title: "Mission & Vision",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Purpose" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "mission", type: "text", rows: 4 }),
        defineField({ name: "vision", type: "text", rows: 4 }),
      ],
    }),

    defineField({
      name: "values",
      title: "Values",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Values" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "intro", type: "text", rows: 3 }),
        defineField({
          name: "items",
          type: "array",
          validation: (r) => r.min(1).max(12),
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
              preview: { select: { title: "title", subtitle: "icon" } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "brandIdentity",
      title: "Brand identity",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Brand identity" }),
        defineField({ name: "heading", type: "string" }),
        defineField({
          name: "body",
          type: "array",
          of: [{ type: "block", styles: [{ title: "Normal", value: "normal" }] }],
        }),
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
        }),
        defineField({ name: "caption", type: "string" }),
      ],
    }),

    defineField({
      name: "differentiators",
      title: "Differentiators",
      type: "object",
      group: "content",
      fields: [
        defineField({
          name: "eyebrow",
          type: "string",
          initialValue: "Differentiators",
        }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "intro", type: "text", rows: 3 }),
        defineField({
          name: "items",
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
                defineField({
                  name: "image",
                  type: "image",
                  options: { hotspot: true },
                  fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
                }),
              ],
              preview: { select: { title: "title", media: "image" } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "timeline",
      title: "Timeline",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Our story" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "intro", type: "text", rows: 3 }),
        defineField({
          name: "entries",
          type: "array",
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
              preview: { select: { title: "title", subtitle: "year" } },
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
      title: title || "About page",
      subtitle: "Singleton",
    }),
  },
});
