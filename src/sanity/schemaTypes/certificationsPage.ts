import { defineArrayMember, defineField, defineType } from "sanity";
import { CheckmarkCircleIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { ICON_KEYS, iconKeyField } from "./shared/iconKey";
import { seoFields } from "./shared/seoFields";

// The shared icon list plus "lightbulb", used by the Zinc Extraction Patent card.
const certificateIconField = defineField({
  ...iconKeyField,
  description: "Icon shown at the top of the card in the certifications grid.",
  options: {
    list: [...ICON_KEYS, "lightbulb"].map((key) => ({ title: key, value: key })),
  },
});

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
      description: "Heading and text above the certifications grid.",
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
        defineField({
          name: "cardLinkLabel",
          title: "Card link text",
          description:
            "Text of the link at the bottom of each certificate card (shown when the certificate has a file).",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "certificates",
      title: "Certifications, patents & awards",
      description:
        "Each entry appears either in the certifications grid or in the awards gallery, depending on its Section setting.",
      type: "array",
      group: "content",
      validation: (r) => r.min(1),
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "category",
              title: "Section",
              description: "Where this entry appears on the page.",
              type: "string",
              initialValue: "certification",
              options: {
                list: [
                  { title: "Certifications grid (card with icon and text)", value: "certification" },
                  { title: "Awards gallery (document image)", value: "award" },
                ],
                layout: "radio",
              },
            }),
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
              description: "Small badge on the certificate card.",
              options: {
                list: [
                  "Active",
                  "Compliant",
                  "Approved",
                  "In force",
                  "Granted",
                  "Awarded",
                  "On file",
                  "Expired",
                ],
              },
            }),
            certificateIconField,
            defineField({
              name: "downloadFile",
              type: "file",
              title: "Certificate file",
              description: "PDF or image that opens when a visitor clicks the card.",
            }),
            defineField({
              name: "thumbnail",
              title: "Document image",
              description:
                "Picture of the document shown in the awards gallery. Leave empty to show a stock photo.",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "alt",
                  type: "string",
                  title: "Alt text",
                  description: 'Leave empty to use the title followed by "certificate".',
                }),
              ],
            }),
          ],
          preview: {
            select: { title: "title", category: "category", media: "thumbnail" },
            prepare: ({ title, category, media }) => ({
              title,
              subtitle: category === "award" ? "Awards gallery" : "Certifications grid",
              media,
            }),
          },
        }),
      ],
    }),

    defineField({
      name: "awardsSection",
      title: "Awards gallery",
      description: "Heading and text above the awards gallery.",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 3 }),
      ],
    }),

    defineField({
      name: "closingCta",
      title: "Closing CTA",
      description: "Not currently shown on the website.",
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
