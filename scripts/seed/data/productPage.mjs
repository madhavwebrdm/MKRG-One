// Product page (singleton). Today's live content: code fallbacks plus the values
// already saved in Sanity. The seeder only fills fields that are empty in Sanity.
const doc = {
  _id: "productPage",
  _type: "productPage",
  hero: {
    // Already in Sanity: eyebrow, heading, intro.
    eyebrow: "Our Products",
    heading: "Pure Zinc, Made From Waste",
    intro:
      "From hazardous waste, we create certified high-purity zinc products that power infrastructure, manufacturing and sustainable growth.",
    image: {
      _type: "image",
      _file: "public/images/product-hero.webp",
      alt: "Madhav KRG Environmental Solution Limited zinc products",
    },
  },
  overview: {
    // Already in Sanity: eyebrow, heading, intro.
    eyebrow: "What We Make",
    heading: "From Hazardous Dust to Industrial-Grade Zinc",
    intro:
      "Our commercial zinc products transform recovered materials into reliable industrial solutions that support construction, manufacturing and infrastructure development.",
    families: [
      {
        title: "Commercial Zinc",
        tagline:
          "Recovered from hazardous industrial waste through advanced hydrometallurgical recovery.",
        image: { _type: "image", _file: "public/images/zinc-recovery.webp", alt: "Commercial Zinc" },
      },
    ],
    applications: {
      items: [
        {
          title: "Galvanization",
          body: "Over half of all zinc ingots produced each year go into galvanization, dipping steel into molten zinc to shield it from corrosion.",
        },
        {
          title: "Zinc Alloys",
          body: "Combined with metals like aluminum and copper, zinc forms alloys used across industry, brass for plumbing, electrical fittings and musical instruments; ZL12, a 12% aluminum-zinc alloy for gravity casting; and ZL5, copper-strengthened for automotive parts.",
        },
        {
          title: "Battery Production",
          body: "Zinc ingots are a core input in dry-cell batteries, driving the voltage generation that powers them.",
        },
        {
          title: "Zinc Oxide & Pharmaceutical Use",
          body: "Zinc ingots can be refined into zinc oxide, which is widely used in rubber, ceramics, chemicals, and pharmaceuticals. In healthcare, zinc oxide supports skin protection, antimicrobial and soothing applications, oral and dental care, and dietary supplements.",
        },
        {
          title: "Electroplating",
          body: "Applied as a protective, decorative coating on metal surfaces, guarding against oxidation while adding durability.",
        },
        {
          title: "Manufacturing & Industrial Use",
          body: "Beyond the above, zinc ingots support chemical processing, furniture manufacturing and automotive production.",
        },
      ],
      ctaLabel: "Explore the process",
      ctaHref: "/processes",
    },
  },
  parallax: {
    heading: "Recycled. Certified.\nReady for Industry.",
    image: { _type: "image", _file: "public/images/product-parallax.webp" },
  },
  zinc: {
    // Already in Sanity: eyebrow, heading, products (1 item with image).
    // The "Zinc Manufacturing Capabilities" paragraph (noteHeading/noteBody) and the
    // Plant Capacity row were removed at the client's request (Nov 2026).
    eyebrow: "Commercial Zinc",
    heading: "Zinc Made from Waste, Refined to 99.9%",
    products: [
      {
        name: "Zinc Ingots",
        description: "Industrial-grade zinc suitable for galvanizing and alloy production.",
        image: { _type: "image", _file: "public/images/zinc-recovery.webp", alt: "Zinc Ingots" },
      },
    ],
    calloutTitle: "Turning Waste into Resource",
    calloutBody:
      "Every tonne of zinc recovered represents hazardous waste diverted from landfill and valuable material returned to industrial use.",
    noteSpecs: [
      { label: "Dimensions", value: "485 × 245 × 33 MM (L × W × T)" },
      { label: "Weight", value: "25 KG per ingot" },
      { label: "Bundle", value: "40 Ingots / Bundle · 1000 KG Total" },
      { label: "Composition", value: "99.7% Purity" },
      { label: "Testing", value: "MP-AES Tested for uniform purity" },
    ],
  },
  // Section stays hidden on the site until the certificate file is uploaded.
  testCertificate: {
    eyebrow: "Quality assurance",
    heading: "Test Certificate",
    body: "Every batch of our zinc ingots is tested for purity. View the latest test certificate for the full results.",
    buttonLabel: "View test certificate",
  },
  closingCta: {
    heading: "Looking for a reliable supply of commercial zinc?",
    body: "Talk to our team about grades, volumes and certifications for your project or production line.",
    primaryLabel: "Get in touch",
    primaryHref: "/contact",
  },
  seo: {
    title: "Products | Madhav KRG Environmental Solution Limited",
    description:
      "High-purity commercial zinc recovered from hazardous industrial waste. Zinc ingots, sheets and feedstock, refined to 99.9% purity.",
  },
};

export default doc;
