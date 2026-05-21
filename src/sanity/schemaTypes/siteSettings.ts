import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "title",
      title: "Site title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Site description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "primaryNav",
      title: "Primary navigation",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "href", type: "string", validation: (r) => r.required() }),
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        },
      ],
    }),

    defineField({
      name: "company",
      title: "Company details",
      type: "object",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: "legalName", type: "string", title: "Legal name" }),
        defineField({ name: "cin", type: "string", title: "CIN" }),
        defineField({ name: "tagline", type: "string", title: "Footer tagline" }),
        defineField({ name: "addressLines", type: "array", title: "Address lines", of: [{ type: "string" }] }),
      ],
    }),

    defineField({
      name: "contact",
      title: "Contact",
      type: "object",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: "salesEmail", type: "string", title: "Sales email" }),
        defineField({ name: "generalEmail", type: "string", title: "General enquiries email" }),
        defineField({ name: "hrEmail", type: "string", title: "Careers / HR email" }),
        defineField({ name: "phone", type: "string", title: "Primary phone" }),
      ],
    }),

    defineField({
      name: "socials",
      title: "Social links",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "linkedin", type: "url", title: "LinkedIn" }),
        defineField({ name: "twitter", type: "url", title: "X / Twitter" }),
        defineField({ name: "youtube", type: "url", title: "YouTube" }),
        defineField({ name: "instagram", type: "url", title: "Instagram" }),
        defineField({ name: "facebook", type: "url", title: "Facebook" }),
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Site Settings" }),
  },
});
