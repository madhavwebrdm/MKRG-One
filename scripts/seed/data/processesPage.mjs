// Processes page (singleton). Today's live content (code fallbacks; no Sanity
// document exists yet). The seeder only fills fields that are empty in Sanity.
const doc = {
  _id: "processesPage",
  _type: "processesPage",
  hero: {
    eyebrow: "Processes",
    heading: "The Recycle2X Process.",
    intro:
      "One closed loop. The hazardous waste that steel-making would otherwise send to landfill becomes commercial zinc. Air Pollution Control Devices keep the airborne stream well within International Standards.",
    image: {
      _type: "image",
      _url: "https://images.unsplash.com/photo-1743650050122-624233c928f3?w=1600&h=1000&fit=crop&auto=format&q=80",
      alt: "Recycle2X plant",
    },
    video: { _type: "file", _file: "public/videos/processes-hero.mp4" },
  },
  processFlow: {
    eyebrow: "Recycle2X",
    heading: "The full Recycle2X flow, step by step.",
    body: "Recycle 2X means one waste, two wins. We clean up hazardous waste, and we get useful zinc back from it.",
    flowNumber: "01",
    flowTitle: "Waste to Zinc",
    flowCaption: "Steel plants produce a hazardous dust. We turn it into 99.9% pure zinc.",
    steps: [
      {
        label: "Waste Collection",
        body: "Dust from steel and galvanising plants is collected under government approval. Every load is tracked from the originating plant to our facility.",
        image: { _type: "image", _file: "public/images/Waste Collection.jpg", alt: "Waste Collection" },
      },
      {
        label: "Washing & Preparation",
        body: "The dust is washed to remove dirt and unwanted material. The water is treated, cleaned and reused, with no discharge.",
        image: { _type: "image", _file: "public/images/washing-and-prep.jpg", alt: "Washing & Preparation" },
      },
      {
        label: "Purification",
        body: "The processed material undergoes several filtration stages to remove unwanted metals, including cadmium and copper. This produces a purified zinc solution ready for recovery.",
        image: { _type: "image", _file: "public/images/purification.jpg", alt: "Purification" },
      },
      {
        label: "Zinc Recovery",
        body: "An electric current deposits the zinc from the solution onto metal plates. The recovered zinc is then melted and cast into ingots and sheets, achieving purity above 99.9%.",
        image: { _type: "image", _file: "public/images/zinc-recovery.png", alt: "Zinc Recovery" },
      },
    ],
    calloutText:
      "This entire process turns hazardous waste into high-quality zinc reusable, traceable and in high demand across industry.",
  },
  technology: {
    heading: "The Technology Behind Our Zinc Recovery",
    body: [
      "At Madhav KRG Environmental Solution Limited, innovation drives the way we recover valuable resources from industrial waste. Our zinc recovery process is built on our own patented hydrometallurgical process, an advanced technology designed to extract zinc from Air Pollution Control Device (APCD) dust generated during steel manufacturing.",
      "The process enables the efficient recovery of zinc while minimizing waste and supporting responsible resource utilization. By transforming hazardous industrial by-products into high-value zinc products, our process helps reduce environmental impact and promotes a circular approach to manufacturing.",
    ].join("\n"),
  },
  wasteToZinc: {
    eyebrow: "Process",
    heading: "Waste to Zinc",
    caption: "Our hydrometallurgical process recovers 99.9% pure zinc from hazardous waste.",
    seal: {
      _type: "image",
      _file: "public/images/patented-process-in-india-seal.png",
      alt: "Hydrometallurgical Patented Process in India",
    },
    illustration: {
      _type: "image",
      _file: "public/images/waste to zinc.jpeg",
      alt: "Waste to Zinc process illustration",
    },
    steps: [
      { title: "Waste Receipt", body: "Secure hazardous waste handling" },
      { title: "Washing & Prep", body: "Remove contaminants" },
      { title: "Filtration", body: "Purify the solution" },
      { title: "Electrolysis", body: "99.9% pure zinc recovery" },
      { title: "Zinc Sheets", body: "Clean and package" },
    ],
  },
  seo: {
    title: "Processes | Madhav KRG Environmental Solution Limited",
    description:
      "The Recycle2X process Waste to Zinc. One closed loop, APCD air protection and zero landfill.",
  },
};

export default doc;
