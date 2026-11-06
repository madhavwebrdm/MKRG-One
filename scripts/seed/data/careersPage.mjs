// Careers page: today's content from src/components/CareersPageContent.tsx
// and the metadata in src/app/(site)/careers/page.tsx.
const doc = {
  _id: "careersPage",
  _type: "careersPage",
  hero: {
    eyebrow: "Careers",
    heading: "Work where the loop closes.",
    intro:
      "MKESL is hiring across plant operations, engineering, sales, finance and EHS. Send your CV and a short note we read every application.",
    image: {
      _type: "image",
      _file: "public/images/career.jpg",
      alt: "Save plants greener planet",
    },
  },
  applySection: {
    eyebrow: "Apply",
    heading: "Send us your CV.",
    applyEmail: "info@madhavkrggroup.com",
    nameLabel: "Full name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    roleLabel: "Role you're applying for",
    coverNoteLabel: "Cover note (optional)",
    cvLabel: "CV (PDF, up to 5 MB)",
    cvPlaceholder: "Choose a PDF to upload",
    submitLabel: "Submit application",
    sendingLabel: "Submitting…",
    successHeading: "CV received thank you.",
    successMessage:
      "Our HR team will review and reach out if there's a match. For role enquiries you can also write to",
  },
  seo: {
    title: "Careers | Madhav KRG Environmental Solution Limited",
    description:
      "Join Madhav KRG Environmental Solution Limited across plant operations, engineering, sales, finance and EHS. Apply with your CV and a short cover note.",
  },
};

export default doc;
