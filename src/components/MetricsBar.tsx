"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

type Metric = {
  value: number;
  suffix?: string;
  label: string;
  note?: string;
};

type Leader = {
  heading?: string | null;
  quote?: string | null;
  attribution?: string | null;
  portraitUrl?: string | null;
};

type Props = {
  heading?: string;
  intro?: string;
  metrics?: Metric[];
  leader?: Leader | null;
};

const DEFAULTS: Metric[] = [
  { value: 1.2, suffix: "M t", label: "CO₂ offset", note: "Annual avoided emissions" },
  { value: 18, suffix: "K t", label: "Tonnes recycled", note: "Zinc recovered last FY" },
  { value: 42, suffix: "%", label: "Renewable energy", note: "Powering our plants" },
];

const DEFAULT_LEADER = {
  heading: "Turning Metal into Tomorrow",
  quote:
    "True progress lies in building a sustainable future through innovation, responsibility, and purpose. At MKRG, we are committed to creating solutions that make a lasting difference.",
  attribution: "Rahul Goel, Director",
  // Rahul Goel's portrait as published on the Leadership page; used only if the
  // Leadership page lookup in the home query comes back empty.
  portrait:
    "https://cdn.sanity.io/images/72k8551o/production/7f9cabf6d19dedf3a88f96f128ab67fb6e9b77da-1122x1402.png",
};

const SLIDE_COUNT = 2;
const AUTOPLAY_MS = 5000;

export default function MetricsBar({
  heading: headingProp,
  intro: introProp,
  metrics: metricsProp,
  leader,
}: Props) {
  const heading = headingProp ?? "Our impact, measured.";
  const intro =
    introProp ??
    "Every tonne we process meets International Standards and behaves virtually like virgin material at a fraction of the environmental cost.";
  const metrics = metricsProp ?? DEFAULTS;

  const leaderHeading = leader?.heading || DEFAULT_LEADER.heading;
  const quote = leader?.quote || DEFAULT_LEADER.quote;
  const attribution = leader?.attribution || DEFAULT_LEADER.attribution;
  const portrait = leader?.portraitUrl || DEFAULT_LEADER.portrait;
  // "Name, Role" → bold name + muted role (a bare name has no role line)
  const [leaderName, ...roleParts] = attribution.split(",");
  const leaderRole = roleParts.join(",").trim();

  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);

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
        y: 16,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power3.out",
      });
    },
    { scope: root },
  );

  // Only auto-advance while the section is on screen.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-advance; the timer restarts after every slide change (manual or auto).
  useEffect(() => {
    if (paused || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(
      () => setActive((i) => (i + 1) % SLIDE_COUNT),
      AUTOPLAY_MS,
    );
    return () => clearTimeout(timer);
  }, [active, paused, inView]);

  const go = (i: number) => setActive(((i % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT);

  // Slides share one grid cell so the section keeps the height of the taller slide.
  const slideClass = (i: number) =>
    `col-start-1 row-start-1 transition-[opacity,transform] duration-700 ease-out ${
      i === active
        ? "translate-x-0 opacity-100"
        : `pointer-events-none opacity-0 ${i < active ? "-translate-x-8" : "translate-x-8"}`
    }`;

  return (
    <section id="metrics" ref={root} className="bg-mint py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Impact metrics and a message from our leadership"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          // Pause for keyboard focus only; a mouse click would leave focus on the
          // arrow/dot and freeze the autoplay.
          onFocus={(e) => {
            if (e.target.matches(":focus-visible")) setPaused(true);
          }}
          onBlur={() => setPaused(false)}
        >
          <div className="grid overflow-x-clip">
            {/* Slide 1 — impact metrics */}
            <div
              role="group"
              aria-roledescription="slide"
              aria-label={`1 of ${SLIDE_COUNT}`}
              aria-hidden={active !== 0}
              inert={active !== 0}
              className={slideClass(0)}
            >
              <div className="metrics-head max-w-3xl">
                <span className="text-xs uppercase tracking-[0.2em] text-deep-green">
                  Impact metrics
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

              <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-forest/15 bg-forest/10 sm:grid-cols-3">
                {metrics.map((m, i) => (
                  <div
                    key={i}
                    className="metric-card flex flex-col gap-2 bg-white p-7 sm:p-8"
                  >
                    <div className="flex items-baseline gap-1 font-serif text-5xl tracking-tight text-ink sm:text-6xl">
                      <span className="metric-number" data-target={m.value}>
                        0
                      </span>
                      {m.suffix && (
                        <span className="text-2xl text-deep-green sm:text-3xl">
                          {m.suffix}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-medium uppercase tracking-wider text-ink">
                      {m.label}
                    </p>
                    {m.note && <p className="text-sm text-muted">{m.note}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Slide 2 — message from the head */}
            <div
              role="group"
              aria-roledescription="slide"
              aria-label={`2 of ${SLIDE_COUNT}`}
              aria-hidden={active !== 1}
              inert={active !== 1}
              className={slideClass(1)}
            >
              <div className="grid h-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-forest/10 lg:max-w-none">
                    <Image
                      src={portrait}
                      alt={attribution}
                      fill
                      sizes="(max-width: 1024px) 80vw, 32vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <figure className="lg:col-span-8 lg:pl-4">
                  <p className="mb-5 text-xs uppercase tracking-[0.2em] text-deep-green">
                    {leaderHeading}
                  </p>
                  <blockquote className="font-serif text-3xl leading-snug text-ink sm:text-4xl lg:text-[2.2rem] lg:leading-[1.25]">
                    <span aria-hidden className="mr-2 align-top text-5xl leading-none text-deep-green">
                      “
                    </span>
                    {quote}
                    <span aria-hidden className="ml-1 align-bottom text-5xl leading-none text-deep-green">
                      ”
                    </span>
                  </blockquote>
                  <figcaption className="mt-8">
                    <p className="text-sm font-semibold text-ink">{leaderName.trim()}</p>
                    {leaderRole && (
                      <p className="mt-1 text-sm text-muted">{leaderRole}</p>
                    )}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {Array.from({ length: SLIDE_COUNT }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === active}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-8 bg-deep-green"
                      : "w-2 bg-forest/25 hover:bg-forest/50"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(active - 1)}
                aria-label="Previous slide"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 bg-white text-forest transition-colors hover:border-deep-green hover:bg-deep-green hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(active + 1)}
                aria-label="Next slide"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 bg-white text-forest transition-colors hover:border-deep-green hover:bg-deep-green hover:text-white"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
