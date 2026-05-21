/**
 * Placeholder image URLs for development.
 * All are randomized but stable (picsum.photos seeds always return the same image).
 * Swap with real Sanity-uploaded photos when brand assets land.
 */

const pic = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const PLACEHOLDER_IMAGES = {
  hero: pic("mkrg-hero-foundry", 1600, 1200),
  metricsBg: pic("mkrg-metrics-industry", 1800, 1000),
  missionVision: pic("mkrg-mission-plant", 900, 1100),
  sustainability1: pic("mkrg-sus-trees", 800, 900),
  sustainability2: pic("mkrg-sus-energy", 800, 900),
  sustainability3: pic("mkrg-sus-community", 800, 900),
  processes: [
    pic("mkrg-proc-collect", 800, 600),
    pic("mkrg-proc-sort", 800, 600),
    pic("mkrg-proc-melt", 800, 600),
    pic("mkrg-proc-cast", 800, 600),
    pic("mkrg-proc-apcd", 800, 600),
    pic("mkrg-proc-return", 800, 600),
  ],
  leadershipPortrait: pic("mkrg-founder-portrait", 900, 1100),
  leadershipBg: pic("mkrg-leadership-bg", 1800, 1000),
  certificationsAccent: pic("mkrg-certs-plant", 1400, 900),
  mediaItems: [
    pic("mkrg-media-press-1", 800, 500),
    pic("mkrg-media-video-1", 800, 500),
    pic("mkrg-media-event-1", 800, 500),
  ],
};
