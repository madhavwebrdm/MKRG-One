import { defineArrayMember, defineField, defineType } from "sanity";
import { CheckmarkCircleIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { iconKeyField } from "./shared/iconKey";
import { seoFields } from "./shared/seoFields";

export const certificationsPage = defineType({
  name: "certificationsPage",
  title: "Certifications page",
  type: "document",
  icon: CheckmarkCircleIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { ...heroField, group: "hero" },

    defineField({
      name: "intro",
      title: "Intro block",
      type: "object",
      group: "content",
      fields: [
        defineField({
          name: "eyebrow",
          type: "string",
          initialValue: "Standards we operate under",
        }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 3 }),
      ],
    }),

    defineField({
      name: "certificates",
      title: "Certifications & licences",
      type: "array",
      group: "content",
      validation: (r) => r.min(1),
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "issuer",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({ name: "body", type: "text", rows: 3 }),
            defineField({
              name: "status",
              type: "string",
              options: {
                list: ["Active", "Compliant", "Approved", "In force", "Expired"],
              },
            }),
            iconKeyField,
            defineField({
              name: "downloadFile",
              type: "file",
              title: "Certificate file",
            }),
          ],
          preview: { select: { title: "title", subtitle: "issuer" } },
        }),
      ],
    }),

    defineField({
      name: "closingCta",
      title: "Closing CTA",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 3 }),
        defineField({ name: "primaryLabel", type: "string" }),
        defineField({ name: "primaryHref", type: "string" }),
      ],
    }),

    ...seoFields.map((f) => ({ ...f, group: "seo" })),
  ],
  preview: {
    select: { title: "hero.heading" },
    prepare: ({ title }) => ({
      title: title || "Certifications page",
      subtitle: "Singleton",
    }),
  },
});
