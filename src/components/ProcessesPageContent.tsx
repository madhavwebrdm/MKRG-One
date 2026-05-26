"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Recycle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import mkrg9 from "@/Images/mkrg (9).jpeg";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";
import ProcessesFlow from "./ProcessesFlow";

const SUBPAGES: Array<{
  title: string;
  body: string;
  href: string;
  icon: typeof Recycle;
  image?: string | import("next/image").StaticImageData;
}> = [
  {
    title: "Recycling Processes",
    body: "A line-by-line walkthrough of every recycling stream we operate.",
    href: "/processes/recycling-processes",
    icon: Recycle,
  },
  {
    title: "Types of Materials Recycled",
    body: "Steel, zinc, lead and the alloys in between what comes in and what goes out.",
    href: "/processes/materials",
    icon: Boxes,
  },
  {
    title: "Competitive Advantages",
    body: "Plant technology, automation and the design choices that set our output apart.",
    href: "/processes/advantages",
    icon: ShieldCheck,
    image: mkrg9,
  },
];

export default function ProcessesPageContent() {
  return (
    <main className="bg-beige">
      <PageHero
        eyebrow="Processes"
        heading="The Recycle2X Process."
        intro="Two output streams from one closed loop. Industrial scrap becomes structural steel; the hazardous waste that steel-making would otherwise send to landfill becomes commercial zinc. Air Pollution Control Devices keep the airborne stream well within Indian Standards."
        imageUrl={PLACEHOLDER_IMAGES.processesHero}
        imageAlt="Recycle2X plant"
        videoUrl="/videos/processes-hero.mp4"
        videoPoster={PLACEHOLDER_IMAGES.processesHero}
      />

      {/* Detailed sticky-scroll flow moved from home */}
      <ProcessesFlow
        eyebrow="Recycle2X"
        heading="The full Recycle2X flow, step by step."
        body="Each step is verified, instrumented and tied to an Indian Standard. Scroll through both streams below the image on the left tracks the step you're reading."
      />

      {/* Key message pull-quote */}
      <section className="bg-deep-green py-24 text-white sm:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-10 lg:px-16">
          <Sparkles className="mx-auto h-7 w-7 text-white/60" aria-hidden />
          <AnimatedHeading className="mt-6 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            This entire process turns hazardous waste into high-quality zinc reusable,
            traceable and in high demand across industry.
          </AnimatedHeading>
        </div>
      </section>

      {/* Sub-pages */}
      <section className="bg-gradient-to-b from-[#F0FCF5] via-[#D5F7E4] to-[#A8F0C6] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-black">
              Go deeper
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-black sm:text-4xl lg:text-5xl">
              The process, in three parts.
            </AnimatedHeading>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {SUBPAGES.map((s, i) => {
              const Icon = s.icon;
              const img =
                s.image ??
                PLACEHOLDER_IMAGES.processesSubpages[
                  i % PLACEHOLDER_IMAGES.processesSubpages.length
                ];
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={s.href}
                    data-cursor="grow"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-xl"
                  >
                    <div className="relative aspect-[5/3] w-full overflow-hidden">
                      <Image
                        src={img}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                      <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-accent backdrop-blur">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-serif text-xl leading-snug text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-body">
                        {s.body}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 group-hover:underline">
                        Read more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}

