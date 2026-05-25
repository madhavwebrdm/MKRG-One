import type { StructureBuilder, StructureResolver } from "sanity/structure";
import {
  CogIcon,
  HomeIcon,
  InfoOutlineIcon,
  EarthGlobeIcon,
  ComposeSparklesIcon,
  UsersIcon,
  CheckmarkCircleIcon,
  PlayIcon,
  EnvelopeIcon,
  DocumentIcon,
  RocketIcon,
  DocumentTextIcon,
} from "@sanity/icons";

import { SINGLETON_TYPES } from "./schemaTypes";

const singleton = (
  S: StructureBuilder,
  typeName: string,
  title: string,
  icon: typeof CogIcon,
) =>
  S.listItem()
    .id(typeName)
    .title(title)
    .icon(icon)
    .child(
      S.document().schemaType(typeName).documentId(typeName).title(title),
    );

const docList = (
  S: StructureBuilder,
  typeName: string,
  title: string,
  icon: typeof CogIcon,
) =>
  S.documentTypeListItem(typeName).title(title).icon(icon);

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      singleton(S, "siteSettings", "Site Settings", CogIcon),

      S.divider(),

      S.listItem()
        .title("Site pages")
        .icon(DocumentIcon)
        .child(
          S.list()
            .title("Site pages")
            .items([
              singleton(S, "homePage", "Home", HomeIcon),
              singleton(S, "aboutPage", "About", InfoOutlineIcon),
              singleton(S, "sustainabilityPage", "Sustainability", EarthGlobeIcon),
              singleton(S, "processesPage", "Processes", ComposeSparklesIcon),
              singleton(S, "leadershipPage", "Leadership", UsersIcon),
              singleton(S, "certificationsPage", "Certifications", CheckmarkCircleIcon),
              singleton(S, "mediaPage", "Media", PlayIcon),
              singleton(S, "contactPage", "Contact", EnvelopeIcon),
            ]),
        ),

      S.divider(),

      docList(S, "page", "Custom pages", DocumentIcon),
      docList(S, "landingPage", "Landing pages", RocketIcon),
      docList(S, "post", "Posts / Case studies", DocumentTextIcon),

      S.divider(),

      // Anything new that gets added later but isn't a singleton.
      ...S.documentTypeListItems().filter((listItem) => {
        const id = listItem.getId() as string;
        if (SINGLETON_TYPES.includes(id as (typeof SINGLETON_TYPES)[number])) return false;
        return !["page", "landingPage", "post"].includes(id);
      }),
    ]);
