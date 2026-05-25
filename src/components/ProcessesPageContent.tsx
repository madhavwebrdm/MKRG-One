"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Beaker,
  ChevronRight,
  CircleDot,
  Droplets,
  Filter,
  FlaskConical,
  Flame,
  Layers,
  Package,
  Recycle,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Truck,
  Wind,
  Zap,
} from "lucide-react";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";

type Step = { label: string; icon: typeof Truck };

const SCRAP_TO_STEEL: Step[] = [
  { label: "Scrap", icon: Truck },
  { label: "EAC", icon: Flame },
  { label: "LRF", icon: Beaker },
  { label: "Casting", icon: Layers },
  { label: "Quenching", icon: Snowflake },
  { label: "Steel", icon: Package },
];

const WASTE_TO_ZINC: Step[] = [
  { label: "Water Washing", icon: Droplets },
  { label: "Leaching", icon: FlaskConical },
  { label: "Filtration", icon: Filter },
  { label: "Purification", icon: Sparkles },
  { label: "Electrolyzation", icon: Zap },
  { label: "Furnace Melting", icon: Flame },
  { label: "Casting", icon: Layers },
  { label: "Zinc", icon: Package },
];

const ZINC_INPUTS = [
  "Zinc Oxide",
  "Zinc Ferrite",
  "Iron",
  "Lead",
  "Cadmium",
];

const SUBPAGES = [
  {
    title: "Recycling Processes",
    body: "A line-by-line walkthrough of every recycling stream we operate.",
    href: "/processes/recycling-processes",
    icon: Recycle,
  },
  {
    title: "Types of Materials Recycled",
    body: "Steel, zinc, lead and the alloys in between — what comes in and what goes out.",
    href: "/processes/materials",
    icon: Boxes,
  },
  {
    title: "Competitive Advantages",
    body: "Plant technology, automation and the design choices that set our output apart.",
    href: "/processes/advantages",
    icon: ShieldCheck,
  },
];

type Accent = "deep" | "brand";

const ACCENT: Record<
  Accent,
  { ring: string; iconBg: string; iconText: string; chevron: string }
> = {
  deep: {
    ring: "ring-deep-green/10",
    iconBg: "bg-deep-green/10",
    iconText: "text-deep-green",
    chevron: "text-deep-green/50",
  },
  brand: {
    ring: "ring-brand-green/15",
    iconBg: "bg-brand-green/15",
    iconText: "text-brand-green",
    chevron: "text-brand-green/50",
  },
};

function FlowStrip({ steps, accent = "deep" }: { steps: Step[]; accent?: Accent }) {
  const a = ACCENT[accent];
  return (
    <div className="overflow-x-auto pb-2">
      <ol className="flex min-w-max items-center gap-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const isLast = i === steps.length - 1;
          return (
            <li key={s.label} className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`flex w-[150px] flex-col items-center gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ${a.ring}`}
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${a.iconBg} ${a.iconText}`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-center text-sm font-medium text-ink">
                  {s.label}
                </span>
              </motion.div>
              {!isLast && (
                <ChevronRight className={`h-5 w-5 shrink-0 ${a.chevron}`} aria-hidden />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function ProcessesPageContent() {
  return (
    <main className="bg-beige">
      <PageHero
        eyebrow="Processes"
        heading="The Recycle2X Process."
        intro="Two output streams from one closed loop. Industrial scrap becomes structural steel; the hazardous waste that steel-making would otherwise send to landfill becomes commercial zinc. Air Pollution Control Devices keep the airborne stream well within Indian Standards."
        imageUrl={PLACEHOLDER_IMAGES.processesHero}
        imageAlt="Recycle2X plant"
      />

      {/* Process 1: Scrap to Steel */}
      <section className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-deep-green/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-deep-green">
              <CircleDot className="h-3.5 w-3.5" />
              Process 1
            </span>
            <AnimatedHeading className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Scrap to Steel.
            </AnimatedHeading>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
              End-of-life steel and process scrap re-enters the furnace, returns to
              molten form, and ships out as Indian Standard certified billets and coils
              — virtually identical to virgin material at a fraction of the cost to the
              planet.
            </p>
          </div>

          <div className="mt-12">
            <FlowStrip steps={SCRAP_TO_STEEL} />
          </div>

          {/* APCD callout */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 grid grid-cols-1 gap-8 overflow-hidden rounded-2xl bg-deep-green text-white lg:grid-cols-12"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:col-span-5 lg:aspect-auto">
              <Image
                src={PLACEHOLDER_IMAGES.apcdAccent}
                alt="Air Pollution Control Device"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/60 via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 sm:p-10 lg:col-span-7">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white">
                <Wind className="h-3.5 w-3.5" />
                APCD callout
              </span>
              <h3 className="font-serif text-2xl leading-snug text-white sm:text-3xl">
                Protecting air, by not letting hazardous waste escape the facility.
              </h3>
              <p className="text-base leading-relaxed text-white/85">
                Air Pollution Control Devices sit on every stack. Particulates are
                captured at source; what passes through is well within IS thresholds. The
                dust collected is not a problem — it becomes the input for Process 2.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Process 2: Waste to Zinc */}
      <section className="bg-beige py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-green/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brand-green">
              <CircleDot className="h-3.5 w-3.5" />
              Process 2
            </span>
            <AnimatedHeading className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Waste to Zinc.
            </AnimatedHeading>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
              Hazardous flue dust from electric-arc furnaces — Zinc Oxide, Zinc Ferrite,
              Iron, Lead and Cadmium particles — is washed, leached, purified and cast
              into commercial-grade zinc. The iron extracted along the way is fed back
              into steel-making.
            </p>
          </div>

          {/* Inputs */}
          <div className="mt-10 rounded-2xl border border-deep-green/15 bg-white p-7 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-deep-green">
              Input: EAC waste particles
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {ZINC_INPUTS.map((input) => (
                <li
                  key={input}
                  className="inline-flex items-center gap-2 rounded-full bg-deep-green/8 px-3.5 py-1.5 text-sm font-medium text-ink ring-1 ring-deep-green/15"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" aria-hidden />
                  {input}
                </li>
              ))}
            </ul>
          </div>

          {/* Flow */}
          <div className="mt-10">
            <FlowStrip steps={WASTE_TO_ZINC} accent="brand" />
          </div>

          {/* Zero waste loop */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-deep-green/15 bg-white p-7 sm:flex-row sm:items-center sm:p-8"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-deep-green/10 text-deep-green">
              <Recycle className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-deep-green">
                Zero waste loop
              </p>
              <p className="mt-1 font-serif text-xl leading-snug text-ink sm:text-2xl">
                Iron pulled from this stream is returned to steel-making — nothing leaves
                the facility as landfill.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key message pull-quote */}
      <section className="relative isolate overflow-hidden bg-deep-green py-24 text-white sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-10 lg:px-16">
          <Sparkles className="mx-auto h-7 w-7 text-white/60" aria-hidden />
          <AnimatedHeading className="mt-6 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            This entire process turns hazardous waste into high-quality zinc — reusable,
            traceable and in high demand across industry.
          </AnimatedHeading>
        </div>
      </section>

      {/* Sub-pages */}
      <section className="bg-gradient-to-b from-[#F0FCF5] via-[#D5F7E4] to-[#A8F0C6] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-black">
              Go deeper
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-black sm:text-4xl lg:text-5xl">
              The process, in three parts.
            </AnimatedHeading>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {SUBPAGES.map((s, i) => {
              const Icon = s.icon;
              const img =
                PLACEHOLDER_IMAGES.processesSubpages[
                  i % PLACEHOLDER_IMAGES.processesSubpages.length
                ];
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={s.href}
                    data-cursor="grow"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-xl"
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
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-serif text-xl leading-snug text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-body">
                        {s.body}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-deep-green underline-offset-4 group-hover:underline">
                        Read more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
