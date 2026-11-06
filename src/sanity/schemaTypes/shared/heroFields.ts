import { defineField } from "sanity";

export const heroField = defineField({
  name: "hero",
  title: "Hero",
  type: "object",
  options: { collapsible: true, collapsed: false },
  fields: [
    defineField({ name: "eyebrow", title: "Small label above the heading", type: "string" }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "intro", title: "Intro text", type: "text", rows: 3 }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      description: "Shown behind the hero text, or while the background video loads.",
      fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
    }),
    defineField({
      name: "video",
      title: "Background video",
      type: "file",
      options: { accept: "video/mp4" },
      description:
        "Optional MP4 that plays behind the hero text (the image above shows while it loads). Keep it short and under about 8 MB.",
    }),
    // Inner-page heroes don't show buttons; hidden so editors aren't misled (data kept).
    defineField({ name: "primaryCtaLabel", type: "string", hidden: true }),
    defineField({ name: "primaryCtaHref", type: "string", hidden: true }),
    defineField({ name: "secondaryCtaLabel", type: "string", hidden: true }),
    defineField({ name: "secondaryCtaHref", type: "string", hidden: true }),
  ],
});
