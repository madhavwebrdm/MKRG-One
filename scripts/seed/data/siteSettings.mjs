// Site-wide settings: header, footer and company details, exactly as the site shows them today.
// Contact details, address lines and CIN are intentionally left out: the footer only shows
// them when they are filled in, and today it shows none.
const LOGO_ALT = "Madhav KRG Environmental Solution Limited";

export default {
  _id: "siteSettings",
  _type: "siteSettings",

  /* General */
  title: "Madhav KRG Environmental Solution Limited",
  description:
    "MKESL recycles hazardous industrial waste into high-purity zinc with zero degradation or contamination intact properties as per International Standards, virtually similar to virgin material, with far lesser impact on the environment.",

  /* Header */
  headerLogo: {
    onDark: { _type: "image", _file: "public/brand/MKRG_header_on-dark.svg", alt: LOGO_ALT },
    onLight: { _type: "image", _file: "public/brand/MKRG_header_on-light.svg", alt: LOGO_ALT },
    compactOnDark: {
      _type: "image",
      _file: "public/brand/MKRG_header-compact_on-dark.svg",
      alt: LOGO_ALT,
    },
    compactOnLight: {
      _type: "image",
      _file: "public/brand/MKRG_header-compact_on-light.svg",
      alt: LOGO_ALT,
    },
  },
  primaryNav: [
    {
      label: "About us",
      href: "/about",
      children: [
        { label: "Company Brief", href: "/about#company-brief" },
        { label: "Mission & Vision", href: "/about#mission-vision" },
        { label: "Values", href: "/about#values" },
        { label: "Process", href: "/processes" },
        { label: "Certifications", href: "/certifications" },
        { label: "Projects", href: "/projects" },
      ],
    },
    { label: "Leadership", href: "/leadership" },
    { label: "Product", href: "/product" },
    {
      label: "Sustainability",
      href: "/sustainability",
      children: [
        { label: "CSR", href: "/csr" },
        { label: "EHS", href: "/ehs" },
      ],
    },
    { label: "Media", href: "/media" },
    { label: "Contact", href: "/contact" },
  ],
  headerCta: { label: "Get in touch", href: "/contact" },

  /* Footer */
  footerLogo: {
    _type: "image",
    _file: "public/brand/MKRG_footer_on-dark.svg",
    alt: "Madhav KRG Environmental Solution Limited, a Madhav KRG Group company",
  },
  footerBackground: {
    _type: "image",
    _url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80&fit=crop&crop=center",
  },
  company: {
    legalName: "Madhav KRG Environmental Solution Limited",
    tagline: "Waste is a Resource, Not a Problem.",
  },
  footerColumns: [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Leadership", href: "/leadership" },
        { label: "Certifications", href: "/certifications" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "What We Do",
      links: [
        { label: "Sustainability", href: "/sustainability" },
        { label: "CSR", href: "/csr" },
        { label: "EHS", href: "/ehs" },
        { label: "Processes", href: "/processes" },
        { label: "Materials", href: "/processes#materials" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Press", href: "/media#press" },
        { label: "Videos", href: "/media#videos" },
        { label: "Events", href: "/media#events" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  footerConnectHeading: "Connect",
  socials: {
    linkedin: "https://linkedin.com",
    twitter: "https://x.com/",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  footerCta: {
    heading: "Let's Build a",
    highlight: "Greener India.",
    body: "Reach out to explore partnership, sourcing, or sustainability goals.",
    buttonLabel: "Get in touch",
    buttonHref: "/contact",
  },
  footerBottom: {
    rightsText: "All rights reserved.",
    slogan: "Together for a Greener India.",
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
    creditPrefix: "Designed by",
    creditLabel: "Red Dash Media",
    creditHref: "https://www.reddashmedia.com/",
  },
};
