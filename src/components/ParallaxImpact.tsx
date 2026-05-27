"use client";

import { useRef } from "react";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";

export default function ParallaxImpact() {
  const root = useRef<HTMLElement>(null);

  return (
    <section
      ref={root}
      data-section="Parallax impact"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-ink text-white"
      style={{
        backgroundImage: `url(${PLACEHOLDER_IMAGES.parallaxImpact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/85" />

      <div className="relative mx-auto w-full max-w-5xl px-6 py-32 text-center sm:px-10 lg:px-16">
        <AnimatedHeading className="font-serif text-[2.2rem] leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[5.25rem]">
          {"Every Recycled Tonne\nIs A Step Toward\nA Greener Earth."}
        </AnimatedHeading>
      </div>
    </section>
  );
}
