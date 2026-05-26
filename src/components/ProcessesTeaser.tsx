"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sprout } from "lucide-react";

import processSteel from "@/Images/process-steel.webp";
import processZinc from "@/Images/process-zinc.webp";
import AnimatedHeading from "./AnimatedHeading";

type Step = { title: string; body: string };

type Flow = {
  id: string;
  title: string;
  caption: string;
  image: StaticImageData;
  steps: Step[];
};

const FLOWS: Flow[] = [
  {
    id: "scrap-to-steel",
    title: "Scrap to Steel",
    caption:
      "From raw scrap to finished TMT bars, pipes, and coils — every step optimized.",
    image: processSteel,
    steps: [
      { title: "Scrap Collection", body: "Source ferrous scrap from industrial channels" },
      { title: "Sorting & Grading", body: "Magnetic separation and classification" },
      { title: "Electric Arc Furnace", body: "Melting at 1,800°C with precision" },
      { title: "Continuous Casting", body: "Forming billets consistently" },
      { title: "Rolling & Forming", body: "Thermo-mechanical treatment" },
      { title: "Finished Steel", body: "TMT bars, pipes, and coils" },
    ],
  },
  {
    id: "waste-to-zinc",
    title: "Waste to Zinc",
    caption:
      "Our hydrometallurgical process recovers 99.9% pure zinc from hazardous waste.",
    image: processZinc,
    steps: [
      { title: "Waste Receipt", body: "Secure hazardous waste handling" },
      { title: "Washing & Prep", body: "Remove contaminants" },
      { title: "Acid Leaching", body: "Dissolve zinc content" },
      { title: "Filtration", body: "Purify the solution" },
      { title: "Electrolysis", body: "99.9% pure zinc recovery" },
      { title: "Zinc Sheets", body: "Clean and package" },
    ],
  },
];

type Props = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function ProcessesTeaser({
  eyebrow: eyebrowProp,
  heading: headingProp,
  body: bodyProp,
  ctaLabel: ctaLabelProp,
  ctaHref: ctaHrefProp,
}: Props) {
  const eyebrow = eyebrowProp ?? "Our Process";
  const heading =
    headingProp ?? "From scrap and waste to high-value resources.";
  const body =
    bodyProp ??
    "Two parallel processes, one closed loop. Industrial scrap returns as structural steel; hazardous waste returns as commercial-grade zinc — every step verified and optimized.";
  const ctaLabel = ctaLabelProp ?? "Explore our process";
  const ctaHref = ctaHrefProp ?? "/processes";

  return (
    <section id="processes" className="bg-beige py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Section header */}
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
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

        {/* Flows */}
        {FLOWS.map((flow, fi) => (
          <FlowBlock key={flow.id} flow={flow} index={fi} />
        ))}

        <motion.div whileHover={{ x: 4 }} className="mt-14 inline-flex">
          <Link
            href={ctaHref}
            data-cursor="grow"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function FlowBlock({ flow, index }: { flow: Flow; index: number }) {
  return (
    <div className={`${index === 0 ? "mt-20" : "mt-24"} sm:mt-24`}>
      {/* Per-flow header */}
      <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
            <Sprout className="h-3.5 w-3.5" />
            Process
          </span>
          <h3 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {flow.title}
          </h3>
        </div>
        <div className="lg:col-span-5">
          <p className="text-base leading-relaxed text-body lg:text-right">
            {flow.caption}
          </p>
        </div>
      </div>

      {/* Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-10 overflow-hidden rounded-2xl border border-deep-green/10 bg-white shadow-sm"
      >
        <Image
          src={flow.image}
          alt={`${flow.title} process illustration`}
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="h-auto w-full object-cover"
          priority={index === 0}
        />
      </motion.div>

      {/* Step cards */}
      <ol className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {flow.steps.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.45,
              delay: i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="rounded-2xl border border-deep-green/10 bg-white p-5 shadow-sm"
          >
            <p className="font-serif text-sm text-accent">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h4 className="mt-2 font-serif text-base leading-snug text-ink">
              {s.title}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-body">{s.body}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
