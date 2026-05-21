import type { SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { homePage } from "./homePage";
import { page } from "./page";
import { post } from "./post";
import { impactSection } from "./impactSection";
import { contentSection } from "./contentSection";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  homePage,
  page,
  post,
  impactSection,
  contentSection,
];
