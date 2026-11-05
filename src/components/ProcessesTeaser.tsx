"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

// Facts already published elsewhere on the site (process caption, product note, Processes page).
const PROOF = [
  { value: "99.9%", label: "Pure zinc recovered from hazardous waste" },
  { value: "7,000 t", label: "Approximate annual zinc production" },
  { value: "Zero", label: "Waste sent to landfill" },
];

type Props = {
  eyebrow?: string;
  heading?: string;
  body?: string;
};

/** Home page highlight for the patented hydrometallurgical process. */
export default function ProcessesTeaser({
  eyebrow: eyebrowProp,
  heading: headingProp,
  body: bodyProp,
}: Props) {
  const eyebrow = eyebrowProp ?? "A first for India";
  const heading =
    headingProp ??
    "The first to have the Patented Hydrometallurgical Process in India.";
  const body =
    bodyProp ??
    "Others may use similar processes, but no one had patented one before us.";

  return (
    <section id="processes" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative isolate overflow-hidden rounded-3xl bg-deep-green px-6 py-14 text-white shadow-xl sm:px-12 sm:py-16 lg:px-16 lg:py-20"
        >
          {/* Gold glow behind the seal and a deeper corner for depth */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(242,207,99,0.28)_0%,transparent_65%)] lg:left-[24%] lg:top-1/2 lg:h-[38rem] lg:w-[38rem] lg:-translate-y-1/2"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-br from-transparent via-transparent to-forest/70"
          />

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Patent seal */}
            <div className="flex justify-center lg:col-span-5">
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-white/15 sm:-inset-6"
                />
                <span
                  aria-hidden
                  className="absolute -inset-4 rounded-full border border-white/10 sm:-inset-12"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src="/images/patented-process-in-india-seal.png"
                    alt="Patented hydrometallurgical process in India"
                    width={1200}
                    height={1200}
                    sizes="(max-width: 640px) 208px, (max-width: 1024px) 288px, 352px"
                    className="h-52 w-52 drop-shadow-2xl sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem]"
                  />
                </motion.div>
              </div>
            </div>

            {/* Copy */}
            <div className="text-center lg:col-span-7 lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90">
                <Award className="h-4 w-4 text-[#f2cf63]" />
                {eyebrow}
              </span>
              <AnimatedHeading className="mt-5 text-balance font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                {heading}
              </AnimatedHeading>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg lg:mx-0">
                {body}
              </p>

              <ul className="mt-10 grid grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-3 sm:gap-8">
                {PROOF.map((p) => (
                  <li key={p.label} className="text-center sm:text-left">
                    <p className="font-serif text-3xl leading-none text-[#f2cf63] sm:text-4xl">
                      {p.value}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                      {p.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
