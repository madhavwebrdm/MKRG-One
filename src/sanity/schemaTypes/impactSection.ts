import { defineField, defineType } from "sanity";
import { BarChartIcon } from "@sanity/icons";

export const impactSection = defineType({
  name: "impactSection",
  title: "Impact / Stats section",
  type: "object",
  icon: BarChartIcon,
  fields: [
    defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
    defineField({ name: "intro", type: "text", rows: 3 }),
    defineField({
      name: "stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", type: "number", validation: (r) => r.required() }),
            defineField({ name: "suffix", type: "string", description: 'e.g. "+", "%", " tons"' }),
            defineField({ name: "label", type: "string", validation: (r) => r.required() }),
          ],
          preview: {
            select: { value: "value", suffix: "suffix", label: "label" },
            prepare: ({ value, suffix, label }) => ({
              title: `${value ?? ""}${suffix ?? ""}`,
              subtitle: label,
            }),
          },
        },
      ],
    }),
  ],
  preview: {
    select: { heading: "heading" },
    prepare: ({ heading }) => ({ title: heading || "Impact section" }),
  },
});
