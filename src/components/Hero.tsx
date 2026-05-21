"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Recycle } from "lucide-react";

import HeroIllustration from "./HeroIllustration";
import MagneticButton from "./MagneticButton";

type HeroProps = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  positioningTags?: string[];
  imageUrl?: string | null;
  imageAlt?: string | null;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

const DEFAULT_TAGS = [
  "Eco-conscious",
  "Reliable",
  "Forward-thinking",
  "Community-driven",
];

export default function Hero({
  eyebrow = "Waste is a Resource, Not a Problem",
  heading = "Waste is a Resource, Not a Problem",
  subheading = "Recycled with zero degradation or contamination, intact properties per Indian Standards — virtually identical to virgin material with lesser environmental impact.",
  positioningTags = DEFAULT_TAGS,
  imageUrl,
  imageAlt,
  primaryCtaLabel = "See our impact",
  primaryCtaHref = "#metrics",
  secondaryCtaLabel = "Our recycling process",
  secondaryCtaHref = "/processes",
}: HeroProps) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { y: 24, opacity: 0, duration: 0.6 })
        .from(
          ".hero-word",
          { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.06 },
          "-=0.3",
        )
        .from(".hero-sub", { y: 16, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(
          ".hero-tag",
          { y: 12, opacity: 0, duration: 0.5, stagger: 0.08 },
          "-=0.5",
        )
        .from(".hero-cta", { y: 16, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(
          ".hero-illustration",
          { scale: 0.92, opacity: 0, duration: 1.1, ease: "expo.out" },
          "<-0.4",
        );
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative isolate overflow-hidden bg-beige pt-28 sm:pt-32 lg:pt-36"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-24 sm:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16">
        {/* Text column */}
        <div className="lg:col-span-7">
          <span className="hero-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-brand-green/20 bg-light-green/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-deep-green backdrop-blur">
            <Recycle className="h-3.5 w-3.5" aria-hidden />
            {eyebrow}
          </span>

          <h1 className="mt-7 max-w-4xl text-balance font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[clamp(3rem,5.8vw,5.5rem)]">
            {heading.split(" ").map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="mr-[0.22em] inline-block overflow-hidden align-bottom"
              >
                <span className="hero-word inline-block">{word}</span>
              </span>
            ))}
          </h1>

          {subheading && (
            <p
              className="hero-sub mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-body sm:text-xl"
              data-cursor="text"
            >
              {subheading}
            </p>
          )}

          {positioningTags && positioningTags.length > 0 && (
            <ul className="mt-7 flex flex-wrap items-center gap-2.5">
              {positioningTags.map((tag) => (
                <li
                  key={tag}
                  className="hero-tag inline-flex items-center gap-2 rounded-full border border-deep-green/15 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-deep-green backdrop-blur"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" aria-hidden />
                  {tag}
                </li>
              ))}
            </ul>
          )}

          <div className="hero-cta mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton
              href={primaryCtaHref}
              className="group inline-flex items-center gap-2 rounded-full bg-deep-green px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-deep-green/15 transition-shadow hover:shadow-xl hover:shadow-deep-green/25"
            >
              {primaryCtaLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </MagneticButton>

            <MagneticButton
              href={secondaryCtaHref}
              strength={0.2}
              className="inline-flex items-center gap-2 rounded-full border border-deep-green/20 bg-white/60 px-6 py-3.5 text-sm font-medium text-deep-green backdrop-blur transition-colors hover:bg-white"
            >
              {secondaryCtaLabel}
            </MagneticButton>
          </div>
        </div>

        {/* Image / illustration column */}
        <div className="hero-illustration lg:col-span-5">
          <HeroIllustration imageUrl={imageUrl} imageAlt={imageAlt} />
        </div>
      </div>
    </section>
  );
}
