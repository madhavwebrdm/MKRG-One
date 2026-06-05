"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { resolveCsrAreas, type SanityFocusArea } from "@/lib/csr";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";

const str = (v: string | null | undefined, fallback: string): string =>
  v && v.trim() ? v : fallback;

type Stat = { value: string; label: string };

const IMPACT: Stat[] = [
  { value: "30,000+", label: "Saplings planted" },
  { value: "1 lakh+", label: "Lives touched" },
  { value: "2,000+", label: "Youth skilled" },
  { value: "2,000+", label: "Women empowered" },
];

export type CsrPageData = {
  hero?:
    | { eyebrow?: string | null; heading?: string | null; intro?: string | null; imageUrl?: string | null; imageAlt?: string | null }
    | null;
  impact?: { eyebrow?: string | null; heading?: string | null; stats?: Stat[] | null } | null;
  focus?: { eyebrow?: string | null; heading?: string | null; intro?: string | null } | null;
  focusAreas?: SanityFocusArea[] | null;
  closingCta?:
    | { heading?: string | null; body?: string | null; primaryLabel?: string | null; primaryHref?: string | null }
    | null;
} | null;

export default function CsrPageContent({ data }: { data?: CsrPageData }) {
  const hero = data?.hero;
  const impact = data?.impact;
  const focus = data?.focus;
  const cc = data?.closingCta;

  const stats = impact?.stats?.length ? impact.stats : IMPACT;
  const areas = resolveCsrAreas(data?.focusAreas);

  return (
    <main className="bg-beige">
      <PageHero
        eyebrow={str(hero?.eyebrow, "Corporate Social Responsibility")}
        heading={str(hero?.heading, "Investing in the communities we call home.")}
        intro={str(
          hero?.intro,
          "For Madhav KRG Group, responsibility reaches beyond the plant gate. Across education, health, the environment and rural livelihoods, our CSR work helps the people and places around our operations build a stronger, more dignified future.",
        )}
        imageUrl={hero?.imageUrl || PLACEHOLDER_IMAGES.csr.hero}
        imageAlt={str(hero?.imageAlt, "Madhav KRG Group community work")}
      />

      {/* Impact band */}
      <section className="bg-deep-green py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-light-green">
              {str(impact?.eyebrow, "Our impact so far")}
            </span>
            <p className="mt-3 font-serif text-2xl leading-snug text-white sm:text-3xl">
              {str(
                impact?.heading,
                "Measured not in numbers alone, but in the lives they represent.",
              )}
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={`${stat.label}-${i}`}
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
              {str(focus?.eyebrow, "Where we focus")}
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              {str(focus?.heading, "Six focus areas, one commitment.")}
            </AnimatedHeading>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              {str(
                focus?.intro,
                "Each focus area runs as a set of on-the-ground programmes in the villages and towns around our plants. Explore any area to see the work in detail.",
              )}
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {areas.map((area, i) => {
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
                {str(cc?.heading, "Partner with us on the ground.")}
              </AnimatedHeading>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                {str(
                  cc?.body,
                  "Whether you represent a panchayat, a school, an NGO or a fellow business, we welcome partners who want to extend this work to more communities.",
                )}
              </p>
              <Link
                href={str(cc?.primaryHref, "/contact")}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-deep-green transition-colors hover:bg-light-green"
              >
                {str(cc?.primaryLabel, "Get in touch")}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
