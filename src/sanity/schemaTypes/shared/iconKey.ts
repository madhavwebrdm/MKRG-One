import { defineField } from "sanity";

// Curated list of lucide-react icon names available in /src/components.
// The frontend keeps a map of key -> component; unknown keys fall back to a default.
export const ICON_KEYS = [
  "shield-check",
  "award",
  "flag",
  "sparkles",
  "heart-handshake",
  "users",
  "factory",
  "wind",
  "leaf",
  "gauge",
  "compass",
  "target",
  "sprout",
  "zap",
  "tree-pine",
  "recycle",
  "hand-heart",
  "sun",
  "boxes",
  "truck",
  "flame",
  "beaker",
  "layers",
  "snowflake",
  "package",
  "droplets",
  "flask-conical",
  "filter",
  "globe-2",
  "hard-hat",
  "landmark",
  "file-badge",
  "newspaper",
  "video",
  "calendar-days",
  "calendar",
  "building-2",
  "phone",
  "mail",
  "map-pin",
  "file-text",
  "play",
  "mic",
  "quote",
  "arrow-right",
  "circle-dot",
  "chevron-right",
] as const;

export type IconKey = (typeof ICON_KEYS)[number];

export const iconKeyField = defineField({
  name: "icon",
  title: "Icon",
  type: "string",
  options: {
    list: ICON_KEYS.map((key) => ({ title: key, value: key })),
  },
});
