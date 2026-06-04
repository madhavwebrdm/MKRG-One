"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { CSR_FOCUS_AREAS, getCsrFocusArea } from "@/lib/csr";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";

export default function CsrFocusAreaContent({ slug }: { slug: string }) {
  const area = getCsrFocusArea(slug);
  if (!area) return null;

  const others = CSR_FOCUS_AREAS.filter((a) => a.slug !== area.slug);

  return (
    <main className="bg-beige">
      <PageHero
        eyebrow="Corporate Social Responsibility"
        heading={area.title}
        intro={area.summary}
        imageUrl={area.heroImage}
        imageAlt={area.title}
      />

      {/* Back link + stats */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Link
            href="/csr"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-deep-green transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All focus areas
          </Link>

          <dl className="mt-8 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
            {area.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-deep-green/10 bg-beige p-6"
              >
                <dt className="font-serif text-3xl text-ink sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1.5 text-sm text-body">{stat.label}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      {/* Initiatives */}
      <section className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              On the ground
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
              How the work happens.
            </AnimatedHeading>
          </div>

          <div className="mt-16 flex flex-col gap-20 sm:gap-24">
            {area.initiatives.map((it, i) => {
              const imageFirst = i % 2 === 0;
              return (
                <motion.article
                  key={it.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-3xl shadow-sm ring-1 ring-deep-green/10 ${
                      imageFirst ? "" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={it.image}
                      alt={it.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div className={imageFirst ? "" : "lg:order-1"}>
                    <span className="text-xs font-medium uppercase tracking-wider text-muted">
                      {String(i + 1).padStart(2, "0")} / {String(area.initiatives.length).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl leading-snug text-ink sm:text-3xl">
                      {it.title}
                    </h3>
                    <div className="mt-4 space-y-4">
                      {it.body.map((p, pi) => (
                        <p key={pi} className="text-base leading-relaxed text-body">
                          {p}
                        </p>
                      ))}
                    </div>
                    {it.bullets && it.bullets.length > 0 && (
                      <ul className="mt-6 space-y-2.5">
                        {it.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-sm text-body">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                              <Check className="h-3 w-3" aria-hidden />
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other focus areas */}
      <section className="bg-beige py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex items-end justify-between gap-6">
            <AnimatedHeading className="font-serif text-2xl leading-tight text-ink sm:text-3xl">
              Explore other focus areas
            </AnimatedHeading>
            <Link
              href="/csr"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-deep-green transition-colors hover:text-accent sm:inline-flex"
            >
              View all
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((a) => {
              const Icon = a.icon;
              return (
                <li key={a.slug}>
                  <Link
                    href={`/csr/${a.slug}`}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-deep-green/10 bg-white p-5 transition-colors hover:border-deep-green/30"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-serif text-lg leading-snug text-ink">
                        {a.title}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-muted">
                        {a.cardStat.value} · {a.cardStat.label}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-deep-green transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
