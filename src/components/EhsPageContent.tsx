"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";

const str = (v: string | null | undefined, fallback: string): string =>
  v && v.trim() ? v : fallback;

export type EhsPageData = {
  hero?:
    | { eyebrow?: string | null; heading?: string | null; intro?: string | null; imageUrl?: string | null; imageAlt?: string | null }
    | null;
  comingSoon?: { eyebrow?: string | null; heading?: string | null; body?: string | null } | null;
  closingCta?:
    | { heading?: string | null; body?: string | null; primaryLabel?: string | null; primaryHref?: string | null }
    | null;
} | null;

export default function EhsPageContent({ data }: { data?: EhsPageData }) {
  const hero = data?.hero;
  const cs = data?.comingSoon;
  const cc = data?.closingCta;

  return (
    <main className="bg-beige">
      <PageHero
        eyebrow={str(hero?.eyebrow, "Environment, Health & Safety")}
        heading={str(hero?.heading, "Safety and stewardship, built into every shift.")}
        intro={str(
          hero?.intro,
          "From daily safety briefings and emission monitoring to occupational-health checks and incident transparency, EHS is how we keep our people and the environment around our plants protected.",
        )}
        imageUrl={hero?.imageUrl || PLACEHOLDER_IMAGES.sustEhs}
        imageAlt={str(hero?.imageAlt, "Madhav KRG Group environment, health and safety")}
      />

      {/* Coming soon */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            {str(cs?.eyebrow, "Coming soon")}
          </span>
          <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            {str(cs?.heading, "Our EHS story is on its way.")}
          </AnimatedHeading>
          <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
            {str(
              cs?.body,
              "We are putting together a detailed look at our environment, health and safety programs, the standards we hold ourselves to and the results they deliver across every site. Please check back soon.",
            )}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-green py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <AnimatedHeading className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                {str(cc?.heading, "Want to know more about our EHS practices?")}
              </AnimatedHeading>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
                {str(
                  cc?.body,
                  "Reach out to our team and we will be glad to share how we manage environment, health and safety across our operations.",
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
