// Projects page (singleton). Today's live content: code fallbacks plus the values
// already saved in Sanity. The seeder only fills fields that are empty in Sanity.
const doc = {
  _id: "projectsPage",
  _type: "projectsPage",
  hero: {
    eyebrow: "Projects",
    heading: "Transforming Hazardous Waste into Valuable Resources",
    intro:
      "Madhav KRG Environmental Solution Limited has developed a unique waste recovery solution to process hazardous APCD dust generated from steel industries and recover valuable metals like zinc. The initiative supports cleaner industrial operations while reducing environmental impact through responsible waste management.",
    image: {
      _type: "image",
      _file: "public/images/product-hero.webp",
      alt: "Zinc feedstock at the Waste Recycling Division plant",
    },
  },
  highlights: {
    eyebrow: "Waste Recycling Division",
    heading: "Converting Industrial Waste into Sustainable Resources",
    items: [
      { title: "Processing hazardous industrial waste responsibly", icon: "shield-check" },
      { title: "Recovery of valuable metals from APCD dust", icon: "recycle" },
      { title: "Supporting cleaner steel production practices", icon: "factory" },
      { title: "Promoting circular economy principles", icon: "sprout" },
    ],
  },
  overview: {
    eyebrow: "About the project",
    heading: "Addressing industrial waste challenges in Mandi Gobindgarh.",
    body: [
      "Mandi Gobindgarh, popularly known as the Steel City of India, is one of the largest hubs for recycled steel production. With numerous induction furnace units operating in the region, the steel industry generates significant quantities of flue gas cleaning residue, commonly known as APCD dust.",
      "This dust contains valuable metals along with hazardous elements such as zinc, iron, lead, cadmium, fluoride and chloride. If not managed properly, these materials can pose risks to the environment and surrounding communities.",
      "To address this challenge, an innovative approach was developed to collect, process and recycle APCD dust while recovering valuable resources.",
    ].join("\n"),
    // Already in Sanity: the image itself (only the alt text gets filled).
    image: {
      _type: "image",
      _file: "public/images/projects-overview.webp",
      alt: "Waste Recycling Division processing facility",
    },
  },
  challenge: {
    // Already in Sanity: eyebrow "The challenge".
    eyebrow: "The challenge",
    heading: "Converting pollution challenges into resource opportunities.",
    body: [
      "Before the implementation of advanced pollution control systems, a considerable amount of APCD dust generated during steel production was released into the environment.",
      "With improved Air Pollution Control Devices, including side hood suction systems and pulse jet bag filters, dust collection increased significantly. While this helped reduce air pollution, it also created a need for safe and sustainable disposal solutions.",
      "The Waste Recycling Division was established to transform this hazardous waste into a valuable resource by extracting zinc and other recoverable materials.",
    ].join("\n"),
  },
  timeline: {
    eyebrow: "Project timeline",
    heading: "Building a model waste recycling facility.",
    intro: "The project was developed through continuous research, innovation and process improvement.",
    entries: [
      {
        year: "March 2015",
        title: "Installation begins",
        body: "Project installation work started for the Waste Recycling Division plant.",
      },
      {
        year: "October 2015",
        title: "Plant installation completed",
        body: "Plant installation was completed, readying the facility for process trials.",
      },
      {
        year: "2015–2016",
        title: "R&D and process validation",
        body: "Continuous research and development were carried out to overcome technology challenges and achieve desired processing parameters.",
      },
      {
        year: "November 2016",
        title: "Commercial production begins",
        body: "Commercial production began after successful technology validation.",
      },
      {
        year: "2017 onwards",
        title: "Regional expansion",
        body: "Collection of APCD dust expanded from induction furnace units across Punjab.",
      },
    ],
  },
  process: {
    eyebrow: "Technology & process",
    heading: "Advanced APCD dust recycling process.",
    intro:
      "The facility uses specialised technology to process APCD dust collected from induction furnace units and recover valuable zinc content.",
    steps: [
      {
        title: "Collection of APCD Dust",
        body: "Dust generated from steel manufacturing units is collected through improved pollution control systems.",
        icon: "truck",
      },
      {
        title: "Transportation & Processing",
        body: "Collected material is transported and processed at the Waste Recycling Division facility.",
        icon: "boxes",
      },
      {
        title: "Metal Recovery",
        body: "Advanced processing methods are used to extract zinc and other valuable materials from industrial waste.",
        icon: "flask-conical",
      },
      {
        title: "Resource Reuse",
        body: "Recovered metals are returned into the industrial supply chain, reducing dependency on virgin resources.",
        icon: "recycle",
      },
    ],
    capacityStats: [
      { value: "60 MT/day", label: "APCD Dust Recycling Capacity" },
      { value: "20 MT/day", label: "Zinc Extraction Capacity" },
    ],
  },
  impact: {
    eyebrow: "Environmental impact",
    heading: "Supporting cleaner industrial growth.",
    intro:
      "The project has played an important role in reducing the environmental impact of steel industry waste in the Mandi Gobindgarh region.",
    achievements: [
      "Reduced dependency on hazardous waste landfill disposal",
      "Enabled responsible processing of APCD dust",
      "Supported recovery of valuable metals from waste",
      "Helped industries move towards cleaner production practices",
    ],
    image: {
      _type: "image",
      _file: "public/images/zinc-recovery.webp",
      alt: "Recovered zinc ingots, 99.9% purity",
    },
  },
  circularEconomy: {
    eyebrow: "Circular economy",
    heading: "Our contribution to the circular economy.",
    intro:
      "Instead of treating APCD dust as waste, the project focuses on recovering resources and creating economic value through recycling. By converting hazardous industrial residue into reusable materials, the initiative supports:",
    items: [
      { title: "Sustainable manufacturing", icon: "factory" },
      { title: "Resource conservation", icon: "droplets" },
      { title: "Reduced environmental burden", icon: "wind" },
      { title: "Responsible industrial growth", icon: "target" },
    ],
  },
  stats: {
    eyebrow: "Impact statistics",
    heading: "Results the numbers back up.",
    intro:
      "Since commercial production began, the Waste Recycling Division has scaled steadily alongside the induction furnace units it partners with.",
    items: [
      {
        value: 140,
        suffix: "+",
        label: "Industries Associated",
        note: "Induction furnace units partnered for APCD dust collection and recycling.",
      },
      {
        value: 25900,
        suffix: "+ MT",
        label: "APCD Dust Processed",
        note: "Waste material collected and diverted from disposal sites.",
      },
      {
        value: 2140,
        suffix: " MT",
        label: "Zinc Recovered",
        note: "Valuable zinc extracted from industrial waste.",
      },
      {
        value: 1800,
        suffix: " MT/Month",
        label: "Waste Utilization Capacity",
        note: "Current APCD dust processing capability.",
      },
    ],
  },
  partnership: {
    eyebrow: "Partnership with industries",
    heading: "Supporting steel industries through sustainable solutions.",
    body: [
      "The Waste Recycling Division works closely with induction furnace units across Punjab by providing a reliable solution for APCD dust management.",
      "Through collection, transportation and recycling services, industries can reduce disposal challenges while contributing to environmentally responsible steel production.",
    ].join("\n"),
  },
  futureVision: {
    eyebrow: "Future vision",
    heading: "Building a cleaner industrial ecosystem.",
    body: "The project continues to focus on improving recycling technology, increasing resource recovery and supporting industries in adopting sustainable waste management practices. Through innovation and collaboration, the initiative aims to contribute towards a cleaner and more sustainable industrial future.",
  },
  seo: {
    title: "Projects | Madhav KRG Environmental Solution Limited",
    description:
      "Inside the Waste Recycling Division's APCD dust to zinc recovery project in Mandi Gobindgarh, from plant timeline and process to environmental impact.",
  },
};

export default doc;
