import type { SchemaTypeDefinition } from "sanity";

// Singletons & document types
import { siteSettings } from "./siteSettings";
import { homePage } from "./homePage";
import { aboutPage } from "./aboutPage";
import { sustainabilityPage } from "./sustainabilityPage";
import { processesPage } from "./processesPage";
import { leadershipPage } from "./leadershipPage";
import { certificationsPage } from "./certificationsPage";
import { mediaPage } from "./mediaPage";
import { contactPage } from "./contactPage";
import { page } from "./page";
import { landingPage } from "./landingPage";
import { post } from "./post";

// Page builder array + section blocks
import { pageBuilder } from "./pageBuilder";
import { impactSection } from "./impactSection";
import { contentSection } from "./contentSection";
import { ctaBlock } from "./blocks/ctaBlock";
import { imageTextSplit } from "./blocks/imageTextSplit";
import { pillarsGrid } from "./blocks/pillarsGrid";
import { timelineBlock } from "./blocks/timelineBlock";
import { quoteBlock } from "./blocks/quoteBlock";
import { faqBlock } from "./blocks/faqBlock";
import { gallery } from "./blocks/gallery";

export const SINGLETON_TYPES = [
  "siteSettings",
  "homePage",
  "aboutPage",
  "sustainabilityPage",
  "processesPage",
  "leadershipPage",
  "certificationsPage",
  "mediaPage",
  "contactPage",
] as const;

export const schemaTypes: SchemaTypeDefinition[] = [
  // Documents
  siteSettings,
  homePage,
  aboutPage,
  sustainabilityPage,
  processesPage,
  leadershipPage,
  certificationsPage,
  mediaPage,
  contactPage,
  page,
  landingPage,
  post,
  // Page builder + section objects
  pageBuilder,
  impactSection,
  contentSection,
  ctaBlock,
  imageTextSplit,
  pillarsGrid,
  timelineBlock,
  quoteBlock,
  faqBlock,
  gallery,
];
