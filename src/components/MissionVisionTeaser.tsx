"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Target } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

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
  eyebrow: eyebrowProp,
  heading: headingProp,
  mission: missionProp,
  vision: visionProp,
  ctaLabel: ctaLabelProp,
  ctaHref: ctaHrefProp,
  imageUrl,
}: Props) {
  const eyebrow = eyebrowProp ?? "About us";
  const heading = headingProp ?? "A purpose built around the planet.";
  const mission =
    missionProp ??
    "To provide efficient, responsible recycling solutions that empower communities and businesses to minimise their environmental footprint.";
  const vision =
    visionProp ?? "Accelerating India's growth by enabling Green Infrastructure.";
  const ctaLabel = ctaLabelProp ?? "Learn more about us";
  const ctaHref = ctaHrefProp ?? "/about";
  return (
    <section className="relative bg-beige py-24 sm:py-32">
      <video
        className="pointer-events-none absolute bottom-0 right-0 mix-blend-multiply"
        style={{ width: "30%", zIndex: 100, paddingBottom: "3%" }}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      >
        <source src="/videos/butterfly-right.mp4" type="video/mp4" />
      </video>
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
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
              src={imageUrl || "/images/mkrg-1.jpeg"}
              alt="Madhav KRG Group operations"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-1000 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-green/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/85 px-5 py-3.5 backdrop-blur">
              <p className="text-sm font-medium text-ink">
                Building Green Infrastructure across India
              </p>
            </div>
          </motion.div>

          {/* Text column */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </span>
            <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              {heading}
            </AnimatedHeading>

            <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-deep-green/10 sm:grid-cols-2">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-beige p-7 sm:p-8"
              >
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accent">
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
                className="inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
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
