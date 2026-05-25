import { defineField } from "sanity";

export const seoFields = [
  defineField({
    name: "seo",
    title: "SEO",
    type: "object",
    options: { collapsible: true, collapsed: true },
    fields: [
      defineField({
        name: "title",
        type: "string",
        title: "Meta title",
        description: "60 characters or less.",
        validation: (r) => r.max(70).warning("Keep under 60 for best SERP display."),
      }),
      defineField({
        name: "description",
        type: "text",
        rows: 3,
        title: "Meta description",
        validation: (r) =>
          r.max(180).warning("Keep under 160 characters for best SERP display."),
      }),
      defineField({
        name: "image",
        type: "image",
        title: "Open Graph / share image",
        options: { hotspot: true },
        fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
      }),
      defineField({
        name: "noIndex",
        type: "boolean",
        title: "Hide from search engines",
        initialValue: false,
      }),
    ],
  }),
];
