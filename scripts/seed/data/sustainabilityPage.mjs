// Sustainability page: today's content from src/components/SustainabilityPageContent.tsx
// and the metadata in src/app/(site)/sustainability/page.tsx.
// The hero image doubles as the video poster (it is what shows while the video loads).
// Environmental impact metrics match the home page Impact metrics on purpose.
const doc = {
  _id: "sustainabilityPage",
  _type: "sustainabilityPage",
  hero: {
    eyebrow: "Sustainability",
    heading: "Real numbers.\nCleaner air. Real communities.",
    intro:
      "Sustainability at Madhav KRG Environmental Solution Limited isn't a line item it is the business model. Every tonne we process avoids emissions, conserves resources and supports the communities we operate in.",
    image: {
      _type: "image",
      _file: "public/images/sustainability-hero-poster.jpg",
      alt: "Green plant operations",
    },
    video: { _type: "file", _file: "public/videos/sustainability-hero.mp4" },
  },
  metricsBlock: {
    eyebrow: "Environmental impact",
    heading: "Our impact, measured.",
    intro:
      "Verified figures from the most recent financial year. Every metric is auditable and traceable back to the plant floor.",
    items: [
      { value: 45000, suffix: " Mt", label: "CO₂ offset", note: "Annual avoided emissions" },
      { value: 25907.549, suffix: " MT", label: "Tonnes recycled", note: "Till March 2026" },
      { value: 42, suffix: "%", label: "Renewable energy", note: "Powering our plants" },
    ],
  },
  pillars: {
    eyebrow: "Pillars of impact",
    heading: "Five outcomes the process is designed for.",
    intro:
      "Environment protection, resource conservation, less energy, less carbon, a greener planet each pillar is a metric, not a slogan.",
    items: [
      {
        title: "Environment Protection",
        body: "Hazardous waste reduction at source. Flue dust becomes commercial zinc instead of landfill.",
        image: {
          _type: "image",
          _url: "https://images.unsplash.com/photo-1488330890490-c291ecf62571?w=800&h=700&fit=crop&auto=format&q=80",
        },
      },
      {
        title: "Resource Conservation",
        body: "Every recycled tonne is a tonne of virgin iron ore that stays in the ground.",
        image: { _type: "image", _file: "public/images/mkrg-4.jpeg" },
      },
      {
        title: "Less Energy Consumption",
        body: "Recycled zinc needs a fraction of the energy of primary smelting.",
        image: { _type: "image", _file: "public/images/mkrg-5.jpeg" },
      },
      {
        title: "Less Carbon Emission",
        body: "Up to 86% lower CO₂ versus the virgin route verified, not estimated.",
        image: { _type: "image", _file: "public/images/solar.jpg" },
      },
      {
        title: "Greener Planet",
        body: "Every closed loop is one less open one. The math is simple; the work is not.",
        image: { _type: "image", _file: "public/images/green-planet.jpeg" },
      },
    ],
  },
  recyclingStats: {
    eyebrow: "Recycling statistics",
    heading: "One closed loop, zero landfill.",
    intro:
      "Hazardous flue dust is processed into commercial-grade zinc. Air Pollution Control Devices keep what is left of the airborne stream well within International Standards.",
    image: {
      _type: "image",
      _file: "public/images/sustainability-recycling-stats.jpeg",
      alt: "MKESL plant, APCD dust collection and stack infrastructure",
    },
    items: [
      {
        label: "Waste → Zinc",
        value: "18K t",
        note: "Hazardous flue dust converted to commercial-grade zinc concentrate.",
      },
      {
        label: "APCD efficiency",
        value: "99.4%",
        note: "Particulate capture across all stacks well above the IS threshold.",
      },
    ],
  },
  communityPrograms: {
    eyebrow: "Community programs",
    heading: "Recycling that gives back beyond the gate.",
    intro:
      "Our work doesn't end at the plant boundary. CSR and EHS programs run year-round across every site, in partnership with the people who live and work nearest to us.",
  },
  csrSection: {
    eyebrow: "CSR",
    heading: "Corporate social responsibility",
    body:
      "Skills training, school infrastructure, healthcare access and water programs our CSR spend is concentrated in the catchment of every operating plant, where impact is local and visible.",
    image: { _type: "image", _file: "public/images/mkrg-3.jpeg", alt: "CSR program" },
  },
  ehsSection: {
    eyebrow: "EHS",
    heading: "Environment, health & safety",
    body:
      "Daily safety briefings, emission monitoring, occupational-health checks and incident transparency EHS is governance, not paperwork. Every shift, every plant.",
    image: { _type: "image", _file: "public/images/mkrg-8.jpeg", alt: "EHS program" },
  },
  seo: {
    title: "Sustainability | Madhav KRG Environmental Solution Limited",
    description:
      "Environmental impact, recycling statistics and community programs at Madhav KRG Environmental Solution Limited, emissions avoided, resources conserved, communities supported.",
  },
};

export default doc;
