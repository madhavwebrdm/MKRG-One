import { defineArrayMember, defineField, defineType } from "sanity";
import { EnvelopeIcon } from "@sanity/icons";
import { heroField } from "./shared/heroFields";
import { ICON_KEYS, iconKeyField } from "./shared/iconKey";
import { seoFields } from "./shared/seoFields";

// Contact rows can also use a lifebuoy icon (used for the helpline).
const contactLineIconField = defineField({
  ...iconKeyField,
  description: "Small icon shown beside the row.",
  options: {
    list: [...ICON_KEYS, "life-buoy"].map((key) => ({ title: key, value: key })),
  },
});

const SOCIAL_PLATFORMS = [
  { title: "LinkedIn", value: "linkedin" },
  { title: "Twitter", value: "twitter" },
  { title: "YouTube", value: "youtube" },
  { title: "Instagram", value: "instagram" },
  { title: "Facebook", value: "facebook" },
];

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact page",
  type: "document",
  icon: EnvelopeIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Enquiry form", default: true },
    { name: "reach", title: "Offices & contact details" },
    { name: "map", title: "Map & visits" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { ...heroField, group: "hero" },

    defineField({
      name: "enquiryForm",
      title: "Enquiry form",
      type: "object",
      group: "content",
      description: "The left-hand column with the message form.",
      fieldsets: [
        { name: "labels", title: "Form field labels", options: { collapsible: true, collapsed: true } },
        { name: "after", title: "After the form is sent", options: { collapsible: true, collapsed: true } },
      ],
      fields: [
        defineField({
          name: "eyebrow",
          title: "Small label above the heading",
          type: "string",
          description: 'For example "Enquiry".',
        }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "intro", title: "Intro text", type: "text", rows: 3 }),
        defineField({
          name: "productOptions",
          title: "Product choices",
          type: "array",
          of: [{ type: "string" }],
          description:
            "Product names shown as selectable chips (e.g. Zinc Ingots, Zinc Sheets, Zinc Feedstock).",
        }),
        defineField({
          name: "nameLabel",
          title: "Name field label",
          type: "string",
          fieldset: "labels",
        }),
        defineField({
          name: "companyLabel",
          title: "Company field label",
          type: "string",
          fieldset: "labels",
        }),
        defineField({
          name: "phoneLabel",
          title: "Phone field label",
          type: "string",
          fieldset: "labels",
        }),
        defineField({
          name: "emailLabel",
          title: "Email field label",
          type: "string",
          fieldset: "labels",
        }),
        defineField({
          name: "messageLabel",
          title: "Message field label",
          type: "string",
          fieldset: "labels",
        }),
        defineField({
          name: "productLabel",
          title: "Product choices label",
          type: "string",
          fieldset: "labels",
        }),
        defineField({
          name: "submitLabel",
          title: "Send button text",
          type: "string",
          initialValue: "Send enquiry",
          fieldset: "labels",
        }),
        defineField({
          name: "sendingLabel",
          title: "Send button text while sending",
          type: "string",
          fieldset: "labels",
        }),
        defineField({
          name: "successHeading",
          title: "Thank-you heading",
          type: "string",
          fieldset: "after",
        }),
        defineField({
          name: "successMessage",
          title: "Thank-you message",
          type: "text",
          rows: 3,
          fieldset: "after",
        }),
        defineField({
          name: "sendAnotherLabel",
          title: '"Send another" link text',
          type: "string",
          fieldset: "after",
        }),
      ],
    }),

    defineField({
      name: "reachSection",
      title: "Offices & contact details heading",
      type: "object",
      group: "reach",
      description: "The right-hand column next to the form.",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Small label above the heading",
          type: "string",
          description: 'For example "Reach us".',
        }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
      ],
    }),

    defineField({
      name: "offices",
      title: "Offices",
      type: "array",
      group: "reach",
      description: "Address cards. Each line of the address is a separate entry.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (r) => r.required(),
            }),
            { ...iconKeyField, description: "Small icon shown beside the address." },
            defineField({
              name: "lines",
              title: "Address lines",
              type: "array",
              of: [{ type: "string" }],
              validation: (r) => r.min(1).max(8),
            }),
          ],
          preview: { select: { title: "label", subtitle: "icon" } },
        }),
      ],
    }),

    defineField({
      name: "contactLines",
      title: "Phone numbers & emails",
      type: "array",
      group: "reach",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (r) => r.required(),
            }),
            contactLineIconField,
            defineField({
              name: "value",
              title: "Number or email shown",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "href",
              title: "Link",
              type: "string",
              description:
                'Where a click goes. Use "tel:" plus the number without spaces (e.g. tel:+911765500075) or "mailto:" plus the email.',
            }),
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        }),
      ],
    }),

    defineField({
      name: "follow",
      title: "Social links",
      type: "object",
      group: "reach",
      description: "Round social media buttons under the contact details.",
      fields: [
        defineField({
          name: "label",
          title: "Label above the buttons",
          type: "string",
          description: 'For example "Follow MKESL".',
        }),
        defineField({
          name: "links",
          title: "Social accounts",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "platform",
                  title: "Platform",
                  type: "string",
                  description: "Picks the icon.",
                  options: { list: SOCIAL_PLATFORMS },
                }),
                defineField({
                  name: "url",
                  title: "Profile link",
                  type: "url",
                }),
              ],
              preview: { select: { title: "platform", subtitle: "url" } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "mapSection",
      title: "Map section",
      type: "object",
      group: "map",
      description: "The section with the Google map at the bottom of the page.",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Small label above the heading",
          type: "string",
          description: 'For example "Find us".',
        }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "intro", title: "Intro text", type: "text", rows: 3 }),
        defineField({
          name: "mapTitle",
          title: "Map description (for screen readers)",
          type: "string",
        }),
        defineField({
          name: "locationLabel",
          title: "Location card label",
          type: "string",
          description: 'For example "Coordinates".',
        }),
        defineField({
          name: "locationText",
          title: "Location card text",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "image",
          title: "Photo beside the map",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
        }),
      ],
    }),

    defineField({
      name: "mapEmbedUrl",
      title: "Google Maps embed URL",
      type: "url",
      group: "map",
      description:
        'The link inside src="..." from Google Maps: Share, then Embed a map.',
    }),

    ...seoFields.map((f) => ({ ...f, group: "seo" })),
  ],
  preview: {
    select: { title: "hero.heading" },
    prepare: ({ title }) => ({
      title: title || "Contact page",
      subtitle: "Singleton",
    }),
  },
});
