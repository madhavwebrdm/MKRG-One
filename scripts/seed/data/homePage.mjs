// Home page, exactly as the site shows it today (Sanity values where they already exist,
// otherwise the fallbacks in the components). Hero tags are left empty on purpose: none are shown.
export default {
  _id: "homePage",
  _type: "homePage",

  seo: {
    title: "Madhav KRG Environmental Solution Limited | Waste is a Resource, Not a Problem",
    description:
      "MKESL recycles hazardous industrial waste into high-purity zinc with zero degradation or contamination intact properties as per International Standards, virtually similar to virgin material, with far lesser impact on the environment.",
  },

  hero: {
    heading: "Waste is a Resource, Not a Problem",
    videos: [
      { video: { _type: "file", _file: "public/videos/home-hero.mp4" }, startAt: 0, duration: 5 },
      { video: { _type: "file", _file: "public/videos/hero-3.mp4" }, startAt: 5, duration: 5 },
      { video: { _type: "file", _file: "public/videos/hero-tree.mp4" }, startAt: 0, duration: 5 },
      { video: { _type: "file", _file: "public/videos/hero-2.mp4" }, startAt: 0, duration: 5 },
      { video: { _type: "file", _file: "public/videos/hero-4.mp4" }, startAt: 0, duration: 5 },
    ],
    image: { _type: "image", _file: "public/images/hero-poster.webp" },
    primaryCtaLabel: "See our Impact",
    primaryCtaHref: "/sustainability",
    secondaryCtaLabel: "Our Recycling Process",
    secondaryCtaHref: "/processes",
  },

  marqueeItems: [
    "Recycle2X Process",
    "ISO 9001 / 14001",
    "MOEFCC Approved",
    "GPCB Compliant",
    "Zero Degradation",
    "International Standards",
    "Renewable Energy",
    "Closed loop",
  ],

  metricsEyebrow: "Impact metrics",
  metricsHeading: "Our impact, measured.",
  metricsIntro:
    "Every tonne we process meets International Standards and behaves virtually like virgin material at a fraction of the environmental cost.",
  metrics: [
    { value: 45000, suffix: " Mt", label: "CO₂ offset", note: "Annual avoided emissions" },
    { value: 25907.549, suffix: " MT", label: "Tonnes recycled", note: "Till March 2026" },
    { value: 42, suffix: "%", label: "Renewable energy", note: "Powering our plants" },
  ],

  missionVision: {
    eyebrow: "About us",
    heading: "A purpose built around the planet.",
    missionLabel: "Mission",
    mission:
      "To provide efficient and responsible recycling solutions that empower communities and businesses to minimise their environmental footprint.",
    visionLabel: "Vision",
    vision: "Accelerating India's growth by enabling Green Infrastructure.",
    image: {
      _type: "image",
      _file: "public/images/home-about-teaser.webp",
      alt: "Madhav KRG Environmental Solution Limited operations",
    },
    imageCaption: "Building Green Infrastructure across India",
  },

  sustainabilityTeaser: {
    eyebrow: "Sustainability",
    heading: "Recycling that gives back to industry and to the planet.",
    body: "Our environmental, health and safety programs run alongside community initiatives in the regions where we operate. Recycling isn't a line item; it is how we build green infrastructure.",
    ctaLabel: "See our impact",
    ctaHref: "/sustainability",
    highlights: [
      {
        label: "CSR",
        value: "Community programs across our sites",
        href: "/csr",
        image: { _type: "image", _file: "public/images/mkrg-3.jpeg" },
      },
      {
        label: "EHS",
        value: "Environment, health & safety, every shift",
        href: "/ehs",
        image: { _type: "image", _file: "public/images/ehs-tractor-field.jpg" },
      },
    ],
    cardLinkLabel: "Explore",
  },

  parallaxImpact: {
    heading: "Every Recycled Tonne\nIs a Step Towards\na Greener Earth.",
    image: {
      _type: "image",
      _url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=2400&h=1400&fit=crop&auto=format&q=80",
    },
  },

  processesTeaser: {
    eyebrow: "A first for India",
    heading:
      "The first to have the Patented Hydrometallurgical Process in India for recycled zinc.",
    body: "Others may use similar processes, but no one had patented one before us.",
    sealImage: {
      _type: "image",
      _file: "public/images/patented-process-in-india-seal.png",
      alt: "Patented hydrometallurgical process in India",
    },
    proofPoints: [
      { value: "99.9%", label: "Pure zinc recovered from hazardous waste" },
      { value: "7,000 t", label: "Approximate annual zinc production" },
      { value: "Zero", label: "Waste sent to landfill" },
    ],
  },

  certificationsTeaser: {
    eyebrow: "Certifications",
    heading: "Compliant by design, certified by audit.",
    body: "Independent certifications confirm what our process already enforces. Standards aren't a finish line they are the baseline we operate above.",
    image: {
      _type: "image",
      _file: "public/images/mkrg-6.jpeg",
      alt: "Madhav KRG Environmental Solution Limited certifications and audits",
    },
    imageBadge: "Audit-ready",
    badges: [
      { label: "ISO 9001", issuer: "Quality Management System" },
      { label: "Zinc Extraction Patent", issuer: "The Patent Office, Government of India" },
    ],
    ctaLabel: "View certifications",
    ctaHref: "/certifications",
  },

  mediaTeaser: {
    eyebrow: "Media",
    heading: "Latest press, plant tours and events.",
    body: "Where MKESL shows up on the page, on camera, and on the ground at the conversations shaping circular industry.",
    ctaLabel: "Browse the gallery",
    ctaHref: "/media",
  },
};
