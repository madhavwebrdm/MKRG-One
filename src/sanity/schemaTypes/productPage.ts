import { defineArrayMember, defineField, defineType } from "sanity";
import { PackageIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { seoFields } from "./shared/seoFields";

/** Reusable image field with alt text (fresh object per call to avoid shared refs). */
const imageWithAlt = (name = "image", title = "Image") =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
  });

/** Product range card array (fresh field per call so the two sections don't share a ref). */
const productRange = () =>
  defineField({
    name: "products",
    title: "Product range",
    description:
      "The first product is shown beside the spec table. Any further products appear as cards above it.",
    type: "array",
    validation: (r) => r.min(1).max(8),
    of: [
      defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "name", type: "string", validation: (r) => r.required() }),
          defineField({ name: "description", type: "text", rows: 2 }),
          imageWithAlt(),
        ],
        preview: { select: { title: "name", subtitle: "description", media: "image" } },
      }),
    ],
  });

export const productPage = defineType({
  name: "productPage",
  title: "Product page",
  type: "document",
  icon: PackageIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { ...heroField, group: "hero" },

    // Overview: the Commercial Zinc product-family card
    defineField({
      name: "overview",
      title: "Overview (product family)",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Commercial Zinc" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "intro", type: "text", rows: 3 }),
        defineField({
          name: "families",
          title: "Family cards",
          type: "array",
          validation: (r) => r.min(1).max(4),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  type: "string",
                  validation: (r) => r.required(),
                }),
                defineField({ name: "tagline", type: "text", rows: 2 }),
                imageWithAlt(),
              ],
              preview: { select: { title: "title", subtitle: "tagline", media: "image" } },
            }),
          ],
        }),
        defineField({
          name: "applications",
          title: "Zinc applications (numbered grid)",
          description: "Rendered as a numbered card grid below the Commercial Zinc box, no heading or intro shown.",
          type: "object",
          fields: [
            defineField({
              name: "items",
              title: "Application items",
              type: "array",
              validation: (r) => r.min(1).max(10),
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
                    defineField({ name: "body", type: "text", rows: 3 }),
                  ],
                  preview: { select: { title: "title", subtitle: "body" } },
                }),
              ],
            }),
            defineField({ name: "ctaLabel", type: "string", initialValue: "Explore the process" }),
            defineField({ name: "ctaHref", type: "string", initialValue: "/processes" }),
          ],
        }),
      ],
    }),

    // Full-screen image banner between the applications and the zinc detail
    defineField({
      name: "parallax",
      title: "Full-screen image banner",
      description:
        "Large image with a heading, shown between the zinc applications and the Commercial Zinc section.",
      type: "object",
      group: "content",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "text",
          rows: 3,
          description: "Press Enter to start a new line on the page.",
        }),
        defineField({
          name: "image",
          title: "Background image",
          type: "image",
          options: { hotspot: true },
          description:
            "Fills the screen behind the heading and stays still while the page scrolls. Use a wide, high-resolution photo.",
        }),
      ],
    }),

    // Commercial Zinc detail
    defineField({
      name: "zinc",
      title: "Commercial Zinc section",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Commercial Zinc" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "intro", type: "text", rows: 3 }),
        productRange(),
        defineField({ name: "calloutTitle", type: "string" }),
        defineField({ name: "calloutBody", type: "text", rows: 3 }),
        defineField({
          name: "noteHeading",
          title: "Paragraph heading (optional)",
          description: "Heading above the callout box. Leave empty to hide.",
          type: "string",
        }),
        defineField({
          name: "noteBody",
          title: "Paragraph text (optional)",
          description: "Paragraph above the callout box. Leave empty to hide.",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "noteSpecs",
          title: "Spec table",
          description: "Label/value rows shown as a table beside the first product card.",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "label", type: "string", validation: (r) => r.required() }),
                defineField({ name: "value", type: "string", validation: (r) => r.required() }),
              ],
              preview: { select: { title: "label", subtitle: "value" } },
            }),
          ],
        }),
      ],
    }),

    // Test Certificate (hidden until a file is uploaded)
    defineField({
      name: "testCertificate",
      title: "Test Certificate",
      description:
        "Upload the Test Certificate (PDF or image) to show this section on the Product page. It stays hidden while no file is uploaded.",
      type: "object",
      group: "content",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: "eyebrow", title: "Small label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "body", title: "Text", type: "text", rows: 3 }),
        defineField({
          name: "file",
          title: "Certificate file",
          type: "file",
          options: { accept: "application/pdf,image/*" },
          description: "The certificate visitors open or download.",
        }),
        defineField({
          name: "preview",
          title: "Preview image (optional)",
          type: "image",
          options: { hotspot: true },
          description: "A picture of the certificate shown beside the text. Recommended for PDFs.",
          fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
        }),
        defineField({ name: "buttonLabel", title: "Button text", type: "string" }),
      ],
    }),

    // Closing CTA band
    defineField({
      name: "closingCta",
      title: "Closing call to action",
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
      title: title || "Product page",
      subtitle: "Singleton",
    }),
  },
});
