"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sprout } from "lucide-react";

type Step = { title: string; body: string };

const FLOW = {
  title: "Waste to Zinc",
  caption:
    "Our hydrometallurgical process recovers 99.9% pure zinc from hazardous waste.",
  image: "/images/waste to zinc.jpeg",
  badge: "/images/patented-process-in-india-seal.png",
  steps: [
    { title: "Waste Receipt", body: "Secure hazardous waste handling" },
    { title: "Washing & Prep", body: "Remove contaminants" },
    { title: "Filtration", body: "Purify the solution" },
    { title: "Electrolysis", body: "99.9% pure zinc recovery" },
    { title: "Zinc Sheets", body: "Clean and package" },
  ] satisfies Step[],
};

/** Waste to Zinc summary: illustration, patent seal and step cards. */
export default function WasteToZincFlow() {
  return (
    <section id="waste-to-zinc" className="bg-mint py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Header: heading left, caption centred, patent badge right.
            On phones the badge sits beside the heading and the caption drops below. */}
        <div className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-5 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4 lg:col-start-1 lg:row-start-1">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
              <Sprout className="h-3.5 w-3.5" />
              Process
            </span>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              {FLOW.title}
            </h2>
          </div>
          <div className="col-span-2 row-start-2 lg:col-span-5 lg:col-start-5 lg:row-start-1">
            <p className="text-base leading-relaxed text-body lg:text-center">
              {FLOW.caption}
            </p>
          </div>
          <div className="flex justify-end lg:col-span-3 lg:col-start-10 lg:row-start-1">
            <Image
              src={FLOW.badge}
              alt="Hydrometallurgical Patented Process in India"
              width={1200}
              height={1200}
              sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 160px"
              className="h-20 w-20 drop-shadow-lg sm:h-28 sm:w-28 lg:h-40 lg:w-40"
            />
          </div>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-10 overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm"
        >
          <Image
            src={FLOW.image}
            alt={`${FLOW.title} process illustration`}
            width={1344}
            height={768}
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="h-auto w-full object-cover"
          />
        </motion.div>

        {/* Step cards */}
        <ol className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {FLOW.steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl border border-forest/10 bg-white p-5 shadow-sm"
            >
              <p className="font-serif text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-serif text-base leading-snug text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-body">{s.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
