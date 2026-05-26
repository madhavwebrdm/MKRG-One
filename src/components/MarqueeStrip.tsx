"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  items?: string[];
  speed?: number; // seconds for one full pass
};

const DEFAULTS = [
  "Recycle2X Process",
  "ISO 9001 / 14001",
  "MOEFCC Approved",
  "GPCB Compliant",
  "Zero degradation",
  "Indian Standards",
  "Renewable energy",
  "Closed loop",
];

export default function MarqueeStrip({ items = DEFAULTS, speed = 35 }: Props) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = root.current?.querySelector<HTMLElement>(".marquee-track");
      if (!track) return;
      const half = track.scrollWidth / 2;
      gsap.to(track, {
        x: -half,
        duration: speed,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: root },
  );

  const loop = [...items, ...items];

  return (
    <div
      ref={root}
      className="overflow-hidden border-y border-accent/15 bg-accent/5 py-5"
    >
      <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap pl-12 font-serif text-xl text-accent sm:text-2xl">
        {loop.map((label, i) => (
          <span key={`${label}-${i}`} className="flex items-center gap-12">
            <span>{label}</span>
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
