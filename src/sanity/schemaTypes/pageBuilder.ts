import { defineArrayMember, defineType } from "sanity";

// The shared library of section blocks that can be composed onto a `page`
// or `landingPage` document. Keep this list intentional — every block adds
// editor choice paralysis.
export const pageBuilder = defineType({
  name: "pageBuilder",
  title: "Sections",
  type: "array",
  of: [
    defineArrayMember({ type: "impactSection" }),
    defineArrayMember({ type: "contentSection" }),
    defineArrayMember({ type: "ctaBlock" }),
    defineArrayMember({ type: "imageTextSplit" }),
    defineArrayMember({ type: "pillarsGrid" }),
    defineArrayMember({ type: "timelineBlock" }),
    defineArrayMember({ type: "quoteBlock" }),
    defineArrayMember({ type: "faqBlock" }),
    defineArrayMember({ type: "gallery" }),
  ],
  options: { insertMenu: { showIcons: true } },
});
