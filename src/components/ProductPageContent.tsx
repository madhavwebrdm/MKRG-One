"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Factory, Recycle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";

const IMG = PLACEHOLDER_IMAGES.product;

type Overview = {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  image: string;
  products: string[];
  applications: string[];
  cta: { label: string; href: string };
};

const OVERVIEW: Overview[] = [
  {
    id: "green-steel",
    icon: Factory,
    title: "Green Steel",
    tagline:
      "Produced from recycled ferrous scrap through our advanced steel recovery ecosystem.",
    image: IMG.greenSteel,
    products: ["TMT Bars", "Structural Steel", "Steel Pipes", "Hot Rolled Coils"],
    applications: [
      "Construction",
      "Infrastructure Projects",
      "Industrial Manufacturing",
      "Engineering & Fabrication",
    ],
    cta: { label: "Explore Green Steel Process", href: "/processes#processes" },
  },
  {
    id: "commercial-zinc",
    icon: Recycle,
    title: "Commercial Zinc",
    tagline:
      "Recovered from hazardous industrial waste through advanced hydrometallurgical recovery.",
    image: IMG.zinc,
    products: ["Zinc Ingots", "Zinc Sheets", "Industrial Zinc Feedstock"],
    applications: [
      "Galvanizing",
      "Metal Coating",
      "Alloy Manufacturing",
      "Chemical Industries",
    ],
    cta: { label: "Explore Commercial Zinc Process", href: "/processes" },
  },
];

type RangeItem = { name: string; desc: string; image: string };

const STEEL_RANGE: RangeItem[] = [
  {
    name: "TMT Bars",
    desc: "High-strength reinforcement steel for residential, commercial and infrastructure projects.",
    image: IMG.steelRange[0],
  },
  {
    name: "Structural Steel",
    desc: "Reliable sections and billets for fabrication and engineering applications.",
    image: IMG.steelRange[1],
  },
  {
    name: "Steel Pipes",
    desc: "Durable piping solutions for industrial and structural requirements.",
    image: IMG.steelRange[2],
  },
  {
    name: "Hot Rolled Coils",
    desc: "Versatile steel products for downstream manufacturing.",
    image: IMG.steelRange[3],
  },
];

const ZINC_RANGE: RangeItem[] = [
  {
    name: "Zinc Ingots",
    desc: "Industrial-grade zinc suitable for galvanizing and alloy production.",
    image: IMG.zincRange[0],
  },
  {
    name: "Zinc Sheets",
    desc: "Consistent quality sheets for manufacturing applications.",
    image: IMG.zincRange[1],
  },
  {
    name: "Zinc Feedstock",
    desc: "Reliable raw material for downstream industrial processes.",
    image: IMG.zincRange[2],
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ProductPageContent() {
  return (
    <main className="bg-beige">
      <PageHero
        eyebrow="Our Products"
        heading="Certified steel and high-purity zinc, recovered from waste."
        intro="From industrial scrap and hazardous waste, we create certified steel and high-purity zinc products that power infrastructure, manufacturing and sustainable growth."
        imageUrl={IMG.hero}
        imageAlt="Madhav KRG Group steel and zinc products"
      />

      {/* Two product families overview */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Two output streams
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              One closed loop, two families of products.
            </AnimatedHeading>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              Industrial scrap returns as structural steel, while the hazardous
              waste that steel-making would otherwise send to landfill is
              recovered as commercial zinc.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {OVERVIEW.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                  className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-deep-green/10"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-green/80 via-deep-green/15 to-transparent" />
                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-deep-green shadow-sm">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h2 className="absolute bottom-4 left-5 font-serif text-2xl text-white sm:text-3xl">
                      {item.title}
                    </h2>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <p className="text-base leading-relaxed text-body">
                      {item.tagline}
                    </p>

                    <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
                          Products include
                        </p>
                        <ul className="mt-3 space-y-2">
                          {item.products.map((p) => (
                            <li
                              key={p}
                              className="flex items-start gap-2.5 text-sm text-body"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deep-green" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
                          Applications
                        </p>
                        <ul className="mt-3 space-y-2">
                          {item.applications.map((a) => (
                            <li
                              key={a}
                              className="flex items-start gap-2.5 text-sm text-body"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-light-green" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link
                      href={item.cta.href}
                      className="group mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-deep-green transition-colors hover:text-accent"
                    >
                      {item.cta.label}
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Green Steel detail */}
      <ProductRange
        id="green-steel-detail"
        background="beige"
        eyebrow="Green Steel"
        heading="Certified Green Steel for Tomorrow's Infrastructure"
        intro="Produced through responsible recycling and engineered to meet the demands of modern construction and manufacturing."
        items={STEEL_RANGE}
        columns={4}
        callout={{
          title: "Transforming Waste into Value",
          body: "Instead of extracting virgin resources, our steel products are created by returning valuable scrap to productive use, reducing waste, conserving resources and lowering emissions across the value chain.",
        }}
      />

      {/* Zinc detail */}
      <ProductRange
        id="commercial-zinc-detail"
        background="white"
        eyebrow="Commercial Zinc"
        heading="High-Purity Zinc Recovered Through Circular Innovation"
        intro="Commercial-grade zinc products are recovered from industrial waste streams and refined to 99.9% purity."
        items={ZINC_RANGE}
        columns={3}
        callout={{
          title: "Turning Waste into Resource",
          body: "Every tonne of zinc recovered represents hazardous waste diverted from landfill and valuable material returned to industrial use.",
        }}
      />

      {/* CTA */}
      <section className="bg-deep-green py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <AnimatedHeading className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                Looking for a reliable supply of green steel or zinc?
              </AnimatedHeading>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
                Talk to our team about grades, volumes and certifications for your
                project or production line.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-deep-green transition-colors hover:bg-light-green"
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

type ProductRangeProps = {
  id: string;
  background: "beige" | "white";
  eyebrow: string;
  heading: string;
  intro: string;
  items: RangeItem[];
  columns: 3 | 4;
  callout: { title: string; body: string };
};

function ProductRange({
  id,
  background,
  eyebrow,
  heading,
  intro,
  items,
  columns,
  callout,
}: ProductRangeProps) {
  const sectionBg = background === "beige" ? "bg-beige" : "bg-white";
  const gridCols =
    columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section id={id} className={`${sectionBg} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
          <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            {heading}
          </AnimatedHeading>
          <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
            {intro}
          </p>
        </div>

        <ul className={`mt-14 grid grid-cols-1 gap-6 ${gridCols} lg:gap-8`}>
          {items.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-deep-green/10 transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl leading-snug text-ink">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {item.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-14 overflow-hidden rounded-3xl bg-deep-green px-8 py-12 sm:px-14 sm:py-14"
        >
          <div className="max-w-3xl">
            <h3 className="font-serif text-2xl leading-snug text-white sm:text-3xl">
              {callout.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              {callout.body}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
