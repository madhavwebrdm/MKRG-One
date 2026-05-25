import { defineArrayMember, defineField, defineType } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export const gallery = defineType({
  name: "gallery",
  title: "Image gallery",
  type: "object",
  icon: ImagesIcon,
  fields: [
    defineField({ name: "heading", type: "string" }),
    defineField({ name: "intro", type: "text", rows: 2 }),
    defineField({
      name: "images",
      type: "array",
      validation: (r) => r.min(1).max(24),
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", type: "string", title: "Alt text" }),
            defineField({ name: "caption", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "columns",
      type: "number",
      options: { list: [2, 3, 4] },
      initialValue: 3,
    }),
  ],
  preview: {
    select: { title: "heading", images: "images", firstImage: "images.0" },
    prepare: ({ title, images, firstImage }) => ({
      title: title || "Image gallery",
      subtitle: `${(images as unknown[] | undefined)?.length ?? 0} images`,
      media: firstImage,
    }),
  },
});
