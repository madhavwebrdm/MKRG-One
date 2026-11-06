"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";
import TiltCard from "./TiltCard";

const str = (v: string | null | undefined, fallback: string): string =>
  v && v.trim() ? v : fallback;

type Article = {
  topic: string;
  title: string;
  source: string;
  date: string;
  href: string;
  imageUrl?: string;
  imageAlt?: string;
};

const ARTICLES: Article[] = [
  {
    topic: "Recycling innovation",
    title: "How India's recyclers are turning hazardous waste into high-purity zinc",
    source: "Economic Times",
    date: "2026-03-18",
    href: "#",
  },
  {
    topic: "Sustainability policy",
    title: "Inside the new EPR framework and what it means for hazardous-waste handlers",
    source: "Mint",
    date: "2026-02-04",
    href: "#",
  },
  {
    topic: "Circular economy",
    title: "From waste to spec: the case for closed-loop zinc in Indian industry",
    source: "Business Standard",
    date: "2026-01-22",
    href: "#",
  },
];

type ItemsSection<T> = {
  eyebrow?: string | null;
  heading?: string | null;
  intro?: string | null;
  items?: T[] | null;
} | null;

export type MediaPageData = {
  hero?:
    | { eyebrow?: string | null; heading?: string | null; intro?: string | null; imageUrl?: string | null; imageAlt?: string | null }
    | null;
  articlesSection?: ItemsSection<{
    topic?: string | null;
    title?: string | null;
    source?: string | null;
    date?: string | null;
    href?: string | null;
    imageUrl?: string | null;
    imageAlt?: string | null;
  }>;
} | null;

function formatDate(input: string) {
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return input;
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function MediaPageContent({ data }: { data?: MediaPageData }) {
  const hero = data?.hero;
  const articlesSection = data?.articlesSection;

  const articles: Article[] = articlesSection?.items?.length
    ? articlesSection.items.map((a) => ({
        topic: a.topic ?? "",
        title: a.title ?? "",
        source: a.source ?? "",
        date: a.date ?? "",
        href: a.href || "#",
        imageUrl: a.imageUrl ?? undefined,
        imageAlt: a.imageAlt ?? undefined,
      }))
    : ARTICLES;

  return (
    <main className="bg-mint">
      <PageHero
        eyebrow={str(hero?.eyebrow, "Media")}
        heading={str(
          hero?.heading,
          "Press, plant tours and the conversations shaping circular industry.",
        )}
        intro={str(
          hero?.intro,
          "Where Madhav KRG Environmental Solution Limited shows up on the page, on camera and on the ground at the forums where recycling policy and practice are being rewritten.",
        )}
        imageUrl={hero?.imageUrl || "/images/media-hero.jpeg"}
        imageAlt={str(hero?.imageAlt, "MKESL in the media")}
      />

      {/* Industry articles */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">
                {str(articlesSection?.eyebrow, "Industry articles")}
              </span>
              <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
                {str(articlesSection?.heading, "Recycling, sustainability policy and long-term resource use.")}
              </AnimatedHeading>
            </div>
            <p className="max-w-md text-base leading-relaxed text-body sm:text-lg">
              {str(
                articlesSection?.intro,
                "Independent coverage and analysis that frames the work MKESL and the wider industry are doing.",
              )}
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {articles.map((a, i) => (
              <motion.li
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard className="h-full">
                  <Link
                    href={a.href}
                    target={a.href.startsWith("http") ? "_blank" : undefined}
                    rel={a.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-mint ring-1 ring-forest/10 transition-colors hover:ring-forest/30"
                  >
                    <div className="relative aspect-[5/3] w-full overflow-hidden">
                      <Image
                        src={
                          a.imageUrl ||
                          PLACEHOLDER_IMAGES.mediaArticles[
                            i % PLACEHOLDER_IMAGES.mediaArticles.length
                          ]
                        }
                        alt={a.imageAlt ?? ""}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-accent">
                        {a.topic}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <p className="text-xs text-muted">{formatDate(a.date)}</p>
                      <h3 className="font-serif text-xl leading-snug text-ink group-hover:text-forest">
                        {a.title}
                      </h3>
                      <p className="mt-auto text-sm font-medium text-body">{a.source}</p>
                    </div>
                  </Link>
                </TiltCard>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
