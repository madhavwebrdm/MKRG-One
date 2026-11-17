"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AnimatedHeading from "./AnimatedHeading";
import MetricCards, { type Metric } from "./MetricCards";

type Props = {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  metrics?: Metric[];
};

export default function MetricsBar({
  eyebrow: eyebrowProp,
  heading: headingProp,
  intro: introProp,
  metrics,
}: Props) {
  const eyebrow = eyebrowProp ?? "Impact metrics";
  const heading = headingProp ?? "Our impact, measured.";
  const intro =
    introProp ??
    "Every tonne we process meets International Standards and behaves virtually like virgin material at a fraction of the environmental cost.";
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".metrics-head > :not(h2)", {
        scrollTrigger: { trigger: root.current, start: "top 75%" },
        y: 16,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power3.out",
      });
    },
    { scope: root },
  );

  return (
    <section id="metrics" ref={root} className="bg-mint py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="metrics-head max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-deep-green">
            {eyebrow}
          </span>
          <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            {heading}
          </AnimatedHeading>
          {intro && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-body">
              {intro}
            </p>
          )}
        </div>

        <MetricCards metrics={metrics} className="mt-12" />
      </div>
    </section>
  );
}
