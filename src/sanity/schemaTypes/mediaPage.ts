import { defineArrayMember, defineField, defineType } from "sanity";
import { PlayIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { iconKeyField } from "./shared/iconKey";
import { seoFields } from "./shared/seoFields";

export const mediaPage = defineType({
  name: "mediaPage",
  title: "Media page",
  type: "document",
  icon: PlayIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { ...heroField, group: "hero" },

    defineField({
      name: "articlesSection",
      title: "In the news (articles)",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "In the news" }),
        defineField({ name: "heading", type: "string" }),
        defineField({
          name: "items",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "topic", type: "string" }),
                defineField({
                  name: "title",
                  type: "string",
                  validation: (r) => r.required(),
                }),
                defineField({ name: "source", type: "string" }),
                defineField({ name: "date", type: "date" }),
                defineField({ name: "href", type: "url" }),
                defineField({
                  name: "image",
                  type: "image",
                  options: { hotspot: true },
                  fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
                }),
              ],
              preview: { select: { title: "title", subtitle: "source", media: "image" } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "companyNewsSection",
      title: "Company news",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Company news" }),
        defineField({ name: "heading", type: "string" }),
        defineField({
          name: "items",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "kind",
                  type: "string",
                  options: {
                    list: ["Certification", "Expansion", "CSR", "Milestone"],
                  },
                }),
                defineField({
                  name: "title",
                  type: "string",
                  validation: (r) => r.required(),
                }),
                defineField({ name: "body", type: "text", rows: 3 }),
                defineField({ name: "date", type: "date" }),
                defineField({ name: "href", type: "url" }),
                defineField({
                  name: "image",
                  type: "image",
                  options: { hotspot: true },
                  fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
                }),
              ],
              preview: { select: { title: "title", subtitle: "kind", media: "image" } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "pressReleasesSection",
      title: "Press releases",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Press releases" }),
        defineField({ name: "heading", type: "string" }),
        defineField({
          name: "items",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  type: "string",
                  validation: (r) => r.required(),
                }),
                defineField({ name: "summary", type: "text", rows: 3 }),
                defineField({ name: "date", type: "date" }),
                defineField({ name: "href", type: "url" }),
                defineField({ name: "downloadFile", type: "file", title: "PDF" }),
              ],
              preview: { select: { title: "title", subtitle: "date" } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "videosSection",
      title: "Videos",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Videos" }),
        defineField({ name: "heading", type: "string" }),
        defineField({
          name: "items",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  type: "string",
                  validation: (r) => r.required(),
                }),
                defineField({ name: "duration", type: "string" }),
                defineField({
                  name: "kind",
                  type: "string",
                  options: { list: ["Plant tour", "Process", "Interview"] },
                }),
                defineField({ name: "href", type: "url" }),
                defineField({
                  name: "thumbnail",
                  type: "image",
                  options: { hotspot: true },
                  fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
                }),
              ],
              preview: { select: { title: "title", subtitle: "kind", media: "thumbnail" } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "eventsSection",
      title: "Events",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Events" }),
        defineField({ name: "heading", type: "string" }),
        defineField({
          name: "items",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  type: "string",
                  validation: (r) => r.required(),
                }),
                defineField({ name: "location", type: "string" }),
                defineField({ name: "date", type: "date" }),
                defineField({
                  name: "kind",
                  type: "string",
                  options: { list: ["Exhibition", "Conference", "Community"] },
                }),
                defineField({ name: "href", type: "url" }),
                defineField({
                  name: "image",
                  type: "image",
                  options: { hotspot: true },
                  fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
                }),
              ],
              preview: { select: { title: "title", subtitle: "location", media: "image" } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "subpages",
      title: "Sub-page cards",
      type: "array",
      group: "content",
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
            defineField({
              name: "href",
              type: "string",
              validation: (r) => r.required(),
            }),
            iconKeyField,
          ],
          preview: { select: { title: "title", subtitle: "href" } },
        }),
      ],
    }),

    ...seoFields.map((f) => ({ ...f, group: "seo" })),
  ],
  preview: {
    select: { title: "hero.heading" },
    prepare: ({ title }) => ({
      title: title || "Media page",
      subtitle: "Singleton",
    }),
  },
});
