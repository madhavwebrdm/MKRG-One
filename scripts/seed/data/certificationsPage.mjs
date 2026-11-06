// Certifications page (singleton). No document exists in Sanity yet, so this is
// the content the site shows today from the code fallbacks. Only the four
// entries that are actually visible are seeded (ISO 9001 and the patent in the
// certifications grid, the two award documents in the awards gallery).
//
// The nomination letter is used both as the downloadable file and as the
// gallery image. The "./" on the image path keeps the seeder from reusing the
// file-type upload for the image field (it caches uploads by path).
const doc = {
  _id: "certificationsPage",
  _type: "certificationsPage",
  hero: {
    eyebrow: "Certifications",
    heading: "Compliant by design, certified by audit.",
    intro:
      "Independent certifications confirm what our process already enforces. Quality, environment and safety standards aren't a finish line for Madhav KRG Environmental Solution Limited, they are the baseline we operate above.",
    image: {
      _type: "image",
      _file: "public/images/certifications.jpeg",
      alt: "Madhav KRG Environmental Solution Limited certifications",
    },
  },
  intro: {
    eyebrow: "Standards we operate under",
    heading: "Certified, awarded, patented. Same expectation.",
    body: "Quality, environment and safety standards from Indian regulators and international bodies. Every certificate is current and renewed on schedule.",
    cardLinkLabel: "View certificate",
  },
  certificates: [
    {
      category: "certification",
      title: "ISO 9001",
      issuer: "Quality Management System",
      body: "Internationally recognised quality management certification every plant, every shift.",
      status: "Active",
      icon: "award",
      downloadFile: { _type: "file", _file: "public/documents/ISO9001.pdf" },
    },
    {
      category: "certification",
      title: "Zinc Extraction Patent",
      issuer: "The Patent Office, Government of India",
      body: "Patent No. 427561 for an improved process to extract zinc from Air Pollution Control Device (APCD) dust, granted for 20 years from July 2017.",
      status: "Granted",
      icon: "lightbulb",
      downloadFile: { _type: "file", _file: "public/documents/zinc-extraction-patent-427561.pdf" },
    },
    {
      category: "award",
      title: "Environment Excellence Award",
      issuer: "Punjab Pollution Control Board",
      body: "Awarded on World Environment Day 2018 for pioneering the recycling of hazardous APCD dust into a resource, at our Fatehgarh Sahib facility.",
      status: "Awarded",
      icon: "award",
      downloadFile: { _type: "file", _file: "public/documents/environment-excellence-award-2018.pdf" },
      thumbnail: {
        _type: "image",
        _file: "public/documents/environment-excellence-award-2018-thumb.png",
        alt: "Environment Excellence Award certificate",
      },
    },
    {
      category: "award",
      title: "Environment Excellence Award Nomination",
      issuer: "Punjab Pollution Control Board",
      body: "Official nomination letter inviting Madhav Alloy to receive the 2018 Environment Excellence Award for its hazardous-waste recycling initiative.",
      status: "On file",
      icon: "mail",
      downloadFile: {
        _type: "file",
        _file: "public/documents/environment-excellence-award-nomination-2018.jpg",
      },
      thumbnail: {
        _type: "image",
        _file: "./public/documents/environment-excellence-award-nomination-2018.jpg",
        alt: "Environment Excellence Award Nomination certificate",
      },
    },
  ],
  awardsSection: {
    eyebrow: "Awards",
    heading: "Recognition, on record.",
    body: "Scanned copies of the awards we've received. Full documents are available on request for partners, regulators and auditors.",
  },
  seo: {
    title: "Certifications | Madhav KRG Environmental Solution Limited",
    description:
      "ISO 9001 / 14001, GPCB, MOEFCC and EHS certifications quality, environmental and safety standards Madhav KRG Environmental Solution Limited operates under.",
  },
};

export default doc;
