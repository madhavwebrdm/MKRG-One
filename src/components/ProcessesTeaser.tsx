"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Truck, Recycle, Factory, Package, ShieldCheck, Boxes } from "lucide-react";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import TiltCard from "./TiltCard";
import AnimatedHeading from "./AnimatedHeading";

type Step = { title: string; body: string };

type Props = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  steps?: Step[];
  ctaLabel?: string;
  ctaHref?: string;
};

const DEFAULTS: Step[] = [
  { title: "Collect", body: "End-of-life steel and process waste arrive from demolition sites, industry and consumers across India." },
  { title: "Sort", body: "Magnetic separation, shredding and precise grading keep alloys pure and furnace-ready." },
  { title: "Scrap → Steel", body: "Electric arc furnaces — increasingly renewable-powered — return scrap to molten form, cast into billets and coils." },
  { title: "Waste → Zinc", body: "Hazardous flue dust is processed into commercial-grade zinc concentrate. Nothing leaves as landfill." },
  { title: "APCD", body: "Air Pollution Control Devices capture particulates, keeping emissions well within Indian Standards." },
  { title: "Return", body: "Certified, low-carbon recycled material ships back to manufacturers — closing the loop." },
];

const ICONS = [Truck, Boxes, Recycle, Factory, ShieldCheck, Package];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ProcessesTeaser({
  eyebrow: eyebrowProp,
  heading: headingProp,
  body: bodyProp,
  steps: stepsProp,
  ctaLabel: ctaLabelProp,
  ctaHref: ctaHrefProp,
}: Props) {
  const eyebrow = eyebrowProp ?? "Processes";
  const heading = headingProp ?? "The Recycle2X Process.";
  const body =
    bodyProp ??
    "Two output streams, one closed loop. We turn industrial scrap into structural steel and convert process waste into commercial zinc — all under strict emissions control.";
  const steps = stepsProp ?? DEFAULTS;
  const ctaLabel = ctaLabelProp ?? "Explore the process";
  const ctaHref = ctaHrefProp ?? "/processes";
  return (
    <section id="processes" className="bg-beige py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.2em] text-deep-green">
              {eyebrow}
            </span>
            <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              {heading}
            </AnimatedHeading>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-body sm:text-lg">
              {body}
            </p>
          </div>
        </div>

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            const img = PLACEHOLDER_IMAGES.processes[i % PLACEHOLDER_IMAGES.processes.length];
            return (
              <motion.li key={`${s.title}-${i}`} variants={item}>
                <TiltCard
                  maxTilt={5}
                  scaleOnHover={1.01}
                  className="group h-full overflow-hidden rounded-2xl border border-deep-green/10 bg-white"
                >
                  <div className="relative aspect-[5/3] w-full overflow-hidden">
                    <Image
                      src={img}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-deep-green backdrop-blur">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <span className="absolute right-5 top-5 font-serif text-2xl text-white drop-shadow">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-serif text-2xl leading-snug text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-body">
                      {s.body}
                    </p>
                  </div>
                </TiltCard>
              </motion.li>
            );
          })}
        </motion.ol>

        <motion.div whileHover={{ x: 4 }} className="mt-12 inline-flex">
          <Link
            href={ctaHref}
            data-cursor="grow"
            className="inline-flex items-center gap-2 text-sm font-medium text-deep-green underline-offset-4 hover:underline"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
