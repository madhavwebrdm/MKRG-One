"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Eye,
  FileBadge,
  Globe2,
  HardHat,
  Landmark,
  Lightbulb,
  Mail,
  ShieldCheck,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import { iconFromKey } from "@/lib/icons";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";

const str = (v: string | null | undefined, fallback: string): string =>
  v && v.trim() ? v : fallback;

type Cert = {
  title: string;
  issuer: string;
  body: string;
  icon: typeof ShieldCheck;
  status?: string;
  downloadHref?: string;
  thumbnail?: string;
  category: "certification" | "award";
};

type CertView = {
  title: string;
  issuer: string;
  body: string;
  Icon: LucideIcon;
  status?: string;
  downloadHref?: string;
  thumbnail?: string;
  category: "certification" | "award";
};

export type CertificationsPageData = {
  hero?:
    | { eyebrow?: string | null; heading?: string | null; intro?: string | null; imageUrl?: string | null; imageAlt?: string | null }
    | null;
  intro?: { eyebrow?: string | null; heading?: string | null; body?: string | null } | null;
  certificates?: Array<{
    title?: string | null;
    issuer?: string | null;
    body?: string | null;
    status?: string | null;
    icon?: string | null;
    downloadUrl?: string | null;
  }> | null;
} | null;

const CERTS: Cert[] = [
  {
    title: "ISO 9001",
    issuer: "Quality Management System",
    body: "Internationally recognised quality management certification every plant, every shift.",
    icon: Award,
    status: "Active",
    downloadHref: "/documents/ISO9001.pdf",
    category: "certification",
  },
  {
    title: "ISO 14001",
    issuer: "Environmental Management System",
    body: "Verified environmental management program covering emissions, waste, water and energy across all operations.",
    icon: Globe2,
    status: "Active",
    downloadHref: "#",
    category: "certification",
  },
  {
    title: "GPCB",
    issuer: "Gujarat Pollution Control Board",
    body: "Consent to operate, consent to establish and hazardous-waste authorisation for plants operating in Gujarat.",
    icon: Landmark,
    status: "Compliant",
    downloadHref: "#",
    category: "certification",
  },
  {
    title: "MOEFCC",
    issuer: "Ministry of Environment, Forest & Climate Change",
    body: "Ministry-level approvals and permits covering hazardous waste handling, transport and recycling.",
    icon: FileBadge,
    status: "Approved",
    downloadHref: "#",
    category: "certification",
  },
  {
    title: "EHS Program",
    issuer: "Environment, Health & Safety",
    body: "In-house EHS program covering occupational safety, emission monitoring and incident transparency audited internally and externally.",
    icon: HardHat,
    status: "In force",
    downloadHref: "#",
    category: "certification",
  },
  {
    title: "Environment Excellence Award",
    issuer: "Punjab Pollution Control Board",
    body: "Awarded on World Environment Day 2018 for pioneering the recycling of hazardous APCD dust into a resource, at our Fatehgarh Sahib facility.",
    icon: Award,
    status: "Awarded",
    downloadHref: "/documents/environment-excellence-award-2018.pdf",
    category: "award",
  },
  {
    title: "Environment Excellence Award Nomination",
    issuer: "Punjab Pollution Control Board",
    body: "Official nomination letter inviting Madhav Alloy to receive the 2018 Environment Excellence Award for its hazardous-waste recycling initiative.",
    icon: Mail,
    status: "On file",
    downloadHref: "/documents/environment-excellence-award-nomination-2018.jpg",
    thumbnail: "/documents/environment-excellence-award-nomination-2018.jpg",
    category: "award",
  },
  {
    title: "Zinc Extraction Patent",
    issuer: "The Patent Office, Government of India",
    body: "Patent No. 427561 for an improved process to extract zinc from Air Pollution Control Device (APCD) dust, granted for 20 years from July 2017.",
    icon: Lightbulb,
    status: "Granted",
    downloadHref: "/documents/zinc-extraction-patent-427561.pdf",
    category: "certification",
  },
];

export default function CertificationsPageContent({
  data,
}: {
  data?: CertificationsPageData;
}) {
  const hero = data?.hero;
  const intro = data?.intro;

  const certs: CertView[] = data?.certificates?.length
    ? data.certificates.map((c) => ({
        title: c.title ?? "",
        issuer: c.issuer ?? "",
        body: c.body ?? "",
        Icon: iconFromKey(c.icon, ShieldCheck),
        status: c.status ?? undefined,
        downloadHref: c.downloadUrl ?? undefined,
        category: "certification" as const,
      }))
    : CERTS.map((c) => ({
        title: c.title,
        issuer: c.issuer,
        body: c.body,
        Icon: c.icon,
        status: c.status,
        downloadHref: c.downloadHref,
        thumbnail: c.thumbnail,
        category: c.category,
      }));

  const awardDocs = certs.filter((c) => c.category === "award");

  return (
    <main className="bg-beige">
      <PageHero
        eyebrow={str(hero?.eyebrow, "Certifications")}
        heading={str(hero?.heading, "Compliant by design, certified by audit.")}
        intro={str(
          hero?.intro,
          "Independent certifications confirm what our process already enforces. Quality, environment and safety standards aren't a finish line for Madhav KRG Group they are the baseline we operate above.",
        )}
        imageUrl={hero?.imageUrl || "/images/certifications.jpeg"}
        imageAlt={str(hero?.imageAlt, "Madhav KRG Group certifications")}
      />

      {/* Badge grid */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              {str(intro?.eyebrow, "Standards we operate under")}
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              {str(intro?.heading, "Certified, awarded, patented. Same expectation.")}
            </AnimatedHeading>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              {str(
                intro?.body,
                "Quality, environment and safety standards from Indian regulators and international bodies. Every certificate is current and renewed on schedule.",
              )}
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certs.map((c, i) => {
              const Icon = c.Icon;
              return (
                <motion.li
                  key={c.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex h-full flex-col rounded-2xl border border-deep-green/15 bg-beige p-7 transition-colors hover:border-deep-green/40"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    {c.status && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {c.status}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 font-serif text-2xl leading-snug text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                    {c.issuer}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-body">{c.body}</p>
                  {c.downloadHref && (
                    <a
                      href={c.downloadHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-deep-green underline-offset-4 hover:underline"
                    >
                      <Eye className="h-4 w-4" />
                      View certificate
                    </a>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Award document gallery */}
      <section className="bg-beige py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Awards
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Recognition, on record.
            </AnimatedHeading>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              Scanned copies of the awards we&apos;ve received. Full documents are available
              on request for partners, regulators and auditors.
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {awardDocs.map((c, i) => {
              const img =
                c.thumbnail ||
                PLACEHOLDER_IMAGES.certificationsDocs[
                  i % PLACEHOLDER_IMAGES.certificationsDocs.length
                ];
              return (
                <motion.li
                  key={`${c.title}-doc`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-deep-green/10"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={img}
                      alt={`${c.title} certificate`}
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 p-4">
                    <p className="text-sm font-medium text-ink">{c.title}</p>
                    {c.downloadHref && (
                      <a
                        href={c.downloadHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${c.title} certificate`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors hover:bg-accent hover:text-white"
                      >
                        <Eye className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

    </main>
  );
}

