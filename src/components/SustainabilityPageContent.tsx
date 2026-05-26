"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowRight,
  HandHeart,
  HeartHandshake,
  Leaf,
  Recycle,
  ShieldCheck,
  Sprout,
  Sun,
  TreePine,
  Wind,
  Zap,
} from "lucide-react";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import mkrg3 from "@/Images/mkrg (3).jpeg";
import mkrg4 from "@/Images/mkrg (4).jpeg";
import mkrg5 from "@/Images/mkrg (5).jpeg";
import mkrg8 from "@/Images/mkrg (8).jpeg";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";
import TiltCard from "./TiltCard";

type PillarImage = string | import("next/image").StaticImageData;

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
    image: mkrg4,
  },
  {
    title: "Less Energy Consumption",
    body: "Recycled steel needs a fraction of the energy of primary smelting.",
    icon: Zap,
    image: mkrg5,
  },
  {
    title: "Less Carbon Emission",
    body: "Up to 86% lower CO₂ versus the virgin route verified, not estimated.",
    icon: Wind,
  },
  {
    title: "Greener Planet",
    body: "Every closed loop is one less open one. The math is simple; the work is not.",
    icon: TreePine,
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

const SUBPAGES = [
  {
    title: "Environmental Impact",
    body: "The full numbers behind avoided emissions, conserved resources and energy savings.",
    href: "/sustainability/environmental-impact",
    icon: Leaf,
  },
  {
    title: "Recycling Statistics",
    body: "Plant-by-plant throughput, output streams and APCD performance.",
    href: "/sustainability/recycling-statistics",
    icon: Recycle,
  },
  {
    title: "Community Programs",
    body: "CSR initiatives and EHS programs in the regions where we operate.",
    href: "/sustainability/community-programs",
    icon: HandHeart,
  },
];

function ImpactMetrics() {
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
      {METRICS.map((m, i) => (
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

export default function SustainabilityPageContent() {
  return (
    <main className="bg-beige">
      <PageHero
        eyebrow="Sustainability"
        heading="Real numbers. Cleaner air. Real communities."
        intro="Sustainability at Madhav KRG Group isn't a line item it is the business model. Every tonne we process avoids emissions, conserves resources and supports the communities we operate in."
        imageUrl={PLACEHOLDER_IMAGES.sustHero}
        imageAlt="Green plant operations"
        videoUrl="/videos/sustainability-hero.mp4"
        videoPoster={typeof PLACEHOLDER_IMAGES.sustHero === "string" ? PLACEHOLDER_IMAGES.sustHero : undefined}
      />

      {/* Environmental impact metrics */}
      <section className="bg-deep-green py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-white/80">
              Environmental impact
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Our impact, measured.
            </AnimatedHeading>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              Verified figures from the most recent financial year. Every metric is
              auditable and traceable back to the plant floor.
            </p>
          </div>

          <ImpactMetrics />
        </div>
      </section>

      {/* Pillars / Visuals brief */}
      <section className="bg-beige py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">
                Pillars of impact
              </span>
              <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
                Five outcomes the process is designed for.
              </AnimatedHeading>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed text-body sm:text-lg">
                Environment protection, resource conservation, less energy, less carbon,
                a greener planet each pillar is a metric, not a slogan.
              </p>
            </div>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
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
                      <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-accent backdrop-blur">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
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
                Two output streams. One closed loop.
              </AnimatedHeading>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                Scrap is converted to structural steel; hazardous flue dust is processed
                into commercial-grade zinc. Air Pollution Control Devices keep what is
                left of the airborne stream well within Indian Standards.
              </p>

              <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/15 md:grid-cols-3">
                {RECYCLING_STATS.map((s) => (
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
                  src={mkrg3}
                  alt="CSR program"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-accent backdrop-blur">
                  <HeartHandshake className="h-5 w-5" aria-hidden />
                </div>
              </div>
              <div className="p-8 sm:p-10">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  CSR
                </span>
                <h3 className="mt-3 font-serif text-2xl leading-snug text-ink">
                  Corporate social responsibility
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
                  src={mkrg8}
                  alt="EHS program"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-accent backdrop-blur">
                  <Sun className="h-5 w-5" aria-hidden />
                </div>
              </div>
              <div className="p-8 sm:p-10">
                <span className="text-xs font-medium uppercase tracking-wider text-teal">
                  EHS
                </span>
                <h3 className="mt-3 font-serif text-2xl leading-snug text-ink">
                  Environment, health &amp; safety
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

      {/* Sub-pages nav */}
      <section className="bg-gradient-to-b from-[#F0FCF5] via-[#D5F7E4] to-[#A8F0C6] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-black">
              Go deeper
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-black sm:text-4xl lg:text-5xl">
              Sustainability, in three parts.
            </AnimatedHeading>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {SUBPAGES.map((s, i) => {
              const Icon = s.icon;
              const img =
                PLACEHOLDER_IMAGES.sustSubpages[i % PLACEHOLDER_IMAGES.sustSubpages.length];
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={s.href}
                    data-cursor="grow"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-xl"
                  >
                    <div className="relative aspect-[5/3] w-full overflow-hidden">
                      <Image
                        src={img}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                      <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-accent backdrop-blur">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-serif text-xl leading-snug text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-body">
                        {s.body}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-deep-green underline-offset-4 group-hover:underline">
                        Read more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}

