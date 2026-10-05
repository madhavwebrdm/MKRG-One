"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Boxes,
  CheckCircle2,
  Droplets,
  Factory,
  FlaskConical,
  Recycle,
  ShieldCheck,
  Sprout,
  Target,
  Truck,
  Wind,
} from "lucide-react";

import { iconFromKey } from "@/lib/icons";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";
import TiltCard from "./TiltCard";

const str = (v: string | null | undefined, fallback: string): string =>
  v && v.trim() ? v : fallback;

const paragraphs = (v: string | null | undefined, fallback: string[]): string[] => {
  if (!v || !v.trim()) return fallback;
  return v.split("\n").map((p) => p.trim()).filter(Boolean);
};

export type ProjectsPageData = {
  hero?:
    | { eyebrow?: string | null; heading?: string | null; intro?: string | null; imageUrl?: string | null; imageAlt?: string | null }
    | null;
  highlights?:
    | { eyebrow?: string | null; heading?: string | null; items?: Array<{ title?: string | null; icon?: string | null }> | null }
    | null;
  overview?:
    | { eyebrow?: string | null; heading?: string | null; body?: string | null; imageUrl?: string | null; imageAlt?: string | null }
    | null;
  challenge?:
    | {
        eyebrow?: string | null;
        heading?: string | null;
        body?: string | null;
        backgroundImageUrl?: string | null;
        backgroundImageAlt?: string | null;
      }
    | null;
  timeline?:
    | {
        eyebrow?: string | null;
        heading?: string | null;
        intro?: string | null;
        entries?: Array<{ year?: string | null; title?: string | null; body?: string | null }> | null;
      }
    | null;
  process?:
    | {
        eyebrow?: string | null;
        heading?: string | null;
        intro?: string | null;
        steps?: Array<{ title?: string | null; body?: string | null; icon?: string | null }> | null;
        capacityStats?: Array<{ value?: string | null; label?: string | null }> | null;
      }
    | null;
  impact?:
    | {
        eyebrow?: string | null;
        heading?: string | null;
        intro?: string | null;
        achievements?: string[] | null;
        imageUrl?: string | null;
        imageAlt?: string | null;
      }
    | null;
  circularEconomy?:
    | { eyebrow?: string | null; heading?: string | null; intro?: string | null; items?: Array<{ title?: string | null; icon?: string | null }> | null }
    | null;
  stats?:
    | {
        eyebrow?: string | null;
        heading?: string | null;
        intro?: string | null;
        items?: Array<{ value?: number | null; suffix?: string | null; label?: string | null; note?: string | null }> | null;
      }
    | null;
  partnership?: { eyebrow?: string | null; heading?: string | null; body?: string | null } | null;
  futureVision?: { eyebrow?: string | null; heading?: string | null; body?: string | null } | null;
} | null;

const HIGHLIGHTS = [
  { title: "Processing hazardous industrial waste responsibly", icon: ShieldCheck },
  { title: "Recovery of valuable metals from APCD dust", icon: Recycle },
  { title: "Supporting cleaner steel production practices", icon: Factory },
  { title: "Promoting circular economy principles", icon: Sprout },
];

const OVERVIEW_PARAGRAPHS = [
  "Mandi Gobindgarh, popularly known as the Steel City of India, is one of the largest hubs for recycled steel production. With numerous induction furnace units operating in the region, the steel industry generates significant quantities of flue gas cleaning residue, commonly known as APCD dust.",
  "This dust contains valuable metals along with hazardous elements such as zinc, iron, lead, cadmium, fluoride and chloride. If not managed properly, these materials can pose risks to the environment and surrounding communities.",
  "To address this challenge, an innovative approach was developed to collect, process and recycle APCD dust while recovering valuable resources.",
];

const CHALLENGE_PARAGRAPHS = [
  "Before the implementation of advanced pollution control systems, a considerable amount of APCD dust generated during steel production was released into the environment.",
  "With improved Air Pollution Control Devices, including side hood suction systems and pulse jet bag filters, dust collection increased significantly. While this helped reduce air pollution, it also created a need for safe and sustainable disposal solutions.",
  "The Waste Recycling Division was established to transform this hazardous waste into a valuable resource by extracting zinc and other recoverable materials.",
];

const TIMELINE = [
  {
    year: "March 2015",
    title: "Installation begins",
    body: "Project installation work started for the MAPL Waste Recycling Division plant.",
  },
  {
    year: "October 2015",
    title: "Plant installation completed",
    body: "Plant installation was completed, readying the facility for process trials.",
  },
  {
    year: "2015–2016",
    title: "R&D and process validation",
    body: "Continuous research and development were carried out to overcome technology challenges and achieve desired processing parameters.",
  },
  {
    year: "November 2016",
    title: "Commercial production begins",
    body: "Commercial production began after successful technology validation.",
  },
  {
    year: "2017 onwards",
    title: "Regional expansion",
    body: "Collection of APCD dust expanded from induction furnace units across Punjab.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Collection of APCD Dust",
    body: "Dust generated from steel manufacturing units is collected through improved pollution control systems.",
    icon: Truck,
  },
  {
    title: "Transportation & Processing",
    body: "Collected material is transported and processed at the Waste Recycling Division facility.",
    icon: Boxes,
  },
  {
    title: "Metal Recovery",
    body: "Advanced processing methods are used to extract zinc and other valuable materials from industrial waste.",
    icon: FlaskConical,
  },
  {
    title: "Resource Reuse",
    body: "Recovered metals are returned into the industrial supply chain, reducing dependency on virgin resources.",
    icon: Recycle,
  },
];

const CAPACITY_STATS = [
  { value: "10 MT/day", label: "APCD Dust Processing Capacity" },
  { value: "5 MT/day", label: "Zinc Extraction Capacity" },
];

const ACHIEVEMENTS = [
  "Reduced dependency on hazardous waste landfill disposal",
  "Enabled responsible processing of APCD dust",
  "Supported recovery of valuable metals from waste",
  "Helped industries move towards cleaner production practices",
];

const CIRCULAR_ITEMS = [
  { title: "Sustainable manufacturing", icon: Factory },
  { title: "Resource conservation", icon: Droplets },
  { title: "Reduced environmental burden", icon: Wind },
  { title: "Responsible industrial growth", icon: Target },
];

const STATS = [
  {
    value: 140,
    suffix: "+",
    label: "Industries Associated",
    note: "Induction furnace units partnered for APCD dust collection and recycling.",
  },
  {
    value: 5000,
    suffix: "+ MT",
    label: "APCD Dust Processed",
    note: "Waste material collected and diverted from disposal sites.",
  },
  {
    value: 2140,
    suffix: " MT",
    label: "Zinc Recovered",
    note: "Valuable zinc extracted from industrial waste.",
  },
  {
    value: 300,
    suffix: " MT/Month",
    label: "Waste Utilization Capacity",
    note: "Current APCD dust processing capability.",
  },
];

function ImpactStats({
  eyebrow,
  heading,
  intro,
  items,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
  items: Array<{ value: number; suffix: string; label: string; note: string }>;
}) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".projects-stats-head > :not(h2)", {
        scrollTrigger: { trigger: root.current, start: "top 75%" },
        y: 16,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power3.out",
      });

      const numbers = root.current?.querySelectorAll<HTMLElement>(".projects-stat-number");
      numbers?.forEach((el) => {
        const target = Number(el.dataset.target ?? "0");
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toLocaleString("en-IN");
          },
        });
      });

      gsap.from(".projects-stat-card", {
        scrollTrigger: { trigger: root.current, start: "top 70%" },
        y: 16,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power3.out",
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-deep-green py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="projects-stats-head max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-white/80">
            {eyebrow}
          </span>
          <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            {heading}
          </AnimatedHeading>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
            {intro}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <div
              key={i}
              className="projects-stat-card flex flex-col gap-2 bg-deep-green/60 p-7 backdrop-blur"
            >
              <div className="flex items-baseline gap-1 font-serif text-4xl tracking-tight text-white sm:text-5xl">
                <span className="projects-stat-number" data-target={s.value}>
                  0
                </span>
                <span className="text-xl text-white/80 sm:text-2xl">{s.suffix}</span>
              </div>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-white/90">
                {s.label}
              </p>
              {s.note && <p className="text-sm text-white/70">{s.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProjectsPageContent({ data }: { data?: ProjectsPageData }) {
  const hero = data?.hero;
  const highlights = data?.highlights;
  const overview = data?.overview;
  const challenge = data?.challenge;
  const timeline = data?.timeline;
  const process = data?.process;
  const impact = data?.impact;
  const circularEconomy = data?.circularEconomy;
  const stats = data?.stats;
  const partnership = data?.partnership;
  const futureVision = data?.futureVision;

  const highlightItems = highlights?.items?.length
    ? highlights.items.map((h) => ({
        title: h.title ?? "",
        Icon: iconFromKey(h.icon, ShieldCheck),
      }))
    : HIGHLIGHTS.map((h) => ({ title: h.title, Icon: h.icon }));

  const overviewParagraphs = paragraphs(overview?.body, OVERVIEW_PARAGRAPHS);
  const challengeParagraphs = paragraphs(challenge?.body, CHALLENGE_PARAGRAPHS);

  const timelineEntries = timeline?.entries?.length
    ? timeline.entries.map((t) => ({ year: t.year ?? "", title: t.title ?? "", body: t.body ?? "" }))
    : TIMELINE;

  const processSteps = process?.steps?.length
    ? process.steps.map((p) => ({
        title: p.title ?? "",
        body: p.body ?? "",
        Icon: iconFromKey(p.icon, Truck),
      }))
    : PROCESS_STEPS.map((p) => ({ title: p.title, body: p.body, Icon: p.icon }));

  const capacityStats = process?.capacityStats?.length
    ? process.capacityStats.map((s) => ({ value: s.value ?? "", label: s.label ?? "" }))
    : CAPACITY_STATS;

  const achievements = impact?.achievements?.length ? impact.achievements : ACHIEVEMENTS;

  const circularItems = circularEconomy?.items?.length
    ? circularEconomy.items.map((c) => ({
        title: c.title ?? "",
        Icon: iconFromKey(c.icon, Factory),
      }))
    : CIRCULAR_ITEMS.map((c) => ({ title: c.title, Icon: c.icon }));

  const statItems = stats?.items?.length
    ? stats.items.map((s) => ({
        value: s.value ?? 0,
        suffix: s.suffix ?? "",
        label: s.label ?? "",
        note: s.note ?? "",
      }))
    : STATS;

  return (
    <main className="bg-mint">
      <PageHero
        eyebrow={str(hero?.eyebrow, "Projects")}
        heading={str(hero?.heading, "Transforming Hazardous Waste into Valuable Resources")}
        intro={str(
          hero?.intro,
          "Madhav Alloys Pvt. Ltd. (Waste Recycling Division) has developed a unique waste recovery solution to process hazardous APCD dust generated from steel industries and recover valuable metals like zinc. The initiative supports cleaner industrial operations while reducing environmental impact through responsible waste management.",
        )}
        imageUrl={hero?.imageUrl || PLACEHOLDER_IMAGES.projects.hero}
        imageAlt={str(hero?.imageAlt, "Zinc feedstock at the Waste Recycling Division plant")}
      />

      {/* Key highlights */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              {str(highlights?.eyebrow, "Waste Recycling Division")}
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              {str(highlights?.heading, "Converting Industrial Waste into Sustainable Resources")}
            </AnimatedHeading>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlightItems.map((h, i) => {
              const Icon = h.Icon;
              return (
                <motion.li
                  key={h.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="flex h-full flex-col rounded-2xl border border-forest/15 bg-mint p-7 transition-colors hover:border-forest/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-ink">{h.title}</p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* About the project */}
      <section className="bg-mint py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl lg:col-span-5"
            >
              <Image
                src={overview?.imageUrl || PLACEHOLDER_IMAGES.projects.overview}
                alt={str(overview?.imageAlt, "Waste Recycling Division processing facility")}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-110"
              />
            </motion.div>

            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">
                {str(overview?.eyebrow, "About the project")}
              </span>
              <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
                {str(overview?.heading, "Addressing industrial waste challenges in Mandi Gobindgarh.")}
              </AnimatedHeading>
              {overviewParagraphs.map((p, i) => (
                <p
                  key={i}
                  className={`text-base leading-relaxed text-body sm:text-lg ${i === 0 ? "mt-6" : "mt-4"}`}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The need for sustainable waste management */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10 lg:px-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            {str(challenge?.eyebrow, "The need for sustainable waste management")}
          </span>
          <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            {str(challenge?.heading, "Converting pollution challenges into resource opportunities.")}
          </AnimatedHeading>
          {challengeParagraphs.map((p, i) => (
            <p key={i} className={`text-base leading-relaxed text-body sm:text-lg ${i === 0 ? "mt-6" : "mt-4"}`}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Project development journey / timeline */}
      <section className="bg-mint py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              {str(timeline?.eyebrow, "Project timeline")}
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              {str(timeline?.heading, "Building a model waste recycling facility.")}
            </AnimatedHeading>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              {str(
                timeline?.intro,
                "The project was developed through continuous research, innovation and process improvement.",
              )}
            </p>
          </div>

          <ol className="relative mt-14">
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-4 top-0 w-0.5 bg-forest/20 sm:left-6 lg:left-1/2 lg:-translate-x-1/2"
            />

            {timelineEntries.map((t, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={`${t.year}-${i}`}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 12 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pb-14 last:pb-0 lg:grid lg:grid-cols-2 lg:gap-x-16"
                >
                  <span
                    aria-hidden
                    className="absolute left-4 top-2 inline-flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-forest ring-4 ring-mint sm:left-6 lg:left-1/2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>

                  <div
                    className={`pl-12 sm:pl-16 lg:pl-0 ${
                      isLeft ? "lg:col-start-1 lg:pr-12 lg:text-right" : "lg:col-start-2 lg:pl-12 lg:text-left"
                    }`}
                  >
                    <p className="font-serif text-2xl text-accent sm:text-3xl">{t.year}</p>
                    <h3 className="mt-2 font-serif text-2xl leading-snug text-ink">{t.title}</h3>
                    <p
                      className={`mt-3 text-base leading-relaxed text-body ${isLeft ? "lg:ml-auto" : ""} lg:max-w-md`}
                    >
                      {t.body}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Technology & process */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              {str(process?.eyebrow, "Technology & process")}
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              {str(process?.heading, "Advanced APCD dust recycling process.")}
            </AnimatedHeading>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              {str(
                process?.intro,
                "The facility uses specialised technology to process APCD dust collected from induction furnace units and recover valuable zinc content.",
              )}
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p, i) => {
              const Icon = p.Icon;
              return (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                >
                  <TiltCard className="h-full rounded-2xl border border-forest/15 bg-mint p-7 transition-colors hover:border-forest/40">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-5 font-serif text-xl leading-snug text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">{p.body}</p>
                  </TiltCard>
                </motion.li>
              );
            })}
          </ul>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {capacityStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl bg-forest/5 p-8 text-center"
              >
                <p className="font-serif text-4xl text-forest sm:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-muted">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental impact */}
      <section className="bg-mint py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">
                {str(impact?.eyebrow, "Environmental impact")}
              </span>
              <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
                {str(impact?.heading, "Supporting cleaner industrial growth.")}
              </AnimatedHeading>
              <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
                {str(
                  impact?.intro,
                  "The project has played an important role in reducing the environmental impact of steel industry waste in the Mandi Gobindgarh region.",
                )}
              </p>
              <ul className="mt-8 space-y-4">
                {achievements.map((a, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent" aria-hidden />
                    <span className="text-base leading-relaxed text-body">{a}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl lg:col-span-5"
            >
              <Image
                src={impact?.imageUrl || PLACEHOLDER_IMAGES.projects.impact}
                alt={str(impact?.imageAlt, "Recovered zinc ingots, 99.9% purity")}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-110"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Circular economy contribution */}
      <section className="bg-mint py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-black">
              {str(circularEconomy?.eyebrow, "Circular economy")}
            </span>
            <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-black sm:text-4xl lg:text-5xl">
              {str(circularEconomy?.heading, "Our contribution to the circular economy.")}
            </AnimatedHeading>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/80 sm:text-lg">
              {str(
                circularEconomy?.intro,
                "Instead of treating APCD dust as waste, the project focuses on recovering resources and creating economic value through recycling. By converting hazardous industrial residue into reusable materials, the initiative supports:",
              )}
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {circularItems.map((c, i) => {
              const Icon = c.Icon;
              return (
                <motion.li
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                >
                  <TiltCard className="h-full rounded-2xl border border-black/10 bg-white/60 p-7 backdrop-blur transition-colors hover:border-black/25">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-forest">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-5 font-serif text-xl leading-snug text-ink">{c.title}</h3>
                  </TiltCard>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Impact statistics */}
      <ImpactStats
        eyebrow={str(stats?.eyebrow, "Impact statistics")}
        heading={str(stats?.heading, "Results the numbers back up.")}
        intro={str(
          stats?.intro,
          "Since commercial production began, the Waste Recycling Division has scaled steadily alongside the induction furnace units it partners with.",
        )}
        items={statItems}
      />

      {/* Partnership with industries */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10 lg:px-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            {str(partnership?.eyebrow, "Partnership with industries")}
          </span>
          <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            {str(partnership?.heading, "Supporting steel industries through sustainable solutions.")}
          </AnimatedHeading>
          {paragraphs(partnership?.body, [
            "The Waste Recycling Division works closely with induction furnace units across Punjab by providing a reliable solution for APCD dust management.",
            "Through collection, transportation and recycling services, industries can reduce disposal challenges while contributing to environmentally responsible steel production.",
          ]).map((p, i) => (
            <p key={i} className={`text-base leading-relaxed text-body sm:text-lg ${i === 0 ? "mt-6" : "mt-4"}`}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Future vision */}
      <section className="bg-mint py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10 lg:px-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            {str(futureVision?.eyebrow, "Future vision")}
          </span>
          <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            {str(futureVision?.heading, "Building a cleaner industrial ecosystem.")}
          </AnimatedHeading>
          <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
            {str(
              futureVision?.body,
              "The project continues to focus on improving recycling technology, increasing resource recovery and supporting industries in adopting sustainable waste management practices. Through innovation and collaboration, the initiative aims to contribute towards a cleaner and more sustainable industrial future.",
            )}
          </p>
        </div>
      </section>
    </main>
  );
}
