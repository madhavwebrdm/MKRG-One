import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { seoFields } from "./shared/seoFields";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: DocumentIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Sections", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) =>
        r.required().custom((slug) => {
          if (!slug?.current) return "Required";
          if (!/^[a-z0-9-/]+$/.test(slug.current)) {
            return "Slug must be lowercase letters, numbers, hyphens or forward slashes.";
          }
          return true;
        }),
      description:
        "Path under the site root. Use forward slashes for nested pages (e.g. sustainability/community-programs).",
    }),

    { ...heroField, group: "hero" },

    defineField({
      name: "sections",
      title: "Sections",
      type: "pageBuilder",
      group: "content",
    }),

    ...seoFields.map((f) => ({ ...f, group: "seo" })),
  ],
  preview: {
    select: { title: "title", slug: "slug.current" },
    prepare: ({ title, slug }) => ({
      title,
      subtitle: slug ? `/${slug}` : undefined,
    }),
  },
});
