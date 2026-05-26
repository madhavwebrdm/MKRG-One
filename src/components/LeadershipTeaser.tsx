"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

const FOUNDER_PORTRAIT = "https://www.madhavkrggroup.com/images/sudhir-goyal.jpg";

type Props = {
  eyebrow?: string;
  heading?: string;
  quote?: string;
  attribution?: string;
  portraitUrl?: string | null;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function LeadershipTeaser({
  eyebrow: eyebrowProp,
  heading: headingProp,
  quote: quoteProp,
  attribution: attributionProp,
  portraitUrl,
  ctaLabel: ctaLabelProp,
  ctaHref: ctaHrefProp,
}: Props) {
  const eyebrow = eyebrowProp ?? "Leadership";
  const heading =
    headingProp ?? "Built by people who have spent decades closing the loop.";
  const quote =
    quoteProp ??
    "Efficient utilization of Energy and Nature's Resources is the mantra of Madhav KRG Group in achieving our set goals.";
  const attribution = attributionProp ?? "Sudhir Goyal, Managing Director";
  const ctaLabel = ctaLabelProp ?? "Meet the team";
  const ctaHref = ctaHrefProp ?? "/leadership";
  const portrait = portraitUrl || FOUNDER_PORTRAIT;

  return (
    <section className="bg-deep-green py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-brand-green/30"
              data-cursor="grow"
            >
              <Image
                src={portrait}
                alt={attribution}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/90 px-5 py-3.5 backdrop-blur">
                <Quote className="h-5 w-5 text-accent" />
                <p className="text-sm font-medium text-ink">{attribution}</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.2em] text-white">
              {eyebrow}
            </span>
            <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              {heading}
            </AnimatedHeading>

            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 max-w-2xl border-l-2 border-white/40 pl-6"
            >
              <Quote className="h-6 w-6 text-white/70" aria-hidden />
              <blockquote className="mt-4 font-serif text-2xl leading-snug text-white sm:text-3xl">
                “{quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm uppercase tracking-wider text-white/70">
                — {attribution}
              </figcaption>
            </motion.figure>

            <motion.div whileHover={{ x: 4 }} className="mt-10 inline-flex">
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
      </div>
    </section>
  );
}
