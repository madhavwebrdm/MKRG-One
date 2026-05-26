"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AnimatedHeading from "./AnimatedHeading";

type Metric = {
  value: number;
  suffix?: string;
  label: string;
  note?: string;
};

type Props = {
  heading?: string;
  intro?: string;
  metrics?: Metric[];
};

const DEFAULTS: Metric[] = [
  { value: 1.2, suffix: "M t", label: "CO₂ offset", note: "Annual avoided emissions" },
  { value: 850, suffix: "K t", label: "Tonnes recycled", note: "Steel, zinc, lead — last FY" },
  { value: 42, suffix: "%", label: "Renewable energy", note: "Powering our plants" },
];

export default function MetricsBar({
  heading: headingProp,
  intro: introProp,
  metrics: metricsProp,
}: Props) {
  const heading = headingProp ?? "Our impact, measured.";
  const intro =
    introProp ??
    "Every tonne we process meets Indian Standards and behaves virtually like virgin material — at a fraction of the environmental cost.";
  const metrics = metricsProp ?? DEFAULTS;
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".metrics-head > :not(h2)", {
        scrollTrigger: { trigger: root.current, start: "top 75%" },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      const numbers = root.current?.querySelectorAll<HTMLElement>(".metric-number");
      numbers?.forEach((el) => {
        const target = Number(el.dataset.target ?? "0");
        const decimals = target % 1 !== 0 ? 1 : 0;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = obj.val.toFixed(decimals);
          },
        });
      });

      gsap.from(".metric-card", {
        scrollTrigger: { trigger: root.current, start: "top 70%" },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: root },
  );

  return (
    <section
      id="metrics"
      ref={root}
      className="bg-deep-green py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="metrics-head max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-white/80">
            Impact metrics
          </span>
          <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            {heading}
          </AnimatedHeading>
          {intro && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
              {intro}
            </p>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="metric-card flex flex-col gap-2 bg-deep-green/60 p-7 backdrop-blur sm:p-8"
            >
              <div className="flex items-baseline gap-1 font-serif text-5xl tracking-tight text-white sm:text-6xl">
                <span className="metric-number" data-target={m.value}>
                  0
                </span>
                {m.suffix && (
                  <span className="text-2xl text-white/80 sm:text-3xl">
                    {m.suffix}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-white/90">
                {m.label}
              </p>
              {m.note && <p className="text-sm text-white/70">{m.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
