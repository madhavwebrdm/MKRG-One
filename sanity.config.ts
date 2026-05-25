import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";

import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schemaTypes, SINGLETON_TYPES } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";

const SINGLETON_ACTIONS = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  name: "default",
  title: "MKRG Studio",
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  document: {
    // Singletons: only allow publish/discardChanges/restore. No duplicate/delete/create.
    actions: (input, { schemaType }) =>
      SINGLETON_TYPES.includes(schemaType as (typeof SINGLETON_TYPES)[number])
        ? input.filter((action) => action.action && SINGLETON_ACTIONS.has(action.action))
        : input,
    // Hide singletons from the global "new document" menu.
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === "global"
        ? prev.filter(
            (template) =>
              !SINGLETON_TYPES.includes(
                template.templateId as (typeof SINGLETON_TYPES)[number],
              ),
          )
        : prev,
  },
  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
