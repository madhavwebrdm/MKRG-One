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

  // About page
  aboutHero: pic("mkrg-about-hero", 1400, 1000),
  aboutBrand: pic("mkrg-about-brand", 1200, 1000),
  aboutTimeline: pic("mkrg-about-timeline", 1600, 700),
  aboutDifferentiators: [
    pic("mkrg-diff-recycle2x", 800, 600),
    pic("mkrg-diff-apcd", 800, 600),
    pic("mkrg-diff-purity", 800, 600),
    pic("mkrg-diff-standards", 800, 600),
  ],

  // Sustainability page
  sustHero: pic("mkrg-sust-hero", 1600, 1000),
  sustStatsAccent: pic("mkrg-sust-stats", 1200, 900),
  sustPillars: [
    pic("mkrg-pillar-env", 800, 700),
    pic("mkrg-pillar-resource", 800, 700),
    pic("mkrg-pillar-energy", 800, 700),
    pic("mkrg-pillar-carbon", 800, 700),
    pic("mkrg-pillar-planet", 800, 700),
  ],
  sustCsr: pic("mkrg-sust-csr", 1200, 800),
  sustEhs: pic("mkrg-sust-ehs", 1200, 800),
  sustSubpages: [
    pic("mkrg-sub-envimpact", 800, 600),
    pic("mkrg-sub-recstats", 800, 600),
    pic("mkrg-sub-community", 800, 600),
  ],

  // Processes page
  processesHero: pic("mkrg-process-hero", 1600, 1000),
  scrapToSteelBg: pic("mkrg-s2s-bg", 1600, 700),
  wasteToZincBg: pic("mkrg-w2z-bg", 1600, 700),
  apcdAccent: pic("mkrg-apcd-accent", 1200, 800),
  processesSubpages: [
    pic("mkrg-psub-processes", 800, 600),
    pic("mkrg-psub-materials", 800, 600),
    pic("mkrg-psub-advantages", 800, 600),
  ],

  // Leadership page
  leadershipFounderFull: pic("mkrg-founder-full", 1100, 1400),
  leadershipTeam: [
    pic("mkrg-team-1", 800, 1000),
    pic("mkrg-team-2", 800, 1000),
    pic("mkrg-team-3", 800, 1000),
    pic("mkrg-team-4", 800, 1000),
    pic("mkrg-team-5", 800, 1000),
    pic("mkrg-team-6", 800, 1000),
  ],

  // Certifications page
  certificationsHero: pic("mkrg-certs-hero", 1600, 1000),
  certificationsDocs: [
    pic("mkrg-cert-iso9001", 800, 1100),
    pic("mkrg-cert-iso14001", 800, 1100),
    pic("mkrg-cert-gpcb", 800, 1100),
    pic("mkrg-cert-moefcc", 800, 1100),
    pic("mkrg-cert-ehs", 800, 1100),
  ],

  // Contact page
  contactHero: pic("mkrg-contact-hero", 1400, 900),
  contactPlant: pic("mkrg-contact-plant", 1200, 800),

  // Media page
  mediaHero: pic("mkrg-media-hero", 1600, 1000),
  mediaArticles: [
    pic("mkrg-art-innovation", 800, 600),
    pic("mkrg-art-policy", 800, 600),
    pic("mkrg-art-circular", 800, 600),
  ],
  mediaCompanyNews: [
    pic("mkrg-news-cert", 800, 600),
    pic("mkrg-news-expansion", 800, 600),
    pic("mkrg-news-csr", 800, 600),
    pic("mkrg-news-milestone", 800, 600),
  ],
  mediaVideos: [
    pic("mkrg-vid-tour", 1200, 700),
    pic("mkrg-vid-process", 1200, 700),
    pic("mkrg-vid-leader", 1200, 700),
  ],
  mediaEvents: [
    pic("mkrg-evt-summit", 800, 600),
    pic("mkrg-evt-expo", 800, 600),
    pic("mkrg-evt-community", 800, 600),
  ],
  mediaSubpages: [
    pic("mkrg-msub-press", 800, 600),
    pic("mkrg-msub-videos", 800, 600),
    pic("mkrg-msub-events", 800, 600),
  ],
};
