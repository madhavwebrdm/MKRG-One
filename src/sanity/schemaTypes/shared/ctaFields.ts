import { defineField } from "sanity";

export const ctaPair = defineField({
  name: "cta",
  title: "Call to action",
  type: "object",
  fields: [
    defineField({ name: "primaryLabel", type: "string" }),
    defineField({ name: "primaryHref", type: "string" }),
    defineField({ name: "secondaryLabel", type: "string" }),
    defineField({ name: "secondaryHref", type: "string" }),
  ],
});
