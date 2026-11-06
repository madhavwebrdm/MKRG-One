// Contact page: today's content from src/components/ContactPageContent.tsx
// and the metadata in src/app/(site)/contact/page.tsx.
const doc = {
  _id: "contactPage",
  _type: "contactPage",
  hero: {
    eyebrow: "Contact",
    heading: "Talk to the team behind the loop.",
    intro:
      "Sales, technical queries, partnerships and audit requests every enquiry reaches a person. Most replies land within one business day.",
    image: {
      _type: "image",
      _file: "public/images/Contact.jpg",
      alt: "Save plants greener planet",
    },
  },
  enquiryForm: {
    eyebrow: "Enquiry",
    heading: "Send us a message.",
    intro:
      "Pick a product interest, drop a line and we'll route your enquiry to the right person.",
    productOptions: ["Zinc Ingots", "Zinc Sheets", "Zinc Feedstock"],
    nameLabel: "Name",
    companyLabel: "Company",
    phoneLabel: "Phone",
    emailLabel: "Email",
    messageLabel: "Message",
    productLabel: "Product interest",
    submitLabel: "Send enquiry",
    sendingLabel: "Sending…",
    successHeading: "Thanks we've got your enquiry.",
    successMessage:
      "A member of the MKESL team will reply within one business day. For urgent calls, the sales line is open between 9 AM and 7 PM IST.",
    sendAnotherLabel: "Send another enquiry",
  },
  reachSection: {
    eyebrow: "Reach us",
    heading: "Offices & lines.",
  },
  offices: [
    {
      label: "Office",
      icon: "factory",
      lines: [
        "Madhav KRG Environmental Solution Limited",
        "Vill. Bhadal Thuha, Amloh Bhadson Road",
        "Distt. Fatehgarh Sahib, Punjab",
        "India",
      ],
    },
  ],
  contactLines: [
    {
      label: "Corporate & registered office",
      icon: "phone",
      value: "+91-1765-500075",
      href: "tel:+911765500075",
    },
    {
      label: "Work office",
      icon: "phone",
      value: "+91-1765-282334",
      href: "tel:+911765282334",
    },
    {
      label: "Helpline",
      icon: "life-buoy",
      value: "+91 97799-15000",
      href: "tel:+919779915000",
    },
    {
      label: "General email",
      icon: "mail",
      value: "info@madhavkrggroup.com",
      href: "mailto:info@madhavkrggroup.com",
    },
  ],
  follow: {
    label: "Follow MKESL",
    links: [
      { platform: "linkedin", url: "https://www.linkedin.com/company/madhavkrggroup/" },
      { platform: "twitter", url: "https://twitter.com/JYOTI_offcial" },
      { platform: "youtube", url: "https://www.youtube.com/channel/UCbI08WxJFsWYc9hQ2oSrpfQ" },
      { platform: "instagram", url: "https://www.instagram.com/jyotiofficialindia/" },
      { platform: "facebook", url: "https://www.facebook.com/JyotiOfficialIndia" },
    ],
  },
  mapSection: {
    eyebrow: "Find us",
    heading: "Offices & plant locations.",
    intro:
      "Visits are by appointment please write ahead so we can arrange a plant walk-through or office meeting.",
    mapTitle: "Madhav KRG Environmental Solution Limited location map",
    locationLabel: "Coordinates",
    locationText:
      "New Delhi, Khanna and Patiala, the registered office, corporate HQ and the Akalgarh plant.",
    image: {
      _type: "image",
      _url: "https://images.unsplash.com/photo-1743650050124-78df792c751d?w=1200&h=800&fit=crop&auto=format&q=80",
      alt: "Plant exterior",
    },
  },
  mapEmbedUrl:
    "https://www.google.com/maps?q=Akalgarh+Amloh-Bhadson+Road+Patiala+147203&output=embed",
  seo: {
    title: "Contact | Madhav KRG Environmental Solution Limited",
    description:
      "Sales, technical, partnership and audit enquiries for Madhav KRG Environmental Solution Limited offices in Ahmedabad and the Recycle2X plant in Mehsana, Gujarat.",
  },
};

export default doc;
