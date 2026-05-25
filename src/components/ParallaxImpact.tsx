"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";

export default function ParallaxImpact() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Parallax: background drifts up slower than the section scrolls past.
      gsap.to(".parallax-bg", {
        yPercent: -22,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".parallax-eyebrow", {
        opacity: 0,
        y: 18,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });

      gsap.from(".parallax-rule", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });

      gsap.from(".parallax-stat", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 60%" },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-section="Parallax impact"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-ink text-white"
    >
      {/* Parallax background — oversized so the translate doesn't reveal edges */}
      <div className="parallax-bg absolute inset-0 -z-20 h-[125%] w-full">
        <Image
          src={PLACEHOLDER_IMAGES.parallaxImpact}
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/85" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-32 sm:px-10 lg:px-16">
        <div className="flex items-center gap-4">
          <span
            className="parallax-eyebrow inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.32em]"
            style={{ color: "var(--color-accent)" }}
          >
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            Resource conservation
          </span>
        </div>

        <AnimatedHeading className="mt-7 max-w-5xl text-balance font-serif text-[2.6rem] leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[5.25rem]">
          Every recycled tonne is a tonne the earth keeps.
        </AnimatedHeading>

        <p className="parallax-rule mt-10 h-px w-24 bg-white/40" />

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
          We don&apos;t source virgin iron ore. Every kilogram of steel that
          leaves our plants began life on someone else&apos;s shop floor — and
          will begin again on the next one.
        </p>

        <dl className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="parallax-stat">
            <dt className="text-xs uppercase tracking-[0.22em] text-white/60">
              Ore left in the ground
            </dt>
            <dd className="mt-3 font-serif text-4xl tracking-tight text-white sm:text-5xl">
              850K<span className="text-white/70"> t</span>
            </dd>
            <p className="mt-1 text-sm text-white/65">Last financial year</p>
          </div>
          <div className="parallax-stat">
            <dt className="text-xs uppercase tracking-[0.22em] text-white/60">
              CO₂ avoided
            </dt>
            <dd className="mt-3 font-serif text-4xl tracking-tight text-white sm:text-5xl">
              1.2M<span className="text-white/70"> t</span>
            </dd>
            <p className="mt-1 text-sm text-white/65">vs. virgin steel route</p>
          </div>
          <div className="parallax-stat">
            <dt className="text-xs uppercase tracking-[0.22em] text-white/60">
              Times a tonne can return
            </dt>
            <dd className="mt-3 font-serif text-4xl tracking-tight text-white sm:text-5xl">
              ∞
            </dd>
            <p className="mt-1 text-sm text-white/65">
              Steel doesn&apos;t lose its memory
            </p>
          </div>
        </dl>
      </div>
    </section>
  );
}
