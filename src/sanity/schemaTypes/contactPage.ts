import { defineArrayMember, defineField, defineType } from "sanity";
import { EnvelopeIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { iconKeyField } from "./shared/iconKey";
import { seoFields } from "./shared/seoFields";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact page",
  type: "document",
  icon: EnvelopeIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { ...heroField, group: "hero" },

    defineField({
      name: "offices",
      title: "Offices",
      type: "array",
      group: "content",
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
            defineField({
              name: "lines",
              type: "array",
              of: [{ type: "string" }],
              validation: (r) => r.min(1).max(8),
            }),
          ],
          preview: { select: { title: "label", subtitle: "icon" } },
        }),
      ],
    }),

    defineField({
      name: "contactLines",
      title: "Contact lines",
      type: "array",
      group: "content",
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
            defineField({
              name: "value",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "href",
              type: "string",
              description: "tel: or mailto: link.",
            }),
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        }),
      ],
    }),

    defineField({
      name: "mapEmbedUrl",
      title: "Google Maps embed URL",
      type: "url",
      group: "content",
      description:
        "The `src` attribute from Google Maps share → Embed a map.",
    }),

    defineField({
      name: "enquiryForm",
      title: "Enquiry form",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "intro", type: "text", rows: 3 }),
        defineField({
          name: "productOptions",
          type: "array",
          of: [{ type: "string" }],
          description:
            "Short product codes shown as selectable chips (e.g. TMT, PIPE, COIL, ZINC, LEAD).",
        }),
        defineField({ name: "submitLabel", type: "string", initialValue: "Send enquiry" }),
        defineField({ name: "successMessage", type: "string" }),
      ],
    }),

    ...seoFields.map((f) => ({ ...f, group: "seo" })),
  ],
  preview: {
    select: { title: "hero.heading" },
    prepare: ({ title }) => ({
      title: title || "Contact page",
      subtitle: "Singleton",
    }),
  },
});
