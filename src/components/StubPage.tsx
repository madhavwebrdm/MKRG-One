"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

type Props = {
  eyebrow?: string;
  heading: string;
  body?: string;
};

export default function StubPage({ eyebrow, heading, body }: Props) {
  return (
    <main className="bg-beige pt-28 sm:pt-36">
      <div className="mx-auto max-w-7xl px-6 pb-32 sm:px-10 lg:px-16">
        {eyebrow && (
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
        )}
        <AnimatedHeading as="h1" className="mt-3 max-w-4xl font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
          {heading}
        </AnimatedHeading>
        {body && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
            {body}
          </p>
        )}
        <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white px-4 py-2 text-xs uppercase tracking-wider text-accent">
          Coming soon
        </div>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-deep-green underline-offset-4 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
