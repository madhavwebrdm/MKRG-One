import { defineArrayMember, defineField, defineType } from "sanity";
import { PackageIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { iconKeyField } from "./shared/iconKey";
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

    // Overview: the two product-family cards (Green Steel / Commercial Zinc)
    defineField({
      name: "overview",
      title: "Overview (product families)",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Two output streams" }),
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
                iconKeyField,
                imageWithAlt(),
                defineField({
                  name: "productsIncluded",
                  title: "Products included",
                  type: "array",
                  of: [{ type: "string" }],
                }),
                defineField({
                  name: "applications",
                  type: "array",
                  of: [{ type: "string" }],
                }),
                defineField({ name: "ctaLabel", type: "string" }),
                defineField({ name: "ctaHref", type: "string" }),
              ],
              preview: { select: { title: "title", subtitle: "tagline", media: "image" } },
            }),
          ],
        }),
      ],
    }),

    // Green Steel detail
    defineField({
      name: "greenSteel",
      title: "Green Steel section",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "eyebrow", type: "string", initialValue: "Green Steel" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "intro", type: "text", rows: 3 }),
        productRange(),
        defineField({ name: "calloutTitle", type: "string" }),
        defineField({ name: "calloutBody", type: "text", rows: 3 }),
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
