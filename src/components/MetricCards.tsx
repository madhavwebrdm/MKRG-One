"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export type Metric = {
  value: number;
  suffix?: string;
  label: string;
  note?: string;
};

/** Fallback when Sanity has no metrics (matches homePage.metrics). */
export const DEFAULT_METRICS: Metric[] = [
  { value: 45000, suffix: " Mt", label: "CO₂ offset", note: "Annual avoided emissions" },
  { value: 25907.549, suffix: " MT", label: "Tonnes recycled", note: "Till March 2026" },
  { value: 42, suffix: "%", label: "Renewable energy", note: "Powering our plants" },
];

const TONES = {
  // White boxes on a light section (Home page Impact metrics)
  light: {
    grid: "border border-forest/15 bg-forest/10",
    card: "bg-white",
    number: "text-5xl text-ink sm:text-6xl",
    suffix: "text-2xl text-deep-green sm:text-3xl",
    label: "text-ink",
    note: "text-muted",
  },
  // Green boxes on a deep-green section (Projects page Impact statistics)
  dark: {
    grid: "bg-white/10",
    card: "bg-deep-green/60 backdrop-blur",
    number: "text-4xl text-white sm:text-5xl",
    suffix: "text-xl text-white/80 sm:text-2xl",
    label: "text-white/90",
    note: "text-white/70",
  },
} as const;

/**
 * The Impact metrics number boxes with the count-up animation. Used on Home
 * (light) and in the Projects page Impact statistics (dark), same data.
 */
export default function MetricCards({
  metrics,
  tone = "light",
  className = "",
}: {
  metrics?: Metric[] | null;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  const t = TONES[tone];
  const items = metrics && metrics.length > 0 ? metrics : DEFAULT_METRICS;
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

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
        scrollTrigger: { trigger: root.current, start: "top 85%" },
        y: 16,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power3.out",
      });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className={`grid grid-cols-1 gap-px overflow-hidden rounded-2xl ${t.grid} sm:grid-cols-3 ${className}`}
    >
      {items.map((m, i) => (
        <div key={i} className={`metric-card flex flex-col gap-2 p-7 sm:p-8 ${t.card}`}>
          <div className={`flex items-baseline gap-1 font-serif tracking-tight ${t.number}`}>
            <span className="metric-number" data-target={m.value}>
              0
            </span>
            {m.suffix && <span className={t.suffix}>{m.suffix}</span>}
          </div>
          <p className={`mt-1 text-sm font-medium uppercase tracking-wider ${t.label}`}>
            {m.label}
          </p>
          {m.note && <p className={`text-sm ${t.note}`}>{m.note}</p>}
        </div>
      ))}
    </div>
  );
}
