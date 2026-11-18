// Waste We Buy page (Sustainability submenu), added Nov 2026 at the client's request.
// Material list as supplied by the client; card photos to be added when the client
// provides their own (the reference collage belongs to another company).
const doc = {
  _id: "wasteWeBuyPage",
  _type: "wasteWeBuyPage",
  hero: {
    eyebrow: "Waste We Buy",
    heading: "Industrial waste we buy.",
    intro:
      "We buy metal-bearing dust and powder from industry and recycle it responsibly, keeping hazardous waste out of landfill and putting valuable metal back to work.",
    image: {
      _type: "image",
      _file: "public/images/apcd-dust-recycle.jpg",
      alt: "APCD dust and pellets ready for recycling",
    },
  },
  intro: {
    eyebrow: "What we accept",
    heading: "Turn your industrial dust into value.",
    body: "If your operation generates any of the materials below, we can collect and recycle it under the required approvals, with every load tracked from your plant to ours.",
  },
  materials: [
    {
      name: "Bag House Powder",
      description: "Fine dust captured by bag house filters in furnaces and air pollution control systems.",
    },
    {
      name: "Lead Dust",
      description: "Lead-bearing dust generated during smelting, refining and other industrial processes.",
    },
    {
      name: "Lead Flue Dust",
      description: "Dust carried in furnace flue gases and collected by air pollution control equipment.",
    },
    {
      name: "Powder",
      description: "Other metal-bearing powders from industrial processes. Share the details of your material with us.",
    },
  ],
  cta: {
    heading: "Have one of these materials?",
    body: "Tell us what you have, how much and where it is. Our team will get back to you with the next steps.",
    buttonLabel: "Get in touch",
    buttonHref: "/contact",
  },
  seo: {
    title: "Waste We Buy | Madhav KRG Environmental Solution Limited",
    description:
      "Bag house powder, lead dust, lead flue dust and other metal-bearing powders: industrial waste Madhav KRG Environmental Solution Limited buys and recycles.",
  },
};

export default doc;
