"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ShieldCheck,
  Sprout,
  TreePine,
  Wind,
  Zap,
} from "lucide-react";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";
import TiltCard from "./TiltCard";

const str = (v: string | null | undefined, fallback: string): string =>
  v && v.trim() ? v : fallback;

type PillarImage = string | import("next/image").StaticImageData;

type Metric = { value: number; suffix?: string; label: string; note?: string };
type PillarView = { title: string; body: string; image?: PillarImage };
type StatRow = { label: string; value: string; note: string };

export type SustainabilityPageData = {
  hero?:
    | { eyebrow?: string | null; heading?: string | null; intro?: string | null; imageUrl?: string | null; imageAlt?: string | null }
    | null;
  metricsBlock?:
    | { eyebrow?: string | null; heading?: string | null; intro?: string | null; items?: Array<{ value?: number | null; suffix?: string | null; label?: string | null; note?: string | null }> | null }
    | null;
  pillars?:
    | { eyebrow?: string | null; heading?: string | null; intro?: string | null; items?: Array<{ title?: string | null; body?: string | null; icon?: string | null }> | null }
    | null;
  recyclingStats?:
    | { heading?: string | null; intro?: string | null; items?: Array<{ label?: string | null; value?: string | null; note?: string | null }> | null }
    | null;
  csrSection?: { eyebrow?: string | null; heading?: string | null; imageUrl?: string | null; imageAlt?: string | null } | null;
  ehsSection?: { eyebrow?: string | null; heading?: string | null; imageUrl?: string | null; imageAlt?: string | null } | null;
} | null;

const METRICS = [
  { value: 1.2, suffix: "M t", label: "CO₂ offset", note: "Avoided emissions per year" },
  { value: 850, suffix: "K t", label: "Tonnes recycled", note: "Steel, zinc and lead last FY" },
  { value: 42, suffix: "%", label: "Renewable energy", note: "Powering our plants today" },
];

const PILLARS: Array<{
  title: string;
  body: string;
  icon: typeof ShieldCheck;
  image?: PillarImage;
}> = [
  {
    title: "Environment Protection",
    body: "Hazardous waste reduction at source. Flue dust becomes commercial zinc instead of landfill.",
    icon: ShieldCheck,
  },
  {
    title: "Resource Conservation",
    body: "Every recycled tonne is a tonne of virgin iron ore that stays in the ground.",
    icon: Sprout,
    image: "/images/mkrg-4.jpeg",
  },
  {
    title: "Less Energy Consumption",
    body: "Recycled steel needs a fraction of the energy of primary smelting.",
    icon: Zap,
    image: "/images/mkrg-5.jpeg",
  },
  {
    title: "Less Carbon Emission",
    body: "Up to 86% lower CO₂ versus the virgin route verified, not estimated.",
    icon: Wind,
    image: "/images/solar.jpg",
  },
  {
    title: "Greener Planet",
    body: "Every closed loop is one less open one. The math is simple; the work is not.",
    icon: TreePine,
    image: "/images/green-planet.jpeg",
  },
];

const RECYCLING_STATS = [
  {
    label: "Scrap → Steel",
    value: "850K t",
    note: "Annual electric-arc furnace throughput, cast into billets and coils.",
  },
  {
    label: "Waste → Zinc",
    value: "18K t",
    note: "Hazardous flue dust converted to commercial-grade zinc concentrate.",
  },
  {
    label: "APCD efficiency",
    value: "99.4%",
    note: "Particulate capture across all stacks well above the IS threshold.",
  },
];

function ImpactMetrics({ metrics }: { metrics: Metric[] }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const numbers = root.current?.querySelectorAll<HTMLElement>(".sust-metric-number");
      numbers?.forEach((el) => {
        const target = Number(el.dataset.target ?? "0");
        const decimals = target % 1 !== 0 ? 1 : 0;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = obj.val.toFixed(decimals);
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3"
    >
      {metrics.map((m, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 bg-deep-green/60 p-7 backdrop-blur sm:p-8"
        >
          <div className="flex items-baseline gap-1 font-serif text-5xl tracking-tight text-white sm:text-6xl">
            <span className="sust-metric-number" data-target={m.value}>
              0
            </span>
            {m.suffix && (
              <span className="text-2xl text-white/80 sm:text-3xl">{m.suffix}</span>
            )}
          </div>
          <p className="mt-1 text-sm font-medium uppercase tracking-wider text-white/90">
            {m.label}
          </p>
          <p className="text-sm text-white/70">{m.note}</p>
        </div>
      ))}
    </div>
  );
}

export default function SustainabilityPageContent({
  data,
}: {
  data?: SustainabilityPageData;
}) {
  const hero = data?.hero;
  const mb = data?.metricsBlock;
  const pl = data?.pillars;
  const rs = data?.recyclingStats;
  const csr = data?.csrSection;
  const ehs = data?.ehsSection;

  const metrics: Metric[] = mb?.items?.length
    ? mb.items.map((m) => ({
        value: m.value ?? 0,
        suffix: m.suffix ?? undefined,
        label: m.label ?? "",
        note: m.note ?? "",
      }))
    : METRICS;

  const pillarsItems: PillarView[] = pl?.items?.length
    ? pl.items.map((p, i) => ({
        title: p.title ?? "",
        body: p.body ?? "",
        image: PLACEHOLDER_IMAGES.sustPillars[i % PLACEHOLDER_IMAGES.sustPillars.length],
      }))
    : PILLARS.map((p) => ({ title: p.title, body: p.body, image: p.image }));

  const recyclingItems: StatRow[] = rs?.items?.length
    ? rs.items.map((s) => ({
        label: s.label ?? "",
        value: s.value ?? "",
        note: s.note ?? "",
      }))
    : RECYCLING_STATS;

  return (
    <main className="bg-beige">
      <PageHero
        eyebrow={str(hero?.eyebrow, "Sustainability")}
        heading={hero?.heading?.trim() ? hero.heading : "Real numbers.\nCleaner air. Real communities."}
        intro={str(
          hero?.intro,
          "Sustainability at Madhav KRG Group isn't a line item it is the business model. Every tonne we process avoids emissions, conserves resources and supports the communities we operate in.",
        )}
        imageUrl={hero?.imageUrl || PLACEHOLDER_IMAGES.sustHero}
        imageAlt={str(hero?.imageAlt, "Green plant operations")}
        videoUrl="/videos/sustainability-hero.mp4"
        videoPoster="/images/sustainability-hero-poster.jpg"
      />

      {/* Environmental impact metrics */}
      <section className="bg-deep-green py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-white/80">
              {str(mb?.eyebrow, "Environmental impact")}
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              {str(mb?.heading, "Our impact, measured.")}
            </AnimatedHeading>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              {str(
                mb?.intro,
                "Verified figures from the most recent financial year. Every metric is auditable and traceable back to the plant floor.",
              )}
            </p>
          </div>

          <ImpactMetrics metrics={metrics} />
        </div>
      </section>

      {/* Pillars / Visuals brief */}
      <section className="bg-beige py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">
                {str(pl?.eyebrow, "Pillars of impact")}
              </span>
              <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
                {str(pl?.heading, "Five outcomes the process is designed for.")}
              </AnimatedHeading>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed text-body sm:text-lg">
                {str(
                  pl?.intro,
                  "Environment protection, resource conservation, less energy, less carbon, a greener planet each pillar is a metric, not a slogan.",
                )}
              </p>
            </div>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillarsItems.map((p, i) => {
              const img: PillarImage =
                p.image ??
                PLACEHOLDER_IMAGES.sustPillars[i % PLACEHOLDER_IMAGES.sustPillars.length];
              return (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <TiltCard className="group h-full overflow-hidden rounded-2xl bg-white">
                    <div className="relative aspect-[5/4] w-full overflow-hidden">
                      <Image
                        src={img}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-green/55 via-transparent to-transparent" />
                    </div>
                    <div className="p-7">
                      <h3 className="font-serif text-2xl leading-snug text-ink">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-body">
                        {p.body}
                      </p>
                    </div>
                  </TiltCard>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Recycling statistics */}
      <section
        className="relative isolate overflow-hidden bg-brand-green py-24 text-white sm:py-32"
        style={{
          backgroundImage: `url(${PLACEHOLDER_IMAGES.metricsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-green/85 via-brand-green/80 to-brand-green/90" />
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
                src={PLACEHOLDER_IMAGES.sustStatsAccent}
                alt="Electric arc furnace"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/55 via-transparent to-transparent" />
            </motion.div>

            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.2em] text-white/80">
                Recycling statistics
              </span>
              <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                {str(rs?.heading, "Two output streams. One closed loop.")}
              </AnimatedHeading>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                {str(
                  rs?.intro,
                  "Scrap is converted to structural steel; hazardous flue dust is processed into commercial-grade zinc. Air Pollution Control Devices keep what is left of the airborne stream well within International Standards.",
                )}
              </p>

              <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/15 md:grid-cols-3">
                {recyclingItems.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col gap-2 bg-brand-green p-6 sm:p-7"
                  >
                    <dt className="text-xs font-medium uppercase tracking-wider text-white/85">
                      {s.label}
                    </dt>
                    <dd className="font-serif text-4xl leading-none text-white sm:text-5xl">
                      {s.value}
                    </dd>
                    <p className="text-sm leading-relaxed text-white/85">{s.note}</p>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Community programs CSR + EHS */}
      <section className="bg-beige py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Community programs
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Recycling that gives back beyond the gate.
            </AnimatedHeading>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              Our work doesn&apos;t end at the plant boundary. CSR and EHS programs run
              year-round across every site, in partnership with the people who live and
              work nearest to us.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group overflow-hidden rounded-2xl bg-white"
            >
              <div className="relative aspect-[5/3] w-full overflow-hidden">
                <Image
                  src={csr?.imageUrl || "/images/mkrg-3.jpeg"}
                  alt="CSR program"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              </div>
              <div className="p-8 sm:p-10">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  {str(csr?.eyebrow, "CSR")}
                </span>
                <h3 className="mt-3 font-serif text-2xl leading-snug text-ink">
                  {str(csr?.heading, "Corporate social responsibility")}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-body">
                  Skills training, school infrastructure, healthcare access and water
                  programs our CSR spend is concentrated in the catchment of every
                  operating plant, where impact is local and visible.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group overflow-hidden rounded-2xl bg-white"
            >
              <div className="relative aspect-[5/3] w-full overflow-hidden">
                <Image
                  src={ehs?.imageUrl || "/images/mkrg-8.jpeg"}
                  alt="EHS program"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              </div>
              <div className="p-8 sm:p-10">
                <span className="text-xs font-medium uppercase tracking-wider text-teal">
                  {str(ehs?.eyebrow, "EHS")}
                </span>
                <h3 className="mt-3 font-serif text-2xl leading-snug text-ink">
                  {str(ehs?.heading, "Environment, health & safety")}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-body">
                  Daily safety briefings, emission monitoring, occupational-health checks
                  and incident transparency EHS is governance, not paperwork. Every
                  shift, every plant.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

    </main>
  );
}

