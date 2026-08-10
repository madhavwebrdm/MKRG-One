"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Factory, Recycle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";
import ParallaxImpact from "./ParallaxImpact";

const IMG = PLACEHOLDER_IMAGES.product;

/* -------------------------------------------------------------------------- */
/* Sanity data shape (all optional; we fall back to the built-in design)       */
/* -------------------------------------------------------------------------- */

type SanityImg = { imageUrl?: string | null; imageAlt?: string | null };

type FamilyData = SanityImg & {
  title?: string | null;
  tagline?: string | null;
  icon?: string | null;
};

type ApplicationItem = { title?: string | null; body?: string | null };

type SectionData = {
  eyebrow?: string | null;
  heading?: string | null;
  intro?: string | null;
  products?: Array<SanityImg & { name?: string | null; description?: string | null }> | null;
  calloutTitle?: string | null;
  calloutBody?: string | null;
  noteHeading?: string | null;
  noteBody?: string | null;
  noteSpecs?: Array<{ label?: string | null; value?: string | null }> | null;
};

export type ProductPageData = {
  hero?:
    | (SanityImg & { eyebrow?: string | null; heading?: string | null; intro?: string | null })
    | null;
  overview?:
    | {
        eyebrow?: string | null;
        heading?: string | null;
        intro?: string | null;
        families?: FamilyData[] | null;
        applications?:
          | {
              items?: ApplicationItem[] | null;
              ctaLabel?: string | null;
              ctaHref?: string | null;
            }
          | null;
      }
    | null;
  zinc?: SectionData | null;
  closingCta?:
    | { heading?: string | null; body?: string | null; primaryLabel?: string | null; primaryHref?: string | null }
    | null;
} | null;

/* -------------------------------------------------------------------------- */
/* Built-in fallback content                                                   */
/* -------------------------------------------------------------------------- */

const ICON_MAP: Record<string, LucideIcon> = { factory: Factory, recycle: Recycle };
const iconFor = (key: string | null | undefined, fallback: LucideIcon): LucideIcon =>
  (key && ICON_MAP[key]) || fallback;

/** Return the value if it is a non-empty string, otherwise the fallback. */
const str = (v: string | null | undefined, fallback: string): string =>
  v && v.trim() ? v : fallback;

type Overview = {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  image: string;
};

const OVERVIEW: Overview[] = [
  {
    id: "commercial-zinc",
    icon: Recycle,
    title: "Commercial Zinc",
    tagline:
      "Recovered from hazardous industrial waste through advanced hydrometallurgical recovery.",
    image: IMG.zinc,
  },
];

const ZINC_APPLICATIONS: Array<{ title: string; body: string }> = [
  {
    title: "Galvanization",
    body: "Over half of all zinc ingots produced each year go into galvanization, dipping steel into molten zinc to shield it from corrosion.",
  },
  {
    title: "Zinc Alloys",
    body: "Combined with metals like aluminum and copper, zinc forms alloys used across industry, brass for plumbing, electrical fittings and musical instruments; ZL12, a 12% aluminum-zinc alloy for gravity casting; and ZL5, copper-strengthened for automotive parts.",
  },
  {
    title: "Battery Production",
    body: "Zinc ingots are a core input in dry-cell batteries, driving the voltage generation that powers them.",
  },
  {
    title: "Zinc Oxide & Pharmaceutical Use",
    body: "Zinc ingots can be refined into zinc oxide, which is widely used in rubber, ceramics, chemicals, and pharmaceuticals. In healthcare, zinc oxide supports skin protection, antimicrobial and soothing applications, oral and dental care, and dietary supplements.",
  },
  {
    title: "Electroplating",
    body: "Applied as a protective, decorative coating on metal surfaces, guarding against oxidation while adding durability.",
  },
  {
    title: "Manufacturing & Industrial Use",
    body: "Beyond the above, zinc ingots support chemical processing, furniture manufacturing and automotive production.",
  },
];

type RangeItem = { name: string; desc: string; image: string };

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

const ZINC_INGOT_SPECS: Array<{ label: string; value: string }> = [
  { label: "Dimensions", value: "485 × 245 × 33 MM (L × W × T)" },
  { label: "Weight", value: "25 KG per ingot" },
  { label: "Bundle", value: "40 Ingots / Bundle · 1000 KG Total" },
  { label: "Composition", value: "99.7% Purity" },
  { label: "Testing", value: "MP-AES Tested for uniform purity" },
  { label: "Plant Capacity", value: "6,000 MT P.A." },
];

const EASE = [0.16, 1, 0.3, 1] as const;

/** Merge Sanity range products over a built-in fallback range. */
function mergeRange(
  products: SectionData["products"],
  fallback: RangeItem[],
): RangeItem[] {
  if (!products?.length) return fallback;
  return products.map((p, i) => ({
    name: str(p.name, fallback[i]?.name ?? `Product ${i + 1}`),
    desc: str(p.description, fallback[i]?.desc ?? ""),
    image: p.imageUrl || fallback[i % fallback.length].image,
  }));
}

/* -------------------------------------------------------------------------- */

export default function ProductPageContent({ data }: { data?: ProductPageData }) {
  const hero = data?.hero;
  const ov = data?.overview;
  const zn = data?.zinc;
  const cc = data?.closingCta;

  const families: Overview[] = ov?.families?.length
    ? ov.families.map((f, i) => ({
        id: `${f.title ?? "family"}-${i}`,
        icon: iconFor(f.icon, OVERVIEW[i]?.icon ?? Factory),
        title: str(f.title, OVERVIEW[i]?.title ?? `Product family ${i + 1}`),
        tagline: str(f.tagline, OVERVIEW[i]?.tagline ?? ""),
        image: f.imageUrl || OVERVIEW[i]?.image || IMG.hero,
      }))
    : OVERVIEW;

  const zincApplications = ov?.applications?.items?.length
    ? ov.applications.items.map((a) => ({ title: str(a.title, ""), body: str(a.body, "") }))
    : ZINC_APPLICATIONS;

  return (
    <main className="bg-beige">
      <PageHero
        eyebrow={str(hero?.eyebrow, "Our Products")}
        heading={str(
          hero?.heading,
          "High-purity zinc, recovered from waste.",
        )}
        intro={str(
          hero?.intro,
          "From hazardous industrial waste, we recover high-purity zinc products that power galvanizing, alloy manufacturing and sustainable growth.",
        )}
        imageUrl={hero?.imageUrl || IMG.hero}
        imageAlt={str(hero?.imageAlt, "Madhav KRG Group zinc products")}
      />

      {/* Product family overview */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              {str(ov?.eyebrow, "Commercial Zinc")}
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              {str(ov?.heading, "One closed loop, high-purity zinc.")}
            </AnimatedHeading>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              {str(
                ov?.intro,
                "The hazardous waste that industrial manufacturing would otherwise send to landfill is recovered as commercial-grade zinc.",
              )}
            </p>
          </div>

          {/* Commercial Zinc, full width */}
          <div className="mt-14 space-y-6">
            {families.map((item, i) => (
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
                  <h2 className="absolute bottom-4 left-5 font-serif text-2xl text-white sm:text-3xl">
                    {item.title}
                  </h2>
                </div>

                <div className="flex flex-1 flex-col p-8 sm:p-10">
                  <p className="text-base leading-relaxed text-body sm:text-lg">
                    {item.tagline}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Zinc applications, full width */}
          <div className="mt-20">
            <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {zincApplications.map((a, i) => (
                <motion.li
                  key={a.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                  className="flex h-full flex-col rounded-2xl border border-deep-green/15 bg-beige p-6"
                >
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent/10 font-serif text-sm text-accent">
                    {i + 1}
                  </span>
                  <h4 className="mt-4 font-serif text-lg leading-snug text-ink">
                    {a.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {a.body}
                  </p>
                </motion.li>
              ))}
            </ol>

            <Link
              href={str(ov?.applications?.ctaHref, "/processes")}
              className="group mt-10 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-deep-green transition-colors hover:text-accent"
            >
              {str(ov?.applications?.ctaLabel, "Explore the process")}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </section>

      <ParallaxImpact
        heading={"Recycled. Certified.\nReady for Industry."}
        imageUrl="/images/product-parallax.jpeg"
      />

      {/* Zinc detail */}
      <ProductRange
        id="commercial-zinc-detail"
        background="white"
        eyebrow={str(zn?.eyebrow, "Commercial Zinc")}
        heading={str(zn?.heading, "High-Purity Zinc Recovered Through Circular Innovation")}
        intro={str(
          zn?.intro,
          "Commercial-grade zinc products are recovered from industrial waste streams and refined to 99.9% purity.",
        )}
        items={mergeRange(zn?.products, ZINC_RANGE)}
        columns={3}
        callout={{
          title: str(zn?.calloutTitle, "Turning Waste into Resource"),
          body: str(
            zn?.calloutBody,
            "Every tonne of zinc recovered represents hazardous waste diverted from landfill and valuable material returned to industrial use.",
          ),
        }}
        note={{
          heading: str(zn?.noteHeading, "Built for consistent, certified supply."),
          body: str(
            zn?.noteBody,
            "Every batch is tested for purity and traceable back to the waste stream it was recovered from, so partners can plan around a supply that meets specification every time.",
          ),
          specs: zn?.noteSpecs?.length
            ? zn.noteSpecs.map((s) => ({ label: s.label ?? "", value: s.value ?? "" }))
            : ZINC_INGOT_SPECS,
        }}
      />

      {/* CTA */}
      <section className="bg-deep-green py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <AnimatedHeading className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                {str(cc?.heading, "Looking for a reliable supply of commercial zinc?")}
              </AnimatedHeading>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
                {str(
                  cc?.body,
                  "Talk to our team about grades, volumes and certifications for your project or production line.",
                )}
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Link
                href={str(cc?.primaryHref, "/contact")}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-deep-green transition-colors hover:bg-light-green"
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

type ProductRangeProps = {
  id: string;
  background: "beige" | "white";
  eyebrow: string;
  heading: string;
  intro: string;
  items: RangeItem[];
  columns: 3 | 4;
  callout: { title: string; body: string };
  note?: { heading: string; body: string; specs?: Array<{ label: string; value: string }> };
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
  note,
}: ProductRangeProps) {
  const sectionBg = background === "beige" ? "bg-beige" : "bg-white";
  const gridCols =
    columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";

  const [pairedItem, ...restItems] = items;
  const gridItems = note ? restItems : items;

  const renderCard = (item: RangeItem, i: number) => (
    <motion.li
      key={`${item.name}-${i}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-deep-green/10 transition-shadow hover:shadow-xl"
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
      <div className="flex flex-1 flex-col justify-center p-6">
        <h3 className="font-serif text-xl leading-snug text-ink">
          {item.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-body">
          {item.desc}
        </p>
      </div>
    </motion.li>
  );

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
          {gridItems.map((item, i) => renderCard(item, i))}
        </ul>

        {note && (
          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <ul className="flex">{renderCard(pairedItem, 0)}</ul>

            {note.specs && note.specs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-deep-green/15 bg-white"
              >
                <dl className="flex flex-1 flex-col divide-y divide-deep-green/10">
                  {note.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex flex-1 items-center justify-between gap-6 px-6 py-4"
                    >
                      <dt className="text-sm font-medium uppercase tracking-wider text-muted">
                        {s.label}
                      </dt>
                      <dd className="text-right text-sm leading-relaxed text-ink">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            )}
          </div>
        )}

        {note && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-10"
          >
            <h3 className="font-serif text-2xl leading-snug text-ink sm:text-3xl">
              {note.heading}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
              {note.body}
            </p>
          </motion.div>
        )}

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
