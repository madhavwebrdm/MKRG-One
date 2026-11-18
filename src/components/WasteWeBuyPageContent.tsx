"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Recycle } from "lucide-react";

import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";

const str = (v: string | null | undefined, fallback: string): string =>
  v && v.trim() ? v : fallback;

const EASE = [0.16, 1, 0.3, 1] as const;

type Material = { name: string; description: string; imageUrl?: string | null; imageAlt?: string | null };

export type WasteWeBuyPageData = {
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
  intro?: { eyebrow?: string | null; heading?: string | null; body?: string | null } | null;
  materials?: Array<{
    name?: string | null;
    description?: string | null;
    imageUrl?: string | null;
    imageAlt?: string | null;
  }> | null;
  cta?:
    | { heading?: string | null; body?: string | null; buttonLabel?: string | null; buttonHref?: string | null }
    | null;
} | null;

/* Built-in content (also seeded into Sanity). Material list as supplied by the client. */
const DEFAULTS = {
  hero: {
    eyebrow: "Waste We Buy",
    heading: "Industrial waste we buy.",
    intro:
      "We buy metal-bearing dust and powder from industry and recycle it responsibly, keeping hazardous waste out of landfill and putting valuable metal back to work.",
    image: "/images/apcd-dust-recycle.jpg",
    imageAlt: "APCD dust and pellets ready for recycling",
  },
  intro: {
    eyebrow: "What we accept",
    heading: "Turn your industrial dust into value.",
    body: "If your operation generates any of the materials below, we can collect and recycle it under the required approvals, with every load tracked from your plant to ours.",
  },
  materials: [
    {
      name: "Bag House Powder",
      description: "Fine dust captured by bag house filters in furnaces and air pollution control systems.",
    },
    {
      name: "Lead Dust",
      description: "Lead-bearing dust generated during smelting, refining and other industrial processes.",
    },
    {
      name: "Lead Flue Dust",
      description: "Dust carried in furnace flue gases and collected by air pollution control equipment.",
    },
    {
      name: "Powder",
      description: "Other metal-bearing powders from industrial processes. Share the details of your material with us.",
    },
  ] as Material[],
  cta: {
    heading: "Have one of these materials?",
    body: "Tell us what you have, how much and where it is. Our team will get back to you with the next steps.",
    buttonLabel: "Get in touch",
    buttonHref: "/contact",
  },
};

export default function WasteWeBuyPageContent({ data }: { data?: WasteWeBuyPageData }) {
  const hero = data?.hero;
  const intro = data?.intro;
  const cta = data?.cta;
  const materials: Material[] = data?.materials?.length
    ? data.materials.map((m) => ({
        name: m.name ?? "",
        description: m.description ?? "",
        imageUrl: m.imageUrl,
        imageAlt: m.imageAlt,
      }))
    : DEFAULTS.materials;

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
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            {str(intro?.eyebrow, DEFAULTS.intro.eyebrow)}
          </span>
          <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            {str(intro?.heading, DEFAULTS.intro.heading)}
          </AnimatedHeading>
          <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
            {str(intro?.body, DEFAULTS.intro.body)}
          </p>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-mint py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((m, i) => (
              <motion.li
                key={`${m.name}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
                className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-forest/10"
              >
                {m.imageUrl ? (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={m.imageUrl}
                      alt={m.imageAlt || m.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="px-6 pt-6">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-deep-green">
                      <Recycle className="h-6 w-6" />
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl leading-snug text-ink">{m.name}</h3>
                  {m.description && (
                    <p className="mt-2 text-sm leading-relaxed text-body">{m.description}</p>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
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
