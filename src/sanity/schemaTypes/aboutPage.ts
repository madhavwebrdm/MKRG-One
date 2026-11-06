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
      name: "heroVideos",
      title: "Hero video playlist",
      description:
        "Clips that play one after another behind the hero text, fading into each other. When this list has clips it is used instead of the single Background video above. Use MP4 files, ideally under about 8 MB each.",
      type: "array",
      group: "hero",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "video",
              title: "Video clip",
              type: "file",
              options: { accept: "video/mp4" },
            }),
            defineField({
              name: "duration",
              title: "Seconds on screen",
              description: "How long this clip shows before fading to the next one.",
              type: "number",
              initialValue: 5,
            }),
          ],
          preview: {
            select: { title: "video.asset.originalFilename", duration: "duration" },
            prepare: ({ title, duration }) => ({
              title: title || "Video clip",
              subtitle: duration ? `${duration} seconds` : undefined,
            }),
          },
        }),
      ],
    }),

    defineField({
      name: "purpose",
      title: "Mission & Vision",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Purpose" }),
        defineField({ name: "heading", type: "string" }),
        defineField({
          name: "missionLabel",
          title: "Mission label",
          description: "Small label above the mission text.",
          type: "string",
        }),
        defineField({ name: "mission", type: "text", rows: 4 }),
        defineField({
          name: "visionLabel",
          title: "Vision label",
          description: "Small label above the vision text.",
          type: "string",
        }),
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
        defineField({
          name: "caption",
          type: "string",
          description: "Not currently shown on the website.",
        }),
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
        defineField({
          name: "intro",
          type: "text",
          rows: 3,
          description: "Not currently shown on the website.",
        }),
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
                { ...iconKeyField, description: "Not currently shown on the website." },
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
        defineField({
          name: "intro",
          type: "text",
          rows: 3,
          description: "Not currently shown on the website.",
        }),
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
        defineField({
          name: "closingHeading",
          title: "Closing heading",
          description: "Title shown after the timeline ends.",
          type: "string",
        }),
        defineField({
          name: "closingBody",
          title: "Closing text",
          description: "Paragraph shown after the timeline ends.",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "closingCtaLabel",
          type: "string",
          description: "Not currently shown on the website.",
        }),
        defineField({
          name: "closingCtaHref",
          type: "string",
          description: "Not currently shown on the website.",
        }),
      ],
    }),

    defineField({
      name: "sustainabilityStatement",
      title: "Sustainability statement",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "heading", type: "string", initialValue: "Driving Sustainable Change" }),
        defineField({ name: "body", type: "text", rows: 6 }),
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
