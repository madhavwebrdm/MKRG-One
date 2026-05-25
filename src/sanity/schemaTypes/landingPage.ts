import { defineField, defineType } from "sanity";
import { RocketIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { seoFields } from "./shared/seoFields";

export const landingPage = defineType({
  name: "landingPage",
  title: "Landing page",
  type: "document",
  icon: RocketIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Sections", default: true },
    { name: "conversion", title: "Conversion" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
      description: "Internal name — used in the Studio list.",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
      description: "Will be reachable at /lp/{slug}.",
    }),
    defineField({
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Live", value: "live" },
          { title: "Archived", value: "archived" },
        ],
        layout: "radio",
      },
      initialValue: "draft",
    }),

    { ...heroField, group: "hero" },

    defineField({
      name: "sections",
      title: "Sections",
      type: "pageBuilder",
      group: "content",
    }),

    defineField({
      name: "conversion",
      title: "Conversion settings",
      type: "object",
      group: "conversion",
      fields: [
        defineField({
          name: "showEnquiryForm",
          type: "boolean",
          title: "Append the standard enquiry form to this page",
          initialValue: false,
        }),
        defineField({
          name: "formHeading",
          type: "string",
          hidden: ({ parent }) => !parent?.showEnquiryForm,
        }),
        defineField({
          name: "formIntro",
          type: "text",
          rows: 3,
          hidden: ({ parent }) => !parent?.showEnquiryForm,
        }),
        defineField({
          name: "trackingId",
          type: "string",
          title: "Analytics tracking ID",
          description: "Optional campaign tag used by analytics scripts.",
        }),
      ],
    }),

    ...seoFields.map((f) => ({ ...f, group: "seo" })),
  ],
  preview: {
    select: { title: "title", slug: "slug.current", status: "status" },
    prepare: ({ title, slug, status }) => ({
      title,
      subtitle: `${status?.toUpperCase() ?? "DRAFT"} · ${slug ? `/lp/${slug}` : "no slug"}`,
    }),
  },
});
