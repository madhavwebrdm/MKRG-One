"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

// The statement is fixed copy supplied by the client, so it is not driven by the
// Sanity `processesTeaser` heading/body (those still hold the old "scrap to
// resources" text and would override it).
const STATEMENT = "The first to have the Patented Hydrometallurgical Process in India.";
const SUPPORT = "Others may use similar processes, but no one had patented one before us.";

type Props = {
  eyebrow?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function ProcessesTeaser({
  eyebrow: eyebrowProp,
  ctaLabel: ctaLabelProp,
  ctaHref: ctaHrefProp,
}: Props) {
  const eyebrow = eyebrowProp ?? "Our Process";
  const ctaLabel = ctaLabelProp ?? "Explore our process";
  const ctaHref = ctaHrefProp ?? "/processes";

  return (
    <section id="processes" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Patent seal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none"
          >
            <div aria-hidden className="absolute inset-0 rounded-full bg-mint" />
            <Image
              src="/images/patented-process-seal.png"
              alt="Hydrometallurgical Patented Process seal"
              width={1200}
              height={1200}
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="relative h-auto w-full drop-shadow-xl"
            />
          </motion.div>

          {/* Statement */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </span>
            <AnimatedHeading className="mt-4 text-balance font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-[3.4rem]">
              {STATEMENT}
            </AnimatedHeading>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-body"
            >
              {SUPPORT}
            </motion.p>

            <motion.div whileHover={{ x: 4 }} className="mt-10 inline-flex">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
              >
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
