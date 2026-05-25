"use client";

import { Fragment, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Recycle } from "lucide-react";

import MagneticButton from "./MagneticButton";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";

const PLACEHOLDER_VIDEO =
  "https://videos.pexels.com/video-files/2098989/2098989-hd_1920_1080_30fps.mp4";

type HeroProps = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  positioningTags?: string[];
  videoUrl?: string | null;
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
  videoUrl,
  imageUrl,
  primaryCtaLabel = "See our impact",
  primaryCtaHref = "#metrics",
  secondaryCtaLabel = "Our recycling process",
  secondaryCtaHref = "/processes",
}: HeroProps) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { y: 24, opacity: 0, duration: 0.7 })
        .from(
          ".hero-char",
          {
            yPercent: 110,
            opacity: 0,
            duration: 0.9,
            stagger: 0.03,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .from(".hero-sub", { y: 30, opacity: 0, duration: 0.9 }, "-=0.5")
        .from(
          ".hero-tag",
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.08 },
          "-=0.6",
        )
        .from(".hero-cta", { y: 24, opacity: 0, duration: 0.7 }, "-=0.4");
    },
    { scope: root },
  );

  const words = heading.split(" ");

  return (
    <section
      data-section="Home hero"
      ref={root}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-deep-green"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={imageUrl ?? PLACEHOLDER_IMAGES.hero}
      >
        <source src={videoUrl ?? PLACEHOLDER_VIDEO} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/65" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(0,0,0,0.3),transparent)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-36 sm:px-10 sm:pb-32 lg:px-16 lg:pb-36">
        <span className="hero-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white/90 backdrop-blur">
          <Recycle className="h-3.5 w-3.5" aria-hidden />
          {eyebrow}
        </span>

        <h1 className="mt-7 max-w-5xl font-serif text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[clamp(3.5rem,6.5vw,6rem)]">
          {words.map((word, wi) => (
            <Fragment key={`${word}-${wi}`}>
              <span className="inline-block overflow-hidden pb-[0.15em] align-bottom">
                {word.split("").map((char, ci) => (
                  <span key={ci} className="hero-char inline-block">
                    {char}
                  </span>
                ))}
              </span>
              {wi < words.length - 1 && " "}
            </Fragment>
          ))}
        </h1>

        {subheading && (
          <p
            className="hero-sub mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-white/75 sm:text-xl"
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
                className="hero-tag inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur"
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
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-deep-green shadow-lg shadow-black/20 transition-shadow hover:shadow-xl"
          >
            {primaryCtaLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </MagneticButton>

          <MagneticButton
            href={secondaryCtaHref}
            strength={0.2}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            {secondaryCtaLabel}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
