import { defineArrayMember, defineField, defineType } from "sanity";
import { ComposeSparklesIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { seoFields } from "./shared/seoFields";

/** Image field with alt text (fresh object per call to avoid shared refs). */
const imageWithAlt = (name: string, title: string, description?: string) =>
  defineField({
    name,
    title,
    type: "image",
    description,
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        type: "string",
        title: "Alt text",
        description: "Short description of the image for screen readers and search engines.",
      }),
    ],
  });

const eyebrowField = (example: string) =>
  defineField({
    name: "eyebrow",
    title: "Small label above the heading",
    type: "string",
    description: `For example "${example}".`,
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

    defineField({
      name: "processFlow",
      title: "Step-by-step process",
      description:
        "The scrolling section below the hero. The photo on the left changes as visitors scroll through the steps.",
      type: "object",
      group: "content",
      options: { collapsible: true, collapsed: false },
      fields: [
        eyebrowField("Recycle2X"),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "body",
          title: "Intro text",
          type: "text",
          rows: 3,
          description: "Shown to the right of the heading.",
        }),
        defineField({
          name: "flowNumber",
          title: "Flow number",
          type: "string",
          description: 'Large number shown before the flow title, for example "01".',
        }),
        defineField({ name: "flowTitle", title: "Flow title", type: "string" }),
        defineField({
          name: "flowCaption",
          title: "Flow caption",
          type: "text",
          rows: 2,
          description: "Short line shown to the right of the flow title.",
        }),
        defineField({
          name: "steps",
          title: "Steps",
          type: "array",
          description: "Shown in this order. Each step has its own photo.",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "label", title: "Step title", type: "string" }),
                defineField({ name: "body", title: "Step text", type: "text", rows: 3 }),
                imageWithAlt("image", "Step photo"),
              ],
              preview: { select: { title: "label", subtitle: "body", media: "image" } },
            }),
          ],
        }),
        defineField({
          name: "calloutText",
          title: "Green banner statement",
          type: "text",
          rows: 3,
          description: "Large statement shown in the dark green band after the steps.",
        }),
      ],
    }),

    defineField({
      name: "technology",
      title: "The technology behind our zinc recovery",
      description: "Centred text section below the green banner.",
      type: "object",
      group: "content",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "body",
          title: "Text",
          type: "text",
          rows: 10,
          description: "One paragraph per line. Each line is shown as its own paragraph.",
        }),
      ],
    }),

    defineField({
      name: "wasteToZinc",
      title: "Waste to Zinc summary",
      description:
        "Section at the bottom of the page with the patent seal, the process illustration and the numbered step cards.",
      type: "object",
      group: "content",
      options: { collapsible: true, collapsed: false },
      fields: [
        eyebrowField("Process"),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "caption",
          title: "Caption",
          type: "text",
          rows: 2,
          description: "Short line shown between the heading and the patent seal.",
        }),
        imageWithAlt("seal", "Patent seal", "Round badge shown to the right of the heading."),
        imageWithAlt("illustration", "Process illustration", "Wide illustration above the step cards."),
        defineField({
          name: "steps",
          title: "Step cards",
          type: "array",
          description: "Numbered automatically in this order.",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "title", title: "Step title", type: "string" }),
                defineField({ name: "body", title: "Step text", type: "string" }),
              ],
              preview: { select: { title: "title", subtitle: "body" } },
            }),
          ],
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
