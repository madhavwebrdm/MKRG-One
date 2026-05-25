import { defineArrayMember, defineField, defineType } from "sanity";
import { EarthGlobeIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { iconKeyField } from "./shared/iconKey";
import { seoFields } from "./shared/seoFields";

export const sustainabilityPage = defineType({
  name: "sustainabilityPage",
  title: "Sustainability page",
  type: "document",
  icon: EarthGlobeIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { ...heroField, group: "hero" },

    defineField({
      name: "metricsBlock",
      title: "Impact metrics",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Impact" }),
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
                  name: "value",
                  type: "number",
                  validation: (r) => r.required(),
                }),
                defineField({ name: "suffix", type: "string" }),
                defineField({
                  name: "label",
                  type: "string",
                  validation: (r) => r.required(),
                }),
                defineField({ name: "note", type: "string" }),
              ],
              preview: {
                select: { value: "value", suffix: "suffix", label: "label" },
                prepare: ({ value, suffix, label }) => ({
                  title: `${value ?? ""}${suffix ?? ""}`,
                  subtitle: label,
                }),
              },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "pillars",
      title: "Sustainability pillars",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Our pillars" }),
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
              ],
              preview: { select: { title: "title", subtitle: "icon" } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "recyclingStats",
      title: "Recycling statistics",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "intro", type: "text", rows: 3 }),
        defineField({
          name: "items",
          type: "array",
          validation: (r) => r.min(1).max(6),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "label",
                  type: "string",
                  validation: (r) => r.required(),
                }),
                defineField({
                  name: "value",
                  type: "string",
                  validation: (r) => r.required(),
                }),
                defineField({ name: "note", type: "string" }),
              ],
              preview: { select: { title: "label", subtitle: "value" } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "csrSection",
      title: "CSR section",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "CSR" }),
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
      ],
    }),

    defineField({
      name: "ehsSection",
      title: "EHS section",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "EHS" }),
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
      title: title || "Sustainability page",
      subtitle: "Singleton",
    }),
  },
});
