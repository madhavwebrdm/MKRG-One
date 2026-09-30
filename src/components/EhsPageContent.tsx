"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

import { iconFromKey } from "@/lib/icons";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";

const str = (v: string | null | undefined, fallback: string): string =>
  v && v.trim() ? v : fallback;

type Item = { title: string; body: string; icon?: string | null };

type PillarData = {
  eyebrow?: string | null;
  heading?: string | null;
  intro?: string | null;
  items?: Item[] | null;
};

export type EhsPageData = {
  hero?:
    | { eyebrow?: string | null; heading?: string | null; intro?: string | null; imageUrl?: string | null; imageAlt?: string | null }
    | null;
  overview?: { eyebrow?: string | null; heading?: string | null; body?: string | null } | null;
  environment?: PillarData | null;
  health?: PillarData | null;
  safety?: PillarData | null;
  closingCta?:
    | { heading?: string | null; body?: string | null; primaryLabel?: string | null; primaryHref?: string | null }
    | null;
} | null;

const ENVIRONMENT: Item[] = [
  {
    title: "Air Pollution Control",
    body: "Advanced APCD (Air Pollution Control Device) technology captures fume accumulation at the source.",
    icon: "filter",
  },
  {
    title: "Water Treatment & Reuse",
    body: "ETP, RO and STP systems treat water for reuse across manufacturing operations.",
    icon: "droplets",
  },
  {
    title: "Rainwater Harvesting",
    body: "A water reservoir pond of 13 lac litre capacity collects and stores rainwater on site.",
    icon: "globe-2",
  },
  {
    title: "Green Belt",
    body: "A green belt of herbal trees planted across the plant premises.",
    icon: "tree-pine",
  },
];

const HEALTH: Item[] = [
  {
    title: "Health Camps",
    body: "Regular health camps covering eye check-ups and oral health for the workforce.",
    icon: "heart-handshake",
  },
  {
    title: "Hydration on the Floor",
    body: "ORS and lemon water provided to workers through every shift.",
    icon: "droplets",
  },
  {
    title: "On-Site Medical Lab",
    body: "A well-equipped medical lab is available for employees on campus.",
    icon: "flask-conical",
  },
  {
    title: "Ambulance on Campus",
    body: "An ambulance is available on campus for medical emergencies.",
    icon: "truck",
  },
];

const SAFETY: Item[] = [
  {
    title: "Personal Protective Equipment",
    body: "Safety gear including helmets, masks, safety shoes and glasses issued and enforced on the shop floor.",
    icon: "hard-hat",
  },
  {
    title: "Marked Walkways",
    body: "Clearly marked walkways separate pedestrian movement from operating equipment.",
    icon: "map-pin",
  },
  {
    title: "Regular Safety Training",
    body: "Employees are regularly trained on safe working practices across every shift.",
    icon: "shield-check",
  },
  {
    title: "Violation Penalties",
    body: "A challan (fine) system enforces compliance with safety rules on site.",
    icon: "file-badge",
  },
  {
    title: "Emergency Preparedness",
    body: "Marked emergency exits are maintained across every work area.",
    icon: "flame",
  },
];

function Pillar({
  data,
  fallback,
  fallbackEyebrow,
  fallbackHeading,
  fallbackIntro,
  background,
}: {
  data?: PillarData | null;
  fallback: Item[];
  fallbackEyebrow: string;
  fallbackHeading: string;
  fallbackIntro: string;
  background: "white" | "beige";
}) {
  const items: Item[] = data?.items?.length ? data.items : fallback;

  return (
    <section className={`${background === "white" ? "bg-white" : "bg-beige"} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            {str(data?.eyebrow, fallbackEyebrow)}
          </span>
          <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            {str(data?.heading, fallbackHeading)}
          </AnimatedHeading>
          <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
            {str(data?.intro, fallbackIntro)}
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = iconFromKey(item.icon, ShieldCheck);
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-full flex-col rounded-2xl border border-forest/15 bg-beige p-7 transition-colors hover:border-forest/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-serif text-xl leading-snug text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.body}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default function EhsPageContent({ data }: { data?: EhsPageData }) {
  const hero = data?.hero;
  const ov = data?.overview;
  const cc = data?.closingCta;

  return (
    <main className="bg-beige">
      <PageHero
        eyebrow={str(hero?.eyebrow, "Environment, Health & Safety")}
        heading={str(hero?.heading, "Holistic health comes first at Madhav KRG Group.")}
        intro={str(
          hero?.intro,
          "A healthy product is the result of a healthy environment and a healthy workforce. From daily safety briefings and emission monitoring to occupational-health checks and incident transparency, EHS is how we keep our people and the environment around our plants protected.",
        )}
        imageUrl={hero?.imageUrl || PLACEHOLDER_IMAGES.sustEhs}
        imageAlt={str(hero?.imageAlt, "Madhav KRG Group environment, health and safety")}
      />

      {/* Overview statement */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10 lg:px-16">
          <AnimatedHeading className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            {str(ov?.heading, "Holistic health comes first.")}
          </AnimatedHeading>
          <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
            {str(
              ov?.body,
              "Our EHS department is directly handled by the IQMS and follows procedures compliant with national, international, statutory and regulatory requirements.",
            )}
          </p>
        </div>
      </section>

      <Pillar
        data={data?.environment}
        fallback={ENVIRONMENT}
        fallbackEyebrow="Environment"
        fallbackHeading="Reducing our footprint, plant by plant."
        fallbackIntro="From air pollution control to water reuse and green cover, our environment programs run continuously across every site."
        background="beige"
      />

      <Pillar
        data={data?.health}
        fallback={HEALTH}
        fallbackEyebrow="Health"
        fallbackHeading="Looking after the people behind every shift."
        fallbackIntro="Regular health camps, on-site medical care and everyday wellbeing measures keep our workforce healthy."
        background="white"
      />

      <Pillar
        data={data?.safety}
        fallback={SAFETY}
        fallbackEyebrow="Safety"
        fallbackHeading="Safety built into every shift."
        fallbackIntro="Protective equipment, marked walkways, regular training and strict enforcement keep every work area safe."
        background="beige"
      />

      {/* CTA */}
      <section className="bg-deep-green py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <AnimatedHeading className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                {str(cc?.heading, "Want to know more about our EHS practices?")}
              </AnimatedHeading>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
                {str(
                  cc?.body,
                  "Reach out to our team and we will be glad to share how we manage environment, health and safety across our operations.",
                )}
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Link
                href={str(cc?.primaryHref, "/contact")}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-forest transition-colors hover:bg-light-green"
              >
                {str(cc?.primaryLabel, "Get in touch")}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
