"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Compass,
  Factory,
  Flag,
  Gauge,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wind,
} from "lucide-react";

import { iconFromKey } from "@/lib/icons";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";
import TiltCard from "./TiltCard";

const str = (v: string | null | undefined, fallback: string): string =>
  v && v.trim() ? v : fallback;

type Block = { children?: Array<{ text?: string | null }> | null };
const blockText = (block: Block): string =>
  (block.children ?? []).map((c) => c.text ?? "").join("");

export type AboutPageData = {
  hero?:
    | { eyebrow?: string | null; heading?: string | null; intro?: string | null; imageUrl?: string | null; imageAlt?: string | null }
    | null;
  purpose?:
    | { eyebrow?: string | null; heading?: string | null; mission?: string | null; vision?: string | null }
    | null;
  sustainabilityStatement?: { heading?: string | null; body?: string | null } | null;
  values?:
    | {
        eyebrow?: string | null;
        heading?: string | null;
        intro?: string | null;
        items?: Array<{ title?: string | null; body?: string | null; icon?: string | null }> | null;
      }
    | null;
  brandIdentity?:
    | {
        eyebrow?: string | null;
        heading?: string | null;
        body?: Block[] | null;
        imageUrl?: string | null;
        imageAlt?: string | null;
        caption?: string | null;
      }
    | null;
  differentiators?:
    | {
        eyebrow?: string | null;
        heading?: string | null;
        intro?: string | null;
        items?:
          | Array<{
              title?: string | null;
              body?: string | null;
              icon?: string | null;
              imageUrl?: string | null;
              imageAlt?: string | null;
            }>
          | null;
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
} | null;

const VALUES = [
  {
    title: "Integrity",
    body: "We act on principle, not expedience every batch, every audit, every conversation.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    body: "International Standards are our floor, not our ceiling. We engineer above the bar.",
    icon: Award,
  },
  {
    title: "Patriotism",
    body: "Building India's green infrastructure is our charge and our privilege.",
    icon: Flag,
  },
  {
    title: "Empowerment",
    body: "Communities and partners grow with us never around us.",
    icon: Sparkles,
  },
  {
    title: "Humility",
    body: "We listen before we lead. The work is bigger than any one voice.",
    icon: HeartHandshake,
  },
  {
    title: "Unity",
    body: "One team, one direction across every plant and every shift.",
    icon: Users,
  },
];

const DEFAULT_BRAND_PARAGRAPHS = [
  "Madhav KRG Group is the principal brand under which every recycling, refining and manufacturing operation sits. This website is the place we are building that identity as a state-of-the-art recycler trusted by industry, regulators and the communities we operate in.",
  "When a partner buys recycled steel or zinc from any plant in our group, the same standards, the same audit trail and the same promise sit behind the badge.",
];

const DIFFERENTIATORS = [
  {
    title: "Recycle2X process",
    body: "Two output streams structural steel and commercial zinc from a single closed loop. Nothing leaves as landfill.",
    icon: Factory,
  },
  {
    title: "APCD air protection",
    body: "Air Pollution Control Devices capture particulates, keeping emissions well within International Standards.",
    icon: Wind,
  },
  {
    title: "Zero contamination output",
    body: "Magnetic separation, shredding and precise grading deliver alloy purity that rivals virgin material.",
    icon: Leaf,
  },
  {
    title: "International Standards compliance",
    body: "Every tonne is tested, certified and fully traceable to applicable international specifications.",
    icon: Gauge,
  },
];

const TIMELINE = [
  {
    year: "1985",
    title: "A founding idea",
    body: "Madhav KRG Group is founded on a single belief that industrial waste is a resource the country can't afford to throw away.",
  },
  {
    year: "1998",
    title: "First steel recycling plant",
    body: "Commissioning of our first dedicated steel recycling facility in Western India sets the template for what comes next.",
  },
  {
    year: "2009",
    title: "Zinc recovery launched",
    body: "We add waste-to-zinc to the process, closing a loop that the industry had long resigned to landfill.",
  },
  {
    year: "2018",
    title: "Recycle2X formalised",
    body: "Two parallel output streams steel and zinc are unified under a single integrated process.",
  },
  {
    year: "2024",
    title: "Renewable transition",
    body: "42% of plant energy now drawn from renewables. The target for 2030 is 75%.",
  },
];

export default function AboutPageContent({ data }: { data?: AboutPageData }) {
  const hero = data?.hero;
  const purpose = data?.purpose;
  const sustainabilityStatement = data?.sustainabilityStatement;
  const values = data?.values;
  const brandIdentity = data?.brandIdentity;
  const differentiators = data?.differentiators;
  const timeline = data?.timeline;

  const valuesItems = values?.items?.length
    ? values.items.map((v) => ({
        title: v.title ?? "",
        body: v.body ?? "",
        Icon: iconFromKey(v.icon, ShieldCheck),
      }))
    : VALUES.map((v) => ({ title: v.title, body: v.body, Icon: v.icon }));

  const brandParagraphs = brandIdentity?.body?.length
    ? brandIdentity.body.map(blockText).filter(Boolean)
    : DEFAULT_BRAND_PARAGRAPHS;

  const differentiatorItems = differentiators?.items?.length
    ? differentiators.items.map((d, i) => ({
        title: d.title ?? "",
        body: d.body ?? "",
        Icon: iconFromKey(d.icon, Factory),
        image:
          d.imageUrl ||
          PLACEHOLDER_IMAGES.aboutDifferentiators[i % PLACEHOLDER_IMAGES.aboutDifferentiators.length],
      }))
    : DIFFERENTIATORS.map((d, i) => ({
        title: d.title,
        body: d.body,
        Icon: d.icon,
        image: PLACEHOLDER_IMAGES.aboutDifferentiators[i % PLACEHOLDER_IMAGES.aboutDifferentiators.length],
      }));

  const timelineEntries = timeline?.entries?.length
    ? timeline.entries.map((t) => ({ year: t.year ?? "", title: t.title ?? "", body: t.body ?? "" }))
    : TIMELINE;

  return (
    <main className="bg-beige">
      <PageHero
        eyebrow={str(hero?.eyebrow, "About us")}
        heading={str(hero?.heading, "The recycler India can build its future on.")}
        intro={str(
          hero?.intro,
          "Madhav KRG Group has spent decades closing the loop turning end-of-life steel and process waste into materials that meet International Standards. We are building our identity as a state-of-the-art recycler so that industry, communities and the planet can grow together.",
        )}
        imageUrl={hero?.imageUrl || PLACEHOLDER_IMAGES.aboutHero}
        imageAlt={str(hero?.imageAlt, "MKRG plant operations")}
        videos={[
          { src: "/videos/about-hero-2.mp4", duration: 5000 },
          { src: "/videos/about-hero.mp4", duration: 5000 },
        ]}
      />

      {/* Mission & Vision */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              {str(purpose?.eyebrow, "Purpose")}
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              {str(purpose?.heading, "A purpose built around the planet.")}
            </AnimatedHeading>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-deep-green/10 sm:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-beige p-8 sm:p-10"
            >
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accent">
                <Target className="h-4 w-4" />
                Mission
              </div>
              <p className="mt-5 font-serif text-2xl leading-snug text-ink">
                {str(
                  purpose?.mission,
                  "To provide efficient, responsible recycling solutions that empower communities and businesses to minimise their environmental footprint.",
                )}
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-beige p-8 sm:p-10"
            >
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-teal">
                <Compass className="h-4 w-4" />
                Vision
              </div>
              <p className="mt-5 font-serif text-2xl leading-snug text-ink">
                {str(purpose?.vision, "Accelerating India's growth by enabling Green Infrastructure.")}
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="relative isolate overflow-hidden bg-deep-green py-24 text-white sm:py-32"
        style={{
          backgroundImage: `url("/images/about-parallax.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-deep-green/70 via-deep-green/55 to-deep-green/75" />
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-white/80">
              {str(values?.eyebrow, "Values")}
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              {str(values?.heading, "Six values. One way of working.")}
            </AnimatedHeading>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              {str(
                values?.intro,
                "Integrity · Excellence · Patriotism · Empowerment · Humility · Unity, the principles that pre-date every plant, every audit, and every hire.",
              )}
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {valuesItems.map((v, i) => {
              const Icon = v.Icon;
              return (
                <motion.li
                  key={v.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <TiltCard className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-colors hover:border-white/30">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-5 font-serif text-2xl text-white">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                      {v.body}
                    </p>
                  </TiltCard>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Brand identity */}
      <section className="bg-beige py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl lg:col-span-5"
              data-cursor="grow"
            >
              <Image
                src={brandIdentity?.imageUrl || PLACEHOLDER_IMAGES.aboutBrand}
                alt={str(brandIdentity?.imageAlt, "Madhav KRG Group identity")}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/90 px-5 py-3.5 backdrop-blur">
                <p className="text-sm font-medium text-ink">
                  {str(brandIdentity?.caption, "Madhav KRG Group, the mother brand for everything we recycle.")}
                </p>
              </div>
            </motion.div>

            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">
                {str(brandIdentity?.eyebrow, "Brand identity")}
              </span>
              <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
                {str(brandIdentity?.heading, "One purpose.\nEvery plant. A greener output.")}
              </AnimatedHeading>
              {brandParagraphs.map((p, i) => (
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

      {/* Differentiators */}
      <section className="bg-gradient-to-b from-[#F0FCF5] via-[#D5F7E4] to-[#A8F0C6] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-black">
              {str(differentiators?.eyebrow, "Differentiators")}
            </span>
            <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-black sm:text-4xl lg:text-5xl">
              {str(differentiators?.heading, "What sets MKRG apart on the shop floor.")}
            </AnimatedHeading>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {differentiatorItems.map((d, i) => (
              <motion.li
                key={d.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard className="group h-full overflow-hidden rounded-2xl bg-white">
                  <div className="relative aspect-[5/3] w-full overflow-hidden">
                    <Image
                      src={d.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-serif text-2xl leading-snug text-ink">
                      {d.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-body">
                      {d.body}
                    </p>
                  </div>
                </TiltCard>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-beige py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              {str(timeline?.eyebrow, "Our story")}
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              {str(timeline?.heading, "Four decades of closing the loop.")}
            </AnimatedHeading>
          </div>

          <ol className="relative mt-14">
            {/* Central / left vertical line */}
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-4 top-0 w-0.5 bg-deep-green/20 sm:left-6 lg:left-1/2 lg:-translate-x-1/2"
            />

            {timelineEntries.map((t, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={`${t.year}-${i}`}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 12 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative pb-14 last:pb-0 lg:grid lg:grid-cols-2 lg:gap-x-16"
                >
                  {/* Dot on the line */}
                  <span
                    aria-hidden
                    className="absolute left-4 top-2 inline-flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-deep-green ring-4 ring-beige sm:left-6 lg:left-1/2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>

                  {/* Content left-padded on mobile; alternates on lg+ */}
                  <div
                    className={`pl-12 sm:pl-16 lg:pl-0 ${
                      isLeft
                        ? "lg:col-start-1 lg:pr-12 lg:text-right"
                        : "lg:col-start-2 lg:pl-12 lg:text-left"
                    }`}
                  >
                    <p className="font-serif text-3xl text-accent">{t.year}</p>
                    <h3 className="mt-2 font-serif text-2xl leading-snug text-ink">
                      {t.title}
                    </h3>
                    <p
                      className={`mt-3 text-base leading-relaxed text-body ${
                        isLeft ? "lg:ml-auto" : ""
                      } lg:max-w-md`}
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

      {/* Sustainability statement */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10 lg:px-16">
          <AnimatedHeading className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            {str(sustainabilityStatement?.heading, "Driving Sustainable Change")}
          </AnimatedHeading>
          <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
            {str(
              sustainabilityStatement?.body,
              "MKESPL contributes to environmental sustainability through its core operations, focused on recycling APCD dust and metal waste. By actively engaging in the recycling process, MKESPL helps reduce waste and minimise the extraction of raw new materials. The company manufactures and trades zinc cathodes and zinc ingots, essential components across various industries, while adhering to strict environmental regulations in its manufacturing processes.",
            )}
          </p>
        </div>
      </section>
    </main>
  );
}
