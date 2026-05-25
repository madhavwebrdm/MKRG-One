import { defineField, defineType } from "sanity";
import { SplitVerticalIcon } from "@sanity/icons";

export const imageTextSplit = defineType({
  name: "imageTextSplit",
  title: "Image + text split",
  type: "object",
  icon: SplitVerticalIcon,
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({
      name: "heading",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block", styles: [{ title: "Normal", value: "normal" }] }],
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
    }),
    defineField({ name: "caption", type: "string", description: "Optional caption inside the image card." }),
    defineField({
      name: "imageSide",
      type: "string",
      options: {
        list: [
          { title: "Image left", value: "left" },
          { title: "Image right", value: "right" },
        ],
        layout: "radio",
      },
      initialValue: "left",
    }),
  ],
  preview: {
    select: { title: "heading", media: "image" },
    prepare: ({ title, media }) => ({
      title: title || "Image + text",
      subtitle: "Image + text split",
      media,
    }),
  },
});
