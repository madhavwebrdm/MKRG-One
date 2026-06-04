"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { CSR_FOCUS_AREAS } from "@/lib/csr";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";

const IMPACT: { value: string; label: string }[] = [
  { value: "30,000+", label: "Saplings planted" },
  { value: "1 lakh+", label: "Lives touched" },
  { value: "2,000+", label: "Youth skilled" },
  { value: "2,000+", label: "Women empowered" },
];

export default function CsrPageContent() {
  return (
    <main className="bg-beige">
      <PageHero
        eyebrow="Corporate Social Responsibility"
        heading="Investing in the communities we call home."
        intro="For Madhav KRG Group, responsibility reaches beyond the plant gate. Across education, health, the environment and rural livelihoods, our CSR work helps the people and places around our operations build a stronger, more dignified future."
        imageUrl={PLACEHOLDER_IMAGES.csr.hero}
        imageAlt="Madhav KRG Group community work"
      />

      {/* Impact band */}
      <section className="bg-deep-green py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-light-green">
              Our impact so far
            </span>
            <p className="mt-3 font-serif text-2xl leading-snug text-white sm:text-3xl">
              Measured not in numbers alone, but in the lives they represent.
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
            {IMPACT.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <dt className="font-serif text-4xl text-white sm:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm text-white/70">{stat.label}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      {/* Focus areas */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Where we focus
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Six focus areas, one commitment.
            </AnimatedHeading>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              Each focus area runs as a set of on-the-ground programmes in the villages
              and towns around our plants. Explore any area to see the work in detail.
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {CSR_FOCUS_AREAS.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.li
                  key={area.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-deep-green/10 transition-shadow hover:shadow-xl"
                >
                  <Link href={`/csr/${area.slug}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={area.heroImage}
                        alt={area.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-green/85 via-deep-green/15 to-transparent" />
                      <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-deep-green shadow-sm">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="absolute bottom-4 left-5">
                        <p className="font-serif text-3xl leading-none text-white">
                          {area.cardStat.value}
                        </p>
                        <p className="mt-1 text-[11px] uppercase tracking-wider text-white/75">
                          {area.cardStat.label}
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl leading-snug text-ink">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-body">
                        {area.tagline}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-deep-green transition-colors group-hover:text-accent">
                        Explore focus area
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                      </span>
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-beige py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="overflow-hidden rounded-3xl bg-deep-green px-8 py-14 sm:px-14 sm:py-16">
            <div className="max-w-2xl">
              <AnimatedHeading className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                Partner with us on the ground.
              </AnimatedHeading>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Whether you represent a panchayat, a school, an NGO or a fellow business,
                we welcome partners who want to extend this work to more communities.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-deep-green transition-colors hover:bg-light-green"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
