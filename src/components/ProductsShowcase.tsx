"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";

type Product = {
  name: string;
  spec: string;
  body: string;
  image: string;
  href: string;
};

const PRODUCTS: Product[] = [
  {
    name: "TMT Bars",
    spec: "IS 1786",
    body: "Structural rebar — Fe 500D and Fe 550D grades, cold-twisted and quenched for high-rise and infrastructure use.",
    image: PLACEHOLDER_IMAGES.products[0],
    href: "/processes/materials#tmt",
  },
  {
    name: "Steel Pipes",
    spec: "IS 1239 / IS 3589",
    body: "Black and galvanised pipes for water, gas and structural applications across plant, civic and industrial sites.",
    image: PLACEHOLDER_IMAGES.products[2],
    href: "/processes/materials#pipe",
  },
  {
    name: "Steel Coils",
    spec: "IS 2062",
    body: "Hot-rolled coils for downstream fabrication — formability and weldability verified batch-by-batch.",
    image: PLACEHOLDER_IMAGES.products[1],
    href: "/processes/materials#coil",
  },
  {
    name: "Zinc",
    spec: "Galvanizing, Batteries",
    body: "99.9% pure zinc recovered from hazardous flue dust — the recycled alternative to mined ore.",
    image: PLACEHOLDER_IMAGES.products[3],
    href: "/processes/materials#zinc",
  },
  {
    name: "Lead Ingots",
    spec: "Secondary refined",
    body: "Refined secondary lead from closed-loop battery recycling — purity tested before despatch.",
    image: PLACEHOLDER_IMAGES.products[4],
    href: "/processes/materials#lead",
  },
];

export default function ProductsShowcase() {
  return (
    <section data-section="Products" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Recycled materials
            </span>
            <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              5 Products from Waste
            </AnimatedHeading>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-body sm:text-lg">
              Transforming hazardous waste into high-value resources — five
              output streams, every batch tested to Indian Standards and
              traceable end-to-end.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PRODUCTS.map((p, i) => (
            <motion.li
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-deep-green/10 bg-white transition-shadow hover:shadow-lg"
            >
              <Link
                href={p.href}
                data-cursor="grow"
                className="flex flex-1 flex-col"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-beige">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] backdrop-blur"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {p.spec}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-serif text-xl leading-tight text-ink">
                      {p.name}
                    </h3>
                    <span className="font-serif text-xs text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
                    {p.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                    Spec sheet
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
