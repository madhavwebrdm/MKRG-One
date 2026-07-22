"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";

const str = (v: string | null | undefined, fallback: string): string =>
  v && v.trim() ? v : fallback;

type Principal = {
  name: string;
  title: string;
  portrait: string;
  pullQuote: string;
  body: string[];
};

type PrincipalInput = {
  name?: string | null;
  role?: string | null;
  story?: string | null;
  imageUrl?: string | null;
} | null;

export type LeadershipPageData = {
  hero?:
    | { eyebrow?: string | null; heading?: string | null; intro?: string | null; imageUrl?: string | null; imageAlt?: string | null }
    | null;
  founder?: PrincipalInput;
  pullQuote?: { text?: string | null; attribution?: string | null } | null;
  director?: PrincipalInput;
  additionalLeaders?: PrincipalInput[] | null;
} | null;

const MD: Principal = {
  name: "Sudhir Goyal",
  title: "Managing Director",
  portrait: "/images/leadership/sudhir-goyal.jpg",
  pullQuote:
    "Efficient utilization of Energy and Nature's Resources is the mantra of Madhav KRG Group in achieving our set goals.",
  body: [
    "Positive outcomes are the result of following accurate techniques, procedures and systems. At Madhav KRG Group we maintain dedicated systems to ensure compliance with the standards we set for ourselves and the ones our partners hold us to.",
    "The word that guides everything we do is GIVING giving quality to our customers, fair remuneration to our people, dependable services to our partners, robust systems to our operations, and meaningful contribution to society.",
    "This wholehearted commitment has helped us build strong, long-standing relationships with the customers and stakeholders who choose to grow with us.",
  ],
};

const DIRECTOR: Principal = {
  name: "Sanjeev Goyal",
  title: "Director",
  portrait: "/images/leadership/sanjeev-goyal.jpg",
  pullQuote:
    "Quality assurance, for us, is not a step in the manufacturing line it is part of the culture of our organisation.",
  body: [
    "Madhav KRG Group believes in long-term relationships and in creating an environment in which those relationships can grow. We welcome existing and new vendors with the same impartiality, because equitable economic development is what makes a supply chain durable.",
    "We treat the regulatory policies of the government as business guidelines, not constraints and the work we do is meant to contribute to the socio-economic development of the country.",
    "Quality assurance, for us, is not a step in the manufacturing line. It is part of the culture of our organisation.",
  ],
};

const RAHUL: Principal = {
  name: "Rahul Goel",
  title: "Director",
  portrait: PLACEHOLDER_IMAGES.leadershipTeam[0],
  pullQuote:
    "As the next-generation founder and director, I bring a fresh perspective, strategic insight and unwavering commitment to making a lasting impact.",
  body: [
    "A visionary leader committed to driving innovation and excellence. With a passion for transformative growth and a forward-thinking approach, he is dedicated to shaping the future of Madhav KRG Environmental Solutions Ltd.",
    "As the next-generation founder and director, he brings a fresh perspective, strategic insight, and unwavering commitment to making a lasting impact.",
  ],
};

const RANDHIR: Principal = {
  name: "Randhir Singh Rathaur",
  title: "President Sales & Marketing",
  portrait: "/images/leadership/team8.jpg",
  pullQuote:
    "Every tonne we move is a relationship we've earned, with customers, transporters and partners who trust Madhav KRG Group to deliver, every time.",
  body: [
    "Sales in this industry isn't won with a single order, it's won by being the mill a customer calls first when the market gets tight. That reputation is built shipment by shipment, not campaign by campaign.",
    "We work directly with contractors, dealers and infrastructure players across the region, carrying what the market needs back to the plant floor so our production stays aligned with real demand.",
    "Growth, for us, means widening the base of customers who choose Madhav KRG Group not because we are the cheapest, but because we are the most dependable.",
  ],
};

const resolvePrincipal = (input: PrincipalInput | undefined, fallback: Principal): Principal => ({
  name: str(input?.name, fallback.name),
  title: str(input?.role, fallback.title),
  portrait: input?.imageUrl || fallback.portrait,
  pullQuote: fallback.pullQuote,
  body: input?.story?.trim()
    ? input.story.split(/\n+/).map((p) => p.trim()).filter(Boolean)
    : fallback.body,
});

export default function LeadershipPageContent({
  data,
}: {
  data?: LeadershipPageData;
}) {
  const hero = data?.hero;

  const md = resolvePrincipal(data?.founder, MD);
  const director = resolvePrincipal(data?.director, DIRECTOR);

  const additionalFallbacks = [RAHUL, RANDHIR];
  const additionalLeaders: Principal[] = data?.additionalLeaders?.length
    ? data.additionalLeaders.map((leader, i) =>
        resolvePrincipal(leader, {
          ...(additionalFallbacks[i] ?? {
            name: "",
            title: "",
            portrait: PLACEHOLDER_IMAGES.leadershipTeam[i % PLACEHOLDER_IMAGES.leadershipTeam.length],
            pullQuote: "",
            body: [],
          }),
        }),
      )
    : additionalFallbacks;

  const quoteText = str(data?.pullQuote?.text, MD.pullQuote);
  const quoteAttribution = str(
    data?.pullQuote?.attribution,
    `${md.name}, ${md.title}`,
  );

  return (
    <main className="bg-beige">
      <PageHero
        eyebrow={str(hero?.eyebrow, "Leadership")}
        heading={str(hero?.heading, "The people behind every tonne we recycle.")}
        intro={str(
          hero?.intro,
          "Madhav KRG Group is led by operators, not bystanders. The people on this page have been on the shop floor, in the audit room and in the field often all in the same week.",
        )}
        imageUrl={hero?.imageUrl || "/images/leadership/team-hero.jpg"}
        imageAlt={str(hero?.imageAlt, "Madhav KRG Group leadership team")}
      />

      {/* MD MESSAGE */}
      <PrincipalSection principal={md} side="left" />

      {/* PULL QUOTE mission */}
      <section
        className="relative isolate overflow-hidden bg-deep-green py-24 text-white sm:py-32"
        style={{
          backgroundImage: `url(${PLACEHOLDER_IMAGES.sustPillars[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-deep-green/85 via-deep-green/80 to-deep-green/90" />
        <div className="relative mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
          <AnimatedHeading className="font-serif text-3xl leading-snug text-white sm:text-4xl lg:text-[2.75rem]">
            {quoteText}
          </AnimatedHeading>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] text-white/80">
            {quoteAttribution}
          </p>
        </div>
      </section>

      {/* DIRECTOR MESSAGE */}
      <PrincipalSection principal={director} side="right" />

      {/* ADDITIONAL LEADERSHIP MESSAGES */}
      {additionalLeaders.map((leader, i) => (
        <PrincipalSection
          key={`${leader.name}-${i}`}
          principal={leader}
          side={i % 2 === 0 ? "left" : "right"}
        />
      ))}
    </main>
  );
}

function PrincipalSection({
  principal,
  side,
  background = "white",
}: {
  principal: Principal;
  side: "left" | "right";
  background?: "white" | "beige";
}) {
  const imageFirst = side === "left";

  const ImageCol = (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:col-span-5"
      data-cursor="grow"
    >
      <Image
        src={principal.portrait}
        alt={`${principal.name}, ${principal.title}`}
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-green/55 via-transparent to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/90 px-5 py-3.5 backdrop-blur">
        <div>
          <p className="text-sm font-medium text-ink">{principal.name}</p>
          <p className="text-xs text-muted">{principal.title}</p>
        </div>
      </div>
    </motion.div>
  );

  const TextCol = (
    <div className="lg:col-span-7">
      <span className="text-xs uppercase tracking-[0.2em] text-accent">
        {principal.title}&apos;s message
      </span>
      <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
        {`A note from ${principal.name}.`}
      </AnimatedHeading>
      <div className="mt-6 space-y-5">
        {principal.body.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed text-body sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-8 flex items-center gap-3">
        <Link
          href={`mailto:contact@mkrg.in`}
          aria-label={`Email ${principal.name}'s office`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/20 text-accent transition-colors hover:bg-accent hover:text-white"
        >
          <Mail className="h-4 w-4" />
        </Link>
        <p className="font-serif text-base text-ink">
          {principal.name}
          <span className="ml-2 text-sm uppercase tracking-wider text-accent">
            · {principal.title}
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <section
      className={`${background === "white" ? "bg-white" : "bg-beige"} py-24 sm:py-32`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {imageFirst ? (
            <>
              {ImageCol}
              {TextCol}
            </>
          ) : (
            <>
              {TextCol}
              {ImageCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

