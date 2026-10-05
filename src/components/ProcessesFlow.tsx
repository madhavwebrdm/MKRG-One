"use client";

import { useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import AnimatedHeading from "./AnimatedHeading";

type Step = {
  label: string;
  body: string;
  image: string | StaticImageData;
};

type Flow = {
  id: string;
  index: string;
  title: string;
  caption: string;
  steps: Step[];
  callout?: string;
};

const FLOW: Flow = {
    id: "waste-to-zinc",
    index: "01",
    title: "Waste to Zinc",
    caption:
      "Steel plants produce a hazardous dust. We turn it into 99.9% pure zinc.",
    callout:
      "This entire process turns hazardous waste into high-quality zinc reusable, traceable and in high demand across industry.",
    steps: [
      {
        label: "Waste Collection",
        body: "Dust from steel and galvanising plants is collected under government approval. Every load is tracked from the originating plant to our facility.",
        image: "/images/Waste Collection.jpg",
      },
      {
        label: "Washing & Preparation",
        body: "The dust is washed to remove dirt and unwanted material. The water is treated, cleaned and reused, with no discharge.",
        image: "/images/washing-and-prep.jpg",
      },
      {
        label: "Purification",
        body: "The processed material undergoes several filtration stages to remove unwanted metals, including cadmium and copper. This produces a purified zinc solution ready for recovery.",
        image: "/images/purification.jpg",
      },
      {
        label: "Zinc Recovery",
        body: "An electric current deposits the zinc from the solution onto metal plates. The recovered zinc is then melted and cast into ingots and sheets, achieving purity above 99.9%.",
        image: "/images/zinc-recovery.png",
      },
    ],
  };

type Props = {
  eyebrow?: string;
  heading?: string;
  body?: string;
};

export default function ProcessesFlow({
  eyebrow: eyebrowProp,
  heading: headingProp,
  body: bodyProp,
}: Props) {
  const eyebrow = eyebrowProp ?? "Our Process";
  const heading = headingProp ?? "From hazardous waste to high-value zinc.";
  const body =
    bodyProp ??
    "One closed loop. Hazardous waste returns as commercial-grade zinc every step verified and optimized.";

  return (
    <>
      <section id="processes" className="bg-mint py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </span>
              <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
                {heading}
              </AnimatedHeading>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed text-body sm:text-lg">
                {body}
              </p>
            </div>
          </div>

          <FlowSection flow={FLOW} />
        </div>
      </section>

      {FLOW.callout && <FlowCallout text={FLOW.callout} />}
    </>
  );
}

function FlowCallout({ text }: { text: string }) {
  return (
    <section className="bg-deep-green py-24 text-white sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-10 lg:px-16">
        <AnimatedHeading className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
          {text}
        </AnimatedHeading>
      </div>
    </section>
  );
}

function FlowSection({ flow }: { flow: Flow }) {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const steps = root.current?.querySelectorAll<HTMLElement>(".pf-step");
      if (!steps) return;

      const triggers: ScrollTrigger[] = [];
      steps.forEach((el, i) => {
        triggers.push(
          ScrollTrigger.create({
            trigger: el,
            start: "top 55%",
            end: "bottom 55%",
            onEnter: () => setActive(i),
            onEnterBack: () => setActive(i),
          }),
        );
      });

      return () => {
        triggers.forEach((t) => t.kill());
      };
    },
    { scope: root },
  );

  return (
    <div ref={root} className="mt-20 sm:mt-24 lg:mt-32">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <div className="flex items-baseline gap-4">
          <span
            className="font-serif text-3xl tracking-tight sm:text-4xl"
            style={{ color: "var(--color-accent)" }}
          >
            {flow.index}
          </span>
          <h3 className="font-serif text-2xl leading-snug text-ink sm:text-3xl lg:text-4xl">
            {flow.title}
          </h3>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-body sm:text-base">
          {flow.caption}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="order-1 lg:order-1 lg:col-span-6">
          <div className="lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] max-h-[82vh] w-full overflow-hidden rounded-2xl bg-white">
              {flow.steps.map((s, i) => (
                <Image
                  key={s.label}
                  src={s.image}
                  alt={s.label}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority={i === 0}
                  className={`object-cover transition-opacity duration-700 ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 rounded-2xl bg-white/90 px-5 py-3.5 backdrop-blur">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
                    Step {String(active + 1).padStart(2, "0")} of{" "}
                    {String(flow.steps.length).padStart(2, "0")}
                  </p>
                  <p className="mt-0.5 font-serif text-base text-ink">
                    {flow.steps[active]?.label}
                  </p>
                </div>
                <span
                  className="inline-block h-1.5 w-12 rounded-full"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative order-2 lg:order-2 lg:col-span-6">
          <div
            aria-hidden
            className="absolute left-3 top-2 bottom-2 w-px bg-forest/15 sm:left-4"
          />
          <div
            aria-hidden
            className="absolute left-3 top-2 w-px origin-top bg-forest/55 sm:left-4"
            style={{
              height: `${((active + 1) / flow.steps.length) * 100}%`,
              transition: "height 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          <ol className="space-y-24 sm:space-y-[45vh] lg:space-y-[60vh]">
            {flow.steps.map((s, i) => {
              const isLast = i === flow.steps.length - 1;
              return (
                <li
                  key={s.label}
                  className={`pf-step relative pl-12 sm:pl-14 ${isLast ? "pb-[60vh] lg:pb-[80vh]" : ""}`}
                  data-index={i}
                >
                  <span
                    className={`absolute left-0 top-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full ring-4 ring-mint transition-colors duration-500 sm:left-0.5 ${
                      active >= i
                        ? "bg-deep-green text-white"
                        : "border border-forest/30 bg-white text-forest"
                    }`}
                  >
                    <span className="text-[11px] font-semibold">{i + 1}</span>
                  </span>

                  <div
                    className={`transition-opacity duration-500 ${
                      active === i ? "opacity-100" : "opacity-55"
                    }`}
                  >
                    <h4 className="font-serif text-2xl leading-tight text-ink sm:text-3xl">
                      {s.label}
                    </h4>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-body">
                      {s.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

