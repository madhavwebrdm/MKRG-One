"use client";

import Image from "next/image";
import Link from "next/link";
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
  ArrowRight,
} from "lucide-react";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import aboutParallax from "@/Images/about paralax.jpeg";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";
import TiltCard from "./TiltCard";

const VALUES = [
  {
    title: "Integrity",
    body: "We act on principle, not expedience — every batch, every audit, every conversation.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    body: "Indian Standards are our floor, not our ceiling. We engineer above the bar.",
    icon: Award,
  },
  {
    title: "Patriotism",
    body: "Building India's green infrastructure is our charge and our privilege.",
    icon: Flag,
  },
  {
    title: "Empowerment",
    body: "Communities and partners grow with us — never around us.",
    icon: Sparkles,
  },
  {
    title: "Humility",
    body: "We listen before we lead. The work is bigger than any one voice.",
    icon: HeartHandshake,
  },
  {
    title: "Unity",
    body: "One team, one direction — across every plant and every shift.",
    icon: Users,
  },
];

const DIFFERENTIATORS = [
  {
    title: "Recycle2X process",
    body: "Two output streams — structural steel and commercial zinc — from a single closed loop. Nothing leaves as landfill.",
    icon: Factory,
  },
  {
    title: "APCD air protection",
    body: "Air Pollution Control Devices capture particulates, keeping emissions well within Indian Standards.",
    icon: Wind,
  },
  {
    title: "Zero contamination output",
    body: "Magnetic separation, shredding and precise grading deliver alloy purity that rivals virgin material.",
    icon: Leaf,
  },
  {
    title: "Indian Standards compliance",
    body: "Every tonne is tested, certified and fully traceable to applicable IS specifications.",
    icon: Gauge,
  },
];

const TIMELINE = [
  {
    year: "1985",
    title: "A founding idea",
    body: "Madhav KRG Group is founded on a single belief — that industrial waste is a resource the country can't afford to throw away.",
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
    body: "Two parallel output streams — steel and zinc — are unified under a single integrated process.",
  },
  {
    year: "2024",
    title: "Renewable transition",
    body: "42% of plant energy now drawn from renewables. The target for 2030 is 75%.",
  },
];

export default function AboutPageContent() {
  return (
    <main className="bg-beige">
      <PageHero
        eyebrow="About us"
        heading="The recycler India can build its future on."
        intro="Madhav KRG Group has spent decades closing the loop — turning end-of-life steel and process waste into materials that meet Indian Standards. We are building our identity as a state-of-the-art recycler so that industry, communities and the planet can grow together."
        imageUrl={PLACEHOLDER_IMAGES.aboutHero}
        imageAlt="MKRG plant operations"
        videoUrl="/videos/about-hero.mp4"
        videoPoster={PLACEHOLDER_IMAGES.aboutHero}
      />

      {/* Mission & Vision */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Purpose
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              A purpose built around the planet.
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
                To provide efficient, responsible recycling solutions that empower
                communities and businesses to minimise their environmental footprint.
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
                Accelerating India&apos;s growth by enabling Green Infrastructure.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="relative isolate overflow-hidden bg-deep-green py-24 text-white sm:py-32"
        style={{
          backgroundImage: `url("${aboutParallax.src}")`,
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
              Values
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Six values. One way of working.
            </AnimatedHeading>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              Integrity · Excellence · Patriotism · Empowerment · Humility · Unity —
              the principles that pre-date every plant, every audit, and every hire.
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
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
              className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl lg:col-span-6"
              data-cursor="grow"
            >
              <Image
                src={PLACEHOLDER_IMAGES.aboutBrand}
                alt="Madhav KRG Group identity"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/90 px-5 py-3.5 backdrop-blur">
                <Sparkles className="h-5 w-5 text-accent" />
                <p className="text-sm font-medium text-ink">
                  Madhav KRG Group — the mother brand for everything we recycle.
                </p>
              </div>
            </motion.div>

            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">
                Brand identity
              </span>
              <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
                One mother brand. Every plant. Every output.
              </AnimatedHeading>
              <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
                Madhav KRG Group is the principal brand under which every recycling,
                refining and manufacturing operation sits. This website is the place we
                are building that identity — as a state-of-the-art recycler trusted by
                industry, regulators and the communities we operate in.
              </p>
              <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
                When a partner buys recycled steel or zinc from any plant in our group,
                the same standards, the same audit trail and the same promise sit behind
                the badge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-gradient-to-b from-[#F0FCF5] via-[#D5F7E4] to-[#A8F0C6] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.2em] text-black">
                Differentiators
              </span>
              <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-black sm:text-4xl lg:text-5xl">
                What sets MKRG apart on the shop floor.
              </AnimatedHeading>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed text-black/80 sm:text-lg">
                Four things show up in every audit, every spec sheet and every customer
                conversation — they are the reason partners choose us over the next bid.
              </p>
            </div>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {DIFFERENTIATORS.map((d, i) => {
              const Icon = d.icon;
              const img =
                PLACEHOLDER_IMAGES.aboutDifferentiators[
                  i % PLACEHOLDER_IMAGES.aboutDifferentiators.length
                ];
              return (
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
                        src={img}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                      <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-accent backdrop-blur">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
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
              );
            })}
          </ul>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-beige py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Our story
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Four decades of closing the loop.
            </AnimatedHeading>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              A short timeline of how Madhav KRG Group grew from a single founding idea
              into one of India&apos;s most integrated recyclers.
            </p>
          </div>

          <ol className="relative mt-14">
            {/* Central / left vertical line */}
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-4 top-0 w-0.5 bg-deep-green/20 sm:left-6 lg:left-1/2 lg:-translate-x-1/2"
            />

            {TIMELINE.map((t, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={t.year}
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

                  {/* Content — left-padded on mobile; alternates on lg+ */}
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

          <motion.div whileHover={{ x: 4 }} className="mt-14 inline-flex">
            <Link
              href="/leadership"
              data-cursor="grow"
              className="inline-flex items-center gap-2 text-sm font-medium text-deep-green underline-offset-4 hover:underline"
            >
              Meet the people behind the work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
