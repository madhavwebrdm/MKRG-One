"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Target } from "lucide-react";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";

type Props = {
  eyebrow?: string;
  heading?: string;
  mission?: string;
  vision?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageUrl?: string | null;
};

export default function MissionVisionTeaser({
  eyebrow = "About us",
  heading = "A purpose built around the planet.",
  mission = "To provide efficient, responsible recycling solutions that empower communities and businesses to minimise their environmental footprint.",
  vision = "Accelerating India's growth by enabling Green Infrastructure.",
  ctaLabel = "Learn more about us",
  ctaHref = "/about",
  imageUrl,
}: Props) {
  return (
    <section className="bg-beige py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:col-span-5"
            data-cursor="grow"
          >
            <Image
              src={imageUrl || PLACEHOLDER_IMAGES.missionVision}
              alt="MKRG plant"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-1000 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-green/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/85 px-5 py-3.5 backdrop-blur">
              <Compass className="h-5 w-5 text-brand-green" />
              <p className="text-sm font-medium text-ink">
                Building Green Infrastructure across India
              </p>
            </div>
          </motion.div>

          {/* Text column */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.2em] text-deep-green">
              {eyebrow}
            </span>
            <h2 className="mt-3 text-balance font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              {heading}
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-deep-green/10 sm:grid-cols-2">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-beige p-7 sm:p-8"
              >
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-brand-green">
                  <Target className="h-4 w-4" />
                  Mission
                </div>
                <p className="mt-4 font-serif text-xl leading-snug text-ink">
                  {mission}
                </p>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-beige p-7 sm:p-8"
              >
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-teal">
                  <Compass className="h-4 w-4" />
                  Vision
                </div>
                <p className="mt-4 font-serif text-xl leading-snug text-ink">
                  {vision}
                </p>
              </motion.article>
            </div>

            <motion.div whileHover={{ x: 4 }} className="mt-10 inline-flex">
              <Link
                href={ctaHref}
                data-cursor="grow"
                className="inline-flex items-center gap-2 text-sm font-medium text-deep-green underline-offset-4 hover:underline"
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
