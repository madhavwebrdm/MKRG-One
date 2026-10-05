"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import TiltCard from "./TiltCard";
import AnimatedHeading from "./AnimatedHeading";

type Badge = { label: string; issuer: string };

type Props = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  badges?: Badge[];
  ctaLabel?: string;
  ctaHref?: string;
};

const DEFAULTS: Badge[] = [
  { label: "ISO 9001", issuer: "Quality Management System" },
  { label: "Zinc Extraction Patent", issuer: "The Patent Office, Government of India" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function CertificationsTeaser({
  eyebrow: eyebrowProp,
  heading: headingProp,
  body: bodyProp,
  badges: badgesProp,
  ctaLabel: ctaLabelProp,
  ctaHref: ctaHrefProp,
}: Props) {
  const eyebrow = eyebrowProp ?? "Certifications";
  const heading = headingProp ?? "Compliant by design, certified by audit.";
  const body =
    bodyProp ??
    "Independent certifications confirm what our process already enforces. Standards aren't a finish line they are the baseline we operate above.";
  const badges = badgesProp ?? DEFAULTS;
  const ctaLabel = ctaLabelProp ?? "View certifications";
  const ctaHref = ctaHrefProp ?? "/certifications";
  return (
    <section className="bg-mint py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/mkrg-6.jpeg"
                alt="Madhav KRG Group certifications and audits"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/50 via-transparent to-transparent" />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] text-accent backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Audit-ready
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.2em] text-black">
              {eyebrow}
            </span>
            <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-black sm:text-4xl lg:text-5xl">
              {heading}
            </AnimatedHeading>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/80 sm:text-lg">
              {body}
            </p>
          </div>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {badges.map((b, i) => (
            <motion.li key={`${b.label}-${i}`} variants={item}>
              <TiltCard className="group h-full rounded-2xl border border-forest/15 bg-mint p-7 transition-colors hover:border-forest/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                  <ShieldCheck className="h-5 w-5" aria-hidden />
                </div>
                <p className="mt-5 font-serif text-lg text-ink">{b.label}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                  {b.issuer}
                </p>
              </TiltCard>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div whileHover={{ x: 4 }} className="mt-12 inline-flex">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-black underline-offset-4 hover:underline"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

