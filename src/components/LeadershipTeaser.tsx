"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";

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
  eyebrow = "Leadership",
  heading = "Built by people who have spent decades closing the loop.",
  quote = "Recycling isn't a side business — it is the only way we can build the infrastructure of tomorrow without exhausting the resources of today.",
  attribution = "Founder, Madhav KRG Group",
  portraitUrl,
  ctaLabel = "Meet the team",
  ctaHref = "/leadership",
}: Props) {
  const portrait = portraitUrl || PLACEHOLDER_IMAGES.leadershipPortrait;

  return (
    <section className="relative isolate overflow-hidden bg-deep-green py-24 text-white sm:py-32">
      <div className="absolute inset-0 -z-10 opacity-30">
        <Image
          src={PLACEHOLDER_IMAGES.leadershipBg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-deep-green via-deep-green/85 to-deep-green/60" />

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
                <Quote className="h-5 w-5 text-brand-green" />
                <p className="text-sm font-medium text-ink">{attribution}</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.2em] text-light-green">
              {eyebrow}
            </span>
            <h2 className="mt-3 text-balance font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              {heading}
            </h2>

            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 max-w-2xl border-l-2 border-light-green/40 pl-6"
            >
              <Quote className="h-6 w-6 text-light-green/70" aria-hidden />
              <blockquote className="mt-4 font-serif text-2xl leading-snug text-light-green sm:text-3xl">
                “{quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm uppercase tracking-wider text-light-green/70">
                — {attribution}
              </figcaption>
            </motion.figure>

            <motion.div whileHover={{ x: 4 }} className="mt-10 inline-flex">
              <Link
                href={ctaHref}
                data-cursor="grow"
                className="inline-flex items-center gap-2 text-sm font-medium text-light-green underline-offset-4 hover:underline"
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
