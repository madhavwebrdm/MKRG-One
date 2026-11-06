import { defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { seoFields } from "./shared/seoFields";

export const careersPage = defineType({
  name: "careersPage",
  title: "Careers page",
  type: "document",
  icon: CaseIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Application form", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { ...heroField, group: "hero" },

    defineField({
      name: "applySection",
      title: "Application form",
      type: "object",
      group: "content",
      description: "The section below the hero where people send their CV.",
      fieldsets: [
        { name: "labels", title: "Form field labels", options: { collapsible: true, collapsed: true } },
        { name: "after", title: "After the form is sent", options: { collapsible: true, collapsed: true } },
      ],
      fields: [
        defineField({
          name: "eyebrow",
          title: "Small label above the heading",
          type: "string",
          description: 'For example "Apply".',
        }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "applyEmail",
          title: "Careers email address",
          type: "string",
          description:
            "Shown as a clickable email link in the thank-you message, for people who prefer to write directly.",
        }),
        defineField({
          name: "nameLabel",
          title: "Name field label",
          type: "string",
          fieldset: "labels",
        }),
        defineField({
          name: "emailLabel",
          title: "Email field label",
          type: "string",
          fieldset: "labels",
        }),
        defineField({
          name: "phoneLabel",
          title: "Phone field label",
          type: "string",
          fieldset: "labels",
        }),
        defineField({
          name: "roleLabel",
          title: "Role field label",
          type: "string",
          fieldset: "labels",
        }),
        defineField({
          name: "coverNoteLabel",
          title: "Cover note field label",
          type: "string",
          fieldset: "labels",
        }),
        defineField({
          name: "cvLabel",
          title: "CV upload label",
          type: "string",
          fieldset: "labels",
        }),
        defineField({
          name: "cvPlaceholder",
          title: "CV upload prompt",
          type: "string",
          description: "Text inside the upload box before a file is chosen.",
          fieldset: "labels",
        }),
        defineField({
          name: "submitLabel",
          title: "Submit button text",
          type: "string",
          fieldset: "labels",
        }),
        defineField({
          name: "sendingLabel",
          title: "Submit button text while sending",
          type: "string",
          fieldset: "labels",
        }),
        defineField({
          name: "successHeading",
          title: "Thank-you heading",
          type: "string",
          fieldset: "after",
        }),
        defineField({
          name: "successMessage",
          title: "Thank-you message",
          type: "text",
          rows: 3,
          description:
            "The careers email address and a full stop are added automatically after this text.",
          fieldset: "after",
        }),
      ],
    }),

    ...seoFields.map((f) => ({ ...f, group: "seo" })),
  ],
  preview: {
    select: { title: "hero.heading" },
    prepare: ({ title }) => ({
      title: title || "Careers page",
      subtitle: "Singleton",
    }),
  },
});
