// Quality Control page (Product submenu), added Nov 2026 at the client's request.
// Structure follows the reference page the client shared; the text is written for
// MKESL (MP-AES testing, traceable batches). Lab details to be confirmed by the client.
const doc = {
  _id: "qualityControlPage",
  _type: "qualityControlPage",
  hero: {
    eyebrow: "Quality Control",
    heading: "Quality checked at every stage.",
    intro:
      "Every batch of zinc we recover is tested before it leaves the plant, so customers get the purity and consistency they plan around.",
    image: {
      _type: "image",
      _file: "public/images/zinc-recovery.webp",
      alt: "Zinc ingots produced by Madhav KRG Environmental Solution Limited",
    },
  },
  intro: {
    eyebrow: "Our approach",
    heading: "Quality is built into the process, not inspected at the end.",
    body: "From the moment APCD dust arrives at our plant to the moment finished zinc ingots are dispatched, each stage is monitored and checked against our specifications.\nThe result is high-purity zinc that behaves virtually like virgin material and meets the requirements of the industries we supply.",
  },
  commitments: {
    eyebrow: "Our commitments",
    heading: "What we commit to, batch after batch.",
    items: [
      "Customer satisfaction through consistent, high-quality zinc at a fair price.",
      "Steady improvement in productivity across both production lines.",
      "Tight control of waste and losses at every stage of the process.",
      "Meeting each customer's specification and delivering on time.",
      "Cost efficiency that keeps our zinc competitive.",
    ],
  },
  testing: {
    eyebrow: "Testing & laboratory",
    heading: "Tested in our own laboratory.",
    body: "Our in-house laboratory tests material at every stage of production, from incoming APCD dust to the purified zinc solution.\nFinished zinc ingots are analysed using MP-AES (Microwave Plasma Atomic Emission Spectroscopy) to confirm uniform purity before dispatch, and every batch is traceable back to the waste stream it was recovered from.",
    image: {
      _type: "image",
      _file: "public/images/zinc-recovery.webp",
      alt: "Finished zinc ingots ready for quality testing",
    },
  },
  policy: {
    eyebrow: "Quality policy",
    heading: "Meet the requirement, stay cost effective, deliver on time.",
    body: "Our quality policy is simple: meet the customer's requirement, stay cost effective and deliver on time. We want our products and service to be the best in the market and to exceed our customers' expectations.\nTo keep that promise, products are checked at every level of manufacturing, and the finished product goes through a final quality check in the lab before it is released.",
  },
  cta: {
    heading: "Need a test certificate or specification sheet?",
    body: "Talk to our team about grades, test results and certifications for your production line.",
    buttonLabel: "Contact our team",
    buttonHref: "/contact",
  },
  seo: {
    title: "Quality Control | Madhav KRG Environmental Solution Limited",
    description:
      "How Madhav KRG Environmental Solution Limited tests and checks every batch of recycled zinc, from incoming APCD dust to finished ingots.",
  },
};

export default doc;
