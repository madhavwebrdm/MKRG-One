"use client";

import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Wind, HeartHandshake } from "lucide-react";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import mkrg3 from "@/Images/mkrg (3).jpeg";
import AnimatedHeading from "./AnimatedHeading";

type Highlight = { label: string; value: string };

type Props = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  highlights?: Highlight[];
  ctaLabel?: string;
  ctaHref?: string;
};

const ICONS = [Leaf, Wind, HeartHandshake];
const HIGHLIGHT_IMAGES: Array<string | StaticImageData> = [
  PLACEHOLDER_IMAGES.sustainability1,
  PLACEHOLDER_IMAGES.sustainability2,
  mkrg3,
];

const DEFAULTS: Highlight[] = [
  { label: "Lower emissions", value: "Up to 86% vs virgin steel" },
  { label: "Renewable power", value: "42% of plant energy" },
  { label: "Community programs", value: "EHS & CSR across sites" },
];

export default function SustainabilityTeaser({
  eyebrow: eyebrowProp,
  heading: headingProp,
  body: bodyProp,
  highlights: highlightsProp,
  ctaLabel: ctaLabelProp,
  ctaHref: ctaHrefProp,
}: Props) {
  const eyebrow = eyebrowProp ?? "Sustainability";
  const heading =
    headingProp ?? "Recycling that gives back — to industry and to the planet.";
  const body =
    bodyProp ??
    "Our environmental, health and safety programs run alongside community initiatives in the regions where we operate. Recycling isn't a line item; it is how we build green infrastructure.";
  const highlights = highlightsProp ?? DEFAULTS;
  const ctaLabel = ctaLabelProp ?? "See our impact";
  const ctaHref = ctaHrefProp ?? "/sustainability";
  return (
    <section className="bg-brand-green py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.2em] text-white/80">
              {eyebrow}
            </span>
            <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              {heading}
            </AnimatedHeading>
          </div>
          <div className="lg:col-span-6">
            <p className="text-base leading-relaxed text-white/85 sm:text-lg">
              {body}
            </p>
            <motion.div whileHover={{ x: 4 }} className="mt-6 inline-flex">
              <Link
                href={ctaHref}
                data-cursor="grow"
                className="inline-flex items-center gap-2 text-sm font-medium text-white underline-offset-4 hover:underline"
              >
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {highlights.map((h, i) => {
            const Icon = ICONS[i % ICONS.length];
            const img = HIGHLIGHT_IMAGES[i % HIGHLIGHT_IMAGES.length];
            return (
              <motion.li
                key={`${h.label}-${i}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl bg-deep-green"
                data-cursor="grow"
              >
                <div className="relative aspect-[5/4] w-full overflow-hidden">
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-xs font-medium uppercase tracking-wider text-white">
                    {h.label}
                  </p>
                  <p className="mt-2 font-serif text-2xl leading-snug text-white">
                    {h.value}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
