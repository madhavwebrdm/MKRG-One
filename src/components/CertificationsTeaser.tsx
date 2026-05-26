"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import mkrg6 from "@/Images/mkrg (6).jpeg";
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
  { label: "ISO 9001 / 14001", issuer: "Quality & Environmental Management" },
  { label: "MOEFCC", issuer: "Ministry of Environment, Forest & Climate Change" },
  { label: "GPCB", issuer: "Gujarat Pollution Control Board" },
  { label: "EHS Program", issuer: "Environment, Health & Safety" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
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
    "Independent certifications confirm what our process already enforces. Standards aren't a finish line — they are the baseline we operate above.";
  const badges = badgesProp ?? DEFAULTS;
  const ctaLabel = ctaLabelProp ?? "View certifications";
  const ctaHref = ctaHrefProp ?? "/certifications";
  return (
    <section className="bg-gradient-to-b from-[#F0FCF5] via-[#D5F7E4] to-[#A8F0C6] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
              data-cursor="grow"
            >
              <Image
                src={mkrg6}
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
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {badges.map((b, i) => (
            <motion.li key={`${b.label}-${i}`} variants={item}>
              <TiltCard className="group h-full rounded-2xl border border-deep-green/15 bg-beige p-7 transition-colors hover:border-deep-green/40">
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
            data-cursor="grow"
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
