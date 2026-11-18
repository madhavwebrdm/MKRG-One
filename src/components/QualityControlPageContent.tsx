"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";

const str = (v: string | null | undefined, fallback: string): string =>
  v && v.trim() ? v : fallback;
const paragraphs = (text: string) => text.split(/\n+/).map((p) => p.trim()).filter(Boolean);

const EASE = [0.16, 1, 0.3, 1] as const;

type Block = { eyebrow?: string | null; heading?: string | null; body?: string | null } | null;

export type QualityControlPageData = {
  hero?:
    | {
        eyebrow?: string | null;
        heading?: string | null;
        intro?: string | null;
        imageUrl?: string | null;
        imageAlt?: string | null;
        videoUrl?: string | null;
      }
    | null;
  intro?: Block;
  commitments?: { eyebrow?: string | null; heading?: string | null; items?: string[] | null } | null;
  testing?: (Block & { imageUrl?: string | null; imageAlt?: string | null }) | null;
  policy?: Block;
  cta?:
    | { heading?: string | null; body?: string | null; buttonLabel?: string | null; buttonHref?: string | null }
    | null;
} | null;

/* Built-in content (also seeded into Sanity). Written for MKESL; confirm lab details with the client. */
const DEFAULTS = {
  hero: {
    eyebrow: "Quality Control",
    heading: "Quality checked at every stage.",
    intro:
      "Every batch of zinc we recover is tested before it leaves the plant, so customers get the purity and consistency they plan around.",
    image: "/images/zinc-recovery.webp",
    imageAlt: "Zinc ingots produced by Madhav KRG Environmental Solution Limited",
  },
  intro: {
    eyebrow: "Our approach",
    heading: "Quality is built into the process, not inspected at the end.",
    body: "From the moment APCD dust arrives at our plant to the moment finished zinc ingots are dispatched, each stage is monitored and checked against our specifications.\nThe result is high-purity zinc that behaves virtually like virgin material and meets the requirements of the industries we supply.",
  },
  commitments: {
    eyebrow: "Our commitments",
    heading: "What we commit to, batch after batch.",
    items: [
      "Customer satisfaction through consistent, high-quality zinc at a fair price.",
      "Steady improvement in productivity across both production lines.",
      "Tight control of waste and losses at every stage of the process.",
      "Meeting each customer's specification and delivering on time.",
      "Cost efficiency that keeps our zinc competitive.",
    ],
  },
  testing: {
    eyebrow: "Testing & laboratory",
    heading: "Tested in our own laboratory.",
    body: "Our in-house laboratory tests material at every stage of production, from incoming APCD dust to the purified zinc solution.\nFinished zinc ingots are analysed using MP-AES (Microwave Plasma Atomic Emission Spectroscopy) to confirm uniform purity before dispatch, and every batch is traceable back to the waste stream it was recovered from.",
    image: "/images/zinc-recovery.webp",
    imageAlt: "Finished zinc ingots ready for quality testing",
  },
  policy: {
    eyebrow: "Quality policy",
    heading: "Meet the requirement, stay cost effective, deliver on time.",
    body: "Our quality policy is simple: meet the customer's requirement, stay cost effective and deliver on time. We want our products and service to be the best in the market and to exceed our customers' expectations.\nTo keep that promise, products are checked at every level of manufacturing, and the finished product goes through a final quality check in the lab before it is released.",
  },
  cta: {
    heading: "Need a test certificate or specification sheet?",
    body: "Talk to our team about grades, test results and certifications for your production line.",
    buttonLabel: "Contact our team",
    buttonHref: "/contact",
  },
};

export default function QualityControlPageContent({ data }: { data?: QualityControlPageData }) {
  const hero = data?.hero;
  const intro = data?.intro;
  const commitments = data?.commitments;
  const testing = data?.testing;
  const policy = data?.policy;
  const cta = data?.cta;
  const commitmentItems = commitments?.items?.length ? commitments.items : DEFAULTS.commitments.items;

  return (
    <main className="bg-mint">
      <PageHero
        eyebrow={str(hero?.eyebrow, DEFAULTS.hero.eyebrow)}
        heading={str(hero?.heading, DEFAULTS.hero.heading)}
        intro={str(hero?.intro, DEFAULTS.hero.intro)}
        imageUrl={hero?.imageUrl || DEFAULTS.hero.image}
        imageAlt={str(hero?.imageAlt, DEFAULTS.hero.imageAlt)}
        videoUrl={hero?.videoUrl ?? undefined}
        videoPoster={hero?.imageUrl || DEFAULTS.hero.image}
      />

      {/* Introduction */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              {str(intro?.eyebrow, DEFAULTS.intro.eyebrow)}
            </span>
            <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              {str(intro?.heading, DEFAULTS.intro.heading)}
            </AnimatedHeading>
          </div>
          <div className="space-y-5 lg:col-span-6 lg:pt-10">
            {paragraphs(str(intro?.body, DEFAULTS.intro.body)).map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-body sm:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-mint py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              {str(commitments?.eyebrow, DEFAULTS.commitments.eyebrow)}
            </span>
            <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              {str(commitments?.heading, DEFAULTS.commitments.heading)}
            </AnimatedHeading>
          </div>
          <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {commitmentItems.map((item, i) => (
              <motion.li
                key={`${item}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
                className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest/10"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-deep-green" />
                <p className="text-base leading-relaxed text-ink">{item}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testing & laboratory */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl lg:col-span-5"
          >
            <Image
              src={testing?.imageUrl || DEFAULTS.testing.image}
              alt={str(testing?.imageAlt, DEFAULTS.testing.imageAlt)}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </motion.div>
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              {str(testing?.eyebrow, DEFAULTS.testing.eyebrow)}
            </span>
            <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              {str(testing?.heading, DEFAULTS.testing.heading)}
            </AnimatedHeading>
            <div className="mt-6 space-y-4">
              {paragraphs(str(testing?.body, DEFAULTS.testing.body)).map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-body sm:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality policy */}
      <section className="bg-mint py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            {str(policy?.eyebrow, DEFAULTS.policy.eyebrow)}
          </span>
          <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            {str(policy?.heading, DEFAULTS.policy.heading)}
          </AnimatedHeading>
          <div className="mt-6 space-y-4">
            {paragraphs(str(policy?.body, DEFAULTS.policy.body)).map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-body sm:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-green py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 sm:px-10 lg:grid-cols-12 lg:px-16">
          <div className="lg:col-span-8">
            <AnimatedHeading className="font-serif text-3xl leading-tight text-white sm:text-4xl">
              {str(cta?.heading, DEFAULTS.cta.heading)}
            </AnimatedHeading>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
              {str(cta?.body, DEFAULTS.cta.body)}
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              href={str(cta?.buttonHref, DEFAULTS.cta.buttonHref)}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-forest shadow-sm transition-colors hover:bg-accent hover:text-white"
            >
              {str(cta?.buttonLabel, DEFAULTS.cta.buttonLabel)}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
