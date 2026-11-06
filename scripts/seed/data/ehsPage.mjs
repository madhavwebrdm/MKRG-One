// EHS page: today's content from src/components/EhsPageContent.tsx
// and the metadata in src/app/(site)/ehs/page.tsx.
const doc = {
  _id: "ehsPage",
  _type: "ehsPage",
  hero: {
    eyebrow: "Environment, Health & Safety",
    heading: "Holistic health comes first at Madhav KRG Environmental Solution Limited.",
    intro:
      "A healthy product is the result of a healthy environment and a healthy workforce. From daily safety briefings and emission monitoring to occupational-health checks and incident transparency, EHS is how we keep our people and the environment around our plants protected.",
    image: {
      _type: "image",
      _url: "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?w=1200&h=800&fit=crop&auto=format&q=80",
      alt: "Madhav KRG Environmental Solution Limited environment, health and safety",
    },
  },
  overview: {
    heading: "Holistic health comes first.",
    body:
      "Our EHS department is directly handled by the IQMS and follows procedures compliant with national, international, statutory and regulatory requirements.",
  },
  environment: {
    eyebrow: "Environment",
    heading: "Reducing our footprint, plant by plant.",
    intro:
      "From air pollution control to water reuse and green cover, our environment programs run continuously across every site.",
    items: [
      {
        title: "Air Pollution Control",
        body: "Advanced APCD (Air Pollution Control Device) technology captures fume accumulation at the source.",
        icon: "filter",
      },
      {
        title: "Water Treatment & Reuse",
        body: "ETP, RO and STP systems treat water for reuse across manufacturing operations.",
        icon: "droplets",
      },
      {
        title: "Rainwater Harvesting",
        body: "A water reservoir pond of 13 lac litre capacity collects and stores rainwater on site.",
        icon: "globe-2",
      },
      {
        title: "Green Belt",
        body: "A green belt of herbal trees planted across the plant premises.",
        icon: "tree-pine",
      },
    ],
  },
  health: {
    eyebrow: "Health",
    heading: "Looking after the people behind every shift.",
    intro:
      "Regular health camps, on-site medical care and everyday wellbeing measures keep our workforce healthy.",
    items: [
      {
        title: "Health Camps",
        body: "Regular health camps covering eye check-ups and oral health for the workforce.",
        icon: "heart-handshake",
      },
      {
        title: "Hydration on the Floor",
        body: "ORS and lemon water provided to workers through every shift.",
        icon: "droplets",
      },
      {
        title: "On-Site Medical Lab",
        body: "A well-equipped medical lab is available for employees on campus.",
        icon: "flask-conical",
      },
      {
        title: "Ambulance on Campus",
        body: "An ambulance is available on campus for medical emergencies.",
        icon: "truck",
      },
    ],
  },
  safety: {
    eyebrow: "Safety",
    heading: "Safety built into every shift.",
    intro:
      "Protective equipment, marked walkways, regular training and strict enforcement keep every work area safe.",
    items: [
      {
        title: "Personal Protective Equipment",
        body: "Safety gear including helmets, masks, safety shoes and glasses issued and enforced on the shop floor.",
        icon: "hard-hat",
      },
      {
        title: "Marked Walkways",
        body: "Clearly marked walkways separate pedestrian movement from operating equipment.",
        icon: "map-pin",
      },
      {
        title: "Regular Safety Training",
        body: "Employees are regularly trained on safe working practices across every shift.",
        icon: "shield-check",
      },
      {
        title: "Violation Penalties",
        body: "A challan (fine) system enforces compliance with safety rules on site.",
        icon: "file-badge",
      },
      {
        title: "Emergency Preparedness",
        body: "Marked emergency exits are maintained across every work area.",
        icon: "flame",
      },
    ],
  },
  closingCta: {
    heading: "Want to know more about our EHS practices?",
    body:
      "Reach out to our team and we will be glad to share how we manage environment, health and safety across our operations.",
    primaryLabel: "Get in touch",
    primaryHref: "/contact",
  },
  seo: {
    title: "EHS | Madhav KRG Environmental Solution Limited",
    description:
      "Environment, Health & Safety at Madhav KRG Environmental Solution Limited. Detailed programs and standards coming soon.",
  },
};

export default doc;
