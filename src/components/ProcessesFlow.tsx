"use client";

import { Fragment, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";

type Step = {
  label: string;
  note: string;
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

const FLOWS: Flow[] = [
  {
    id: "scrap-to-steel",
    index: "01",
    title: "Scrap to Steel",
    caption:
      "From raw scrap to finished TMT bars, pipes, and coils every step optimized.",
    callout:
      "This process transforms industrial scrap into certified steel products ready for construction, infrastructure and manufacturing.",
    steps: [
      {
        label: "Scrap Collection",
        note: "Source ferrous scrap from industrial channels",
        body: "Construction demolition, end-of-life manufacturing and automotive scrap arrive from verified aggregators across India. Every kilogram is weighed, graded and logged at the gate.",
        image: PLACEHOLDER_IMAGES.processSteel[0],
      },
      {
        label: "Sorting & Grading",
        note: "Magnetic separation and classification",
        body: "Magnets and density separators isolate ferrous fractions; alloy spectrometry confirms the chemistry of each lot so it enters the furnace at the right grade.",
        image: PLACEHOLDER_IMAGES.processSteel[1],
      },
      {
        label: "Electric Arc Furnace",
        note: "Melting at 1,800°C with precision",
        body: "Electric arc furnaces return cold scrap to liquid steel using electricity increasingly renewable. No coke, no blast furnace, a fraction of the CO₂ of the virgin route.",
        image: "/images/steel.jpg",
      },
      {
        label: "Continuous Casting",
        note: "Forming billets consistently",
        body: "Liquid steel casts straight into structural billets and slabs. Continuous casting means fewer defects, tighter tolerances and steady supply to downstream rolling.",
        image: "/images/mkrg-2.jpeg",
      },
      {
        label: "Finished Green Steel",
        note: "TMT bars, pipes, and coils",
        body: "TMT rebar, structural pipes and hot-rolled coils ship under IS 1786, IS 1239 and IS 2062. Every batch is mill-tested and traceable to the heat number.",
        image: "/images/finished-green-steel.jpg",
      },
    ],
  },
  {
    id: "waste-to-zinc",
    index: "02",
    title: "Waste to Zinc",
    caption:
      "Our hydrometallurgical process recovers 99.9% pure zinc from hazardous waste.",
    callout:
      "This entire process turns hazardous waste into high-quality zinc reusable, traceable and in high demand across industry.",
    steps: [
      {
        label: "Waste Collection",
        note: "Secure hazardous waste handling",
        body: "Flue dust and hazardous by-products from galvanising and steel-making arrive under MOEFCC authorisation chain of custody documented from origin to plant.",
        image: "/images/Waste Collection.jpg",
      },
      {
        label: "Washing & Prep",
        note: "Conditioned for hydrometallurgical recovery",
        body: "Wet washing strips impurities, conditions particle size and prepares the feed for leaching. Process water is recycled in a closed loop with zero liquid discharge.",
        image: "/images/washing-and-prep.jpg",
      },
      {
        label: "Acid Leaching",
        note: "Dissolve zinc content",
        body: "A precision sulphuric leach pulls zinc into solution while leaving iron, lead and other impurities behind. Recovery rates are tracked batch by batch.",
        image: "/images/acid-leaching.jpg",
      },
      {
        label: "Purification",
        note: "Purify the solution",
        body: "Successive precipitation, filtration and ion-exchange stages remove cadmium, copper and trace metals delivering high-grade pregnant liquor to the electrolysis cells.",
        image: "/images/purification.jpg",
      },
      {
        label: "Zinc Recovery",
        note: "99.9% pure zinc, cast to sheets",
        body: "Electrolysis deposits zinc on cathode sheets; the metal is stripped, melted and cast into commercial-grade ingots and sheets. Output purity above 99.9%.",
        image: "/images/zinc-recovery.png",
      },
    ],
  },
];

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
  const heading = headingProp ?? "From scrap and waste to high-value resources.";
  const body =
    bodyProp ??
    "Two parallel processes, one closed loop. Industrial scrap returns as structural steel; hazardous waste returns as commercial-grade zinc every step verified and optimized.";

  return (
    <>
      <section id="processes" className="bg-beige py-24 sm:py-32">
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

          <FlowSection flow={FLOWS[0]} />
        </div>
      </section>

      {FLOWS[0].callout && <FlowCallout text={FLOWS[0].callout} />}

      {FLOWS.slice(1).map((flow) => (
        <Fragment key={flow.id}>
          <section className="bg-beige py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
              <FlowSection flow={flow} />
            </div>
          </section>
          {flow.callout && <FlowCallout text={flow.callout} />}
        </Fragment>
      ))}
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
            className="absolute left-3 top-2 bottom-2 w-px bg-deep-green/15 sm:left-4"
          />
          <div
            aria-hidden
            className="absolute left-3 top-2 w-px origin-top bg-deep-green/55 sm:left-4"
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
                    className={`absolute left-0 top-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full ring-4 ring-beige transition-colors duration-500 sm:left-0.5 ${
                      active >= i
                        ? "bg-deep-green text-white"
                        : "border border-deep-green/30 bg-white text-deep-green"
                    }`}
                  >
                    <span className="text-[11px] font-semibold">{i + 1}</span>
                  </span>

                  <div
                    className={`transition-opacity duration-500 ${
                      active === i ? "opacity-100" : "opacity-55"
                    }`}
                  >
                    <p className="text-[11px] uppercase tracking-[0.22em] text-accent">
                      {s.note}
                    </p>
                    <h4 className="mt-2 font-serif text-2xl leading-tight text-ink sm:text-3xl">
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

