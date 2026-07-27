import { defineArrayMember, defineField, defineType } from "sanity";
import { ProjectsIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { iconKeyField } from "./shared/iconKey";
import { seoFields } from "./shared/seoFields";

export const projectsPage = defineType({
  name: "projectsPage",
  title: "Projects page",
  type: "document",
  icon: ProjectsIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { ...heroField, group: "hero" },

    defineField({
      name: "highlights",
      title: "Key highlights",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Waste Recycling Division" }),
        defineField({ name: "heading", type: "string" }),
        defineField({
          name: "items",
          type: "array",
          validation: (r) => r.min(1).max(6),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "title", type: "string", validation: (r) => r.required() }),
                iconKeyField,
              ],
              preview: { select: { title: "title", subtitle: "icon" } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "overview",
      title: "About the project",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "About the project" }),
        defineField({ name: "heading", type: "string" }),
        defineField({
          name: "body",
          type: "text",
          rows: 8,
          description: "One paragraph per line. Rendered as separate paragraphs.",
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
      name: "challenge",
      title: "The need for sustainable waste management",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "The challenge" }),
        defineField({ name: "heading", type: "string" }),
        defineField({
          name: "body",
          type: "text",
          rows: 8,
          description: "One paragraph per line. Rendered as separate paragraphs.",
        }),
        defineField({
          name: "backgroundImage",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
        }),
      ],
    }),

    defineField({
      name: "timeline",
      title: "Project development journey",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Project timeline" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "intro", type: "text", rows: 3 }),
        defineField({
          name: "entries",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "year", type: "string", validation: (r) => r.required() }),
                defineField({ name: "title", type: "string", validation: (r) => r.required() }),
                defineField({ name: "body", type: "text", rows: 3 }),
              ],
              preview: { select: { title: "title", subtitle: "year" } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "process",
      title: "Technology & process",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Technology & process" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "intro", type: "text", rows: 4 }),
        defineField({
          name: "steps",
          title: "Process overview steps",
          type: "array",
          validation: (r) => r.min(1).max(8),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "title", type: "string", validation: (r) => r.required() }),
                defineField({ name: "body", type: "text", rows: 3 }),
                iconKeyField,
              ],
              preview: { select: { title: "title", subtitle: "icon" } },
            }),
          ],
        }),
        defineField({
          name: "capacityStats",
          title: "Plant capacity stats",
          type: "array",
          validation: (r) => r.max(4),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "value", type: "string", validation: (r) => r.required() }),
                defineField({ name: "label", type: "string", validation: (r) => r.required() }),
              ],
              preview: { select: { title: "value", subtitle: "label" } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "impact",
      title: "Environmental impact",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Environmental impact" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "intro", type: "text", rows: 3 }),
        defineField({
          name: "achievements",
          type: "array",
          of: [{ type: "string" }],
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
      name: "circularEconomy",
      title: "Circular economy contribution",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Circular economy" }),
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
                defineField({ name: "title", type: "string", validation: (r) => r.required() }),
                iconKeyField,
              ],
              preview: { select: { title: "title", subtitle: "icon" } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "stats",
      title: "Impact statistics",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Impact statistics" }),
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
                defineField({ name: "value", type: "number", validation: (r) => r.required() }),
                defineField({ name: "suffix", type: "string", description: 'e.g. "+", " MT", " MT/Month"' }),
                defineField({ name: "label", type: "string", validation: (r) => r.required() }),
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
      name: "partnership",
      title: "Partnership with industries",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Partnership with industries" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 6 }),
      ],
    }),

    defineField({
      name: "futureVision",
      title: "Future vision",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Future vision" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 6 }),
      ],
    }),

    ...seoFields.map((f) => ({ ...f, group: "seo" })),
  ],
  preview: {
    select: { title: "hero.heading" },
    prepare: ({ title }) => ({
      title: title || "Projects page",
      subtitle: "Singleton",
    }),
  },
});
