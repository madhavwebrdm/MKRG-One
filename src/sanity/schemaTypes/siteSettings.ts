import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

/** A logo/photo with hotspot cropping and alt text for screen readers. */
const imageWithAlt = (name: string, title: string, description?: string, group?: string) =>
  defineField({
    name,
    title,
    type: "image",
    description,
    group,
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        type: "string",
        title: "Alt text",
        description: "Short description for screen readers and search engines.",
      }),
    ],
  });

/** A simple text + link pair, e.g. a menu item. */
const linkFields = [
  defineField({ name: "label", type: "string", title: "Link text" }),
  defineField({
    name: "href",
    type: "string",
    title: "Link",
    description: "A page on this site (e.g. /about or /about#values) or a full web address.",
  }),
];

const linkItem = {
  type: "object" as const,
  fields: linkFields,
  preview: { select: { title: "label", subtitle: "href" } },
};

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  groups: [
    { name: "general", title: "General", default: true },
    { name: "header", title: "Header" },
    { name: "footer", title: "Footer" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Site title",
      type: "string",
      group: "general",
      description: "The company name, used for the screen-reader label on the header logo link.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Site description",
      type: "text",
      rows: 3,
      group: "general",
      description:
        "Internal summary of the site. Search engines use each page's own SEO description instead.",
    }),
    defineField({
      name: "logo",
      title: "Logo (not shown on the site)",
      type: "image",
      group: "general",
      description:
        "Kept for reference only. The website uses the logos in the Header and Footer tabs.",
      options: { hotspot: true },
    }),

    /* HEADER */
    defineField({
      name: "headerLogo",
      title: "Header logo",
      type: "object",
      group: "header",
      description:
        "The header shows a white logo over the dark top of each page and switches to a dark green logo once the visitor scrolls and the header turns light green. SVG or transparent PNG works best.",
      options: { collapsible: true, collapsed: false },
      fields: [
        imageWithAlt("onDark", "Full logo, over dark background (top of page)"),
        imageWithAlt("onLight", "Full logo, over light background (after scrolling)"),
        imageWithAlt(
          "compactOnDark",
          "Compact logo, over dark background",
          "Used on mid-size screens (about 1024 to 1279 pixels wide) where the full logo would bump into the menu.",
        ),
        imageWithAlt(
          "compactOnLight",
          "Compact logo, over light background",
          "Used on mid-size screens after scrolling.",
        ),
      ],
    }),
    defineField({
      name: "primaryNav",
      title: "Main menu",
      type: "array",
      group: "header",
      description:
        "Menu items across the top of every page. Add dropdown links to an item to give it a dropdown.",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              type: "string",
              title: "Link text",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "href",
              type: "string",
              title: "Link",
              description: "A page on this site (e.g. /about) or a full web address.",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "children",
              title: "Dropdown links",
              type: "array",
              description: "Optional. Shown when a visitor hovers this menu item.",
              of: [linkItem],
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        },
      ],
    }),
    defineField({
      name: "headerCta",
      title: "Header button",
      type: "object",
      group: "header",
      description: "The rounded button at the right of the menu (also shown in the mobile menu).",
      options: { collapsible: true, collapsed: false },
      fields: linkFields,
    }),

    /* FOOTER */
    imageWithAlt(
      "footerLogo",
      "Footer logo",
      "Shown at the top left of the footer, over the dark green background.",
      "footer",
    ),
    defineField({
      name: "footerBackground",
      title: "Footer background photo",
      type: "image",
      group: "footer",
      description: "Decorative photo behind the footer. It is tinted dark green automatically.",
      options: { hotspot: true },
    }),

    defineField({
      name: "company",
      title: "Company details",
      type: "object",
      group: "footer",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: "legalName",
          type: "string",
          title: "Legal name",
          description: "Shown in the copyright line at the bottom of the footer.",
        }),
        defineField({
          name: "cin",
          type: "string",
          title: "CIN",
          description: "Optional. When filled in, it is shown after the copyright line.",
        }),
        defineField({
          name: "tagline",
          type: "string",
          title: "Footer tagline",
          description: "Short line under the footer logo.",
        }),
        defineField({
          name: "addressLines",
          type: "array",
          title: "Address lines",
          description: "Optional. When filled in, the address is shown under the footer tagline.",
          of: [{ type: "string" }],
        }),
      ],
    }),

    defineField({
      name: "contact",
      title: "Contact",
      type: "object",
      group: "footer",
      description: "Optional. Phone and emails filled in here are listed in the footer.",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: "salesEmail", type: "string", title: "Sales email" }),
        defineField({ name: "generalEmail", type: "string", title: "General enquiries email" }),
        defineField({ name: "hrEmail", type: "string", title: "Careers / HR email" }),
        defineField({ name: "phone", type: "string", title: "Primary phone" }),
      ],
    }),

    defineField({
      name: "footerColumns",
      title: "Footer link columns",
      type: "array",
      group: "footer",
      description: "The columns of links in the middle of the footer.",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", title: "Column heading" }),
            defineField({ name: "links", type: "array", title: "Links", of: [linkItem] }),
          ],
          preview: {
            select: { title: "title", links: "links" },
            prepare: ({ title, links }) => ({
              title: title || "Column",
              subtitle: Array.isArray(links) ? `${links.length} link(s)` : undefined,
            }),
          },
        },
      ],
    }),

    defineField({
      name: "footerConnectHeading",
      title: "Social links heading",
      type: "string",
      group: "footer",
      description: "Small heading above the social media icons.",
    }),
    defineField({
      name: "socials",
      title: "Social links",
      type: "object",
      group: "footer",
      description: "Only the networks with an address filled in get an icon in the footer.",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "linkedin", type: "url", title: "LinkedIn" }),
        defineField({ name: "twitter", type: "url", title: "X / Twitter" }),
        defineField({ name: "youtube", type: "url", title: "YouTube" }),
        defineField({ name: "instagram", type: "url", title: "Instagram" }),
        defineField({ name: "facebook", type: "url", title: "Facebook" }),
      ],
    }),

    defineField({
      name: "footerCta",
      title: "Footer call-to-action box",
      type: "object",
      group: "footer",
      description: "The frosted box at the right of the footer.",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: "heading", type: "string", title: "Heading" }),
        defineField({
          name: "highlight",
          type: "string",
          title: "Highlighted words",
          description: "Shown in light green straight after the heading.",
        }),
        defineField({ name: "body", type: "text", rows: 2, title: "Text" }),
        defineField({ name: "buttonLabel", type: "string", title: "Button text" }),
        defineField({ name: "buttonHref", type: "string", title: "Button link" }),
      ],
    }),

    defineField({
      name: "footerBottom",
      title: "Footer bottom bar",
      type: "object",
      group: "footer",
      description: "The thin strip at the very bottom of every page.",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: "rightsText",
          type: "string",
          title: "Copyright text",
          description: "Shown after the year and legal name.",
        }),
        defineField({ name: "slogan", type: "string", title: "Slogan" }),
        defineField({
          name: "legalLinks",
          type: "array",
          title: "Legal links",
          description: "e.g. Privacy Policy, Terms of Use.",
          of: [linkItem],
        }),
        defineField({ name: "creditPrefix", type: "string", title: "Credit text" }),
        defineField({ name: "creditLabel", type: "string", title: "Credit link text" }),
        defineField({ name: "creditHref", type: "url", title: "Credit link" }),
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Site Settings" }),
  },
});
