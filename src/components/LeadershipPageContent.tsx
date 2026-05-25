"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Quote } from "lucide-react";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";
import { LinkedinIcon } from "./SocialIcons";

type Leader = {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
  email?: string;
};

const FOUNDER = {
  name: "Shri Madhav Bhai",
  role: "Founder & Chairman, Madhav KRG Group",
  story: [
    "Born to a family that knew the value of every kilogram of iron, the founder grew up watching scrap dealers haul end-of-life steel to dump-yards — and asked the question the country hadn't yet answered: why does any of this go to landfill?",
    "Across four decades, that question became Madhav KRG Group: one of India's most integrated recyclers, with steel, zinc and lead operations that share a single closed-loop design philosophy.",
    "Today the founder's focus is the next horizon — renewable-powered furnaces, deeper community programs and a recycling industry that supplies India's green infrastructure ambitions in full.",
  ],
};

const PULL_QUOTE = {
  text: "Recycling is not a side business — it is the only way we can build the infrastructure of tomorrow without exhausting the resources of today.",
  attribution: "Founder, Madhav KRG Group",
};

const LEADERSHIP: Leader[] = [
  {
    name: "Director — Operations",
    role: "Plant operations · Recycle2X",
    bio: "Three decades on the shop floor across steel and zinc recycling. Owns plant uptime, throughput and process discipline.",
    linkedin: "#",
  },
  {
    name: "Director — Sustainability",
    role: "EHS · CSR · ESG reporting",
    bio: "Leads environment, health and safety policy across every site, and shapes the group's ESG and community programs.",
    linkedin: "#",
  },
  {
    name: "Director — Sales & Marketing",
    role: "TMT · Pipe · Coil · Zinc · Lead",
    bio: "Builds the partner network for every output stream — from infrastructure majors to specialty manufacturers across India.",
    linkedin: "#",
  },
  {
    name: "Director — Finance",
    role: "Capital · Treasury · Compliance",
    bio: "Funds the capex roadmap and keeps every plant audit-ready under Indian accounting and corporate-governance standards.",
    linkedin: "#",
  },
  {
    name: "Head — Quality & Standards",
    role: "IS specifications · Certification",
    bio: "Owns the Indian Standards conformance program, from incoming scrap grading to finished-product traceability.",
    linkedin: "#",
  },
  {
    name: "Head — Human Resources",
    role: "People · Culture · Careers",
    bio: "Builds the team — from plant apprenticeships to engineering hires — and runs the group's training and safety culture.",
    email: "hr@mkrg.in",
  },
];

export default function LeadershipPageContent() {
  return (
    <main className="bg-beige">
      <PageHero
        eyebrow="Leadership"
        heading="Built by people who've spent decades closing the loop."
        intro="Madhav KRG Group is led by operators, not bystanders. The people on this page have been on the shop floor, in the audit room and in the field — often all in the same week."
        imageUrl={PLACEHOLDER_IMAGES.leadershipHero}
        imageAlt="MKRG leadership"
      />

      {/* Founder */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:col-span-5"
              data-cursor="grow"
            >
              <Image
                src={PLACEHOLDER_IMAGES.leadershipFounderFull}
                alt={FOUNDER.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/90 px-5 py-3.5 backdrop-blur">
                <Quote className="h-5 w-5 text-brand-green" />
                <div>
                  <p className="text-sm font-medium text-ink">{FOUNDER.name}</p>
                  <p className="text-xs text-muted">{FOUNDER.role}</p>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.2em] text-deep-green">
                Founder
              </span>
              <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
                A journey from scrap-yards to closed loops.
              </AnimatedHeading>
              <div className="mt-6 space-y-5">
                {FOUNDER.story.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-body sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote — environmental mission */}
      <section className="relative isolate overflow-hidden bg-deep-green py-24 text-white sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
          <Quote className="h-8 w-8 text-white/60" aria-hidden />
          <AnimatedHeading className="mt-6 font-serif text-3xl leading-snug text-white sm:text-4xl lg:text-[2.75rem]">
            {PULL_QUOTE.text}
          </AnimatedHeading>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] text-white/80">
            — {PULL_QUOTE.attribution}
          </p>
        </div>
      </section>

      {/* Leadership team grid */}
      <section className="bg-beige py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-deep-green">
              The team
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Directors and heads of function.
            </AnimatedHeading>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              The people who run plants, partnerships, people and standards — the work
              of Madhav KRG Group happens through them.
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP.map((l, i) => (
              <motion.li
                key={l.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={
                      PLACEHOLDER_IMAGES.leadershipTeam[
                        i % PLACEHOLDER_IMAGES.leadershipTeam.length
                      ]
                    }
                    alt={l.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-serif text-2xl leading-snug text-ink">
                    {l.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-green">
                    {l.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-body">{l.bio}</p>
                  {(l.linkedin || l.email) && (
                    <div className="mt-6 flex items-center gap-3">
                      {l.linkedin && (
                        <Link
                          href={l.linkedin}
                          aria-label={`${l.name} on LinkedIn`}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-deep-green/15 text-deep-green transition-colors hover:bg-deep-green hover:text-white"
                        >
                          <LinkedinIcon width={16} height={16} />
                        </Link>
                      )}
                      {l.email && (
                        <Link
                          href={`mailto:${l.email}`}
                          aria-label={`Email ${l.name}`}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-deep-green/15 text-deep-green transition-colors hover:bg-deep-green hover:text-white"
                        >
                          <Mail className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.div whileHover={{ x: 4 }} className="mt-14 inline-flex">
            <Link
              href="/contact"
              data-cursor="grow"
              className="inline-flex items-center gap-2 text-sm font-medium text-deep-green underline-offset-4 hover:underline"
            >
              Get in touch with the team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
