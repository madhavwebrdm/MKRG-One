import { defineArrayMember, defineField, defineType } from "sanity";
import { ComposeSparklesIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { iconKeyField } from "./shared/iconKey";
import { seoFields } from "./shared/seoFields";

const processFlow = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    group: "content",
    fields: [
      defineField({ name: "eyebrow", type: "string" }),
      defineField({
        name: "heading",
        type: "string",
        validation: (r) => r.required(),
      }),
      defineField({ name: "body", type: "text", rows: 3 }),
      defineField({
        name: "steps",
        type: "array",
        validation: (r) => r.min(2).max(12),
        of: [
          defineArrayMember({
            type: "object",
            fields: [
              defineField({
                name: "label",
                type: "string",
                validation: (r) => r.required(),
              }),
              iconKeyField,
            ],
            preview: { select: { title: "label", subtitle: "icon" } },
          }),
        ],
      }),
      defineField({
        name: "accent",
        type: "string",
        options: {
          list: [
            { title: "Deep green", value: "deep" },
            { title: "Brand green", value: "brand" },
          ],
          layout: "radio",
        },
        initialValue: "deep",
      }),
    ],
  });

export const processesPage = defineType({
  name: "processesPage",
  title: "Processes page",
  type: "document",
  icon: ComposeSparklesIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { ...heroField, group: "hero" },

    processFlow("scrapToSteel", "Scrap → Steel flow"),
    processFlow("wasteToZinc", "Waste → Zinc flow"),

    defineField({
      name: "zincInputs",
      title: "Zinc input materials",
      type: "array",
      group: "content",
      of: [{ type: "string" }],
      description: "Short labels shown alongside the Waste → Zinc flow.",
    }),

    defineField({
      name: "apcdSection",
      title: "APCD accent section",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "APCD" }),
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
      title: title || "Processes page",
      subtitle: "Singleton",
    }),
  },
});
