"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Upload } from "lucide-react";

import careerHero from "@/Images/Career.jpg";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";

function CareersForm() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
    setFileName(null);
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-deep-green/15 bg-white p-8 sm:p-10">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="font-serif text-2xl leading-snug text-ink">
          CV received thank you.
        </h3>
        <p className="text-sm leading-relaxed text-body">
          Our HR team will review and reach out if there&apos;s a match. For role
          enquiries you can also write to{" "}
          <Link
            href="mailto:info@madhavkrggroup.com"
            className="text-deep-green underline-offset-4 hover:underline"
          >
            info@madhavkrggroup.com
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-deep-green/15 bg-white p-7 sm:p-9"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id="careersName" name="name" label="Full name" required />
        <Field id="careersEmail" name="email" label="Email" type="email" required />
        <Field id="careersPhone" name="phone" label="Phone" type="tel" />
        <Field id="careersRole" name="role" label="Role you're applying for" />
      </div>

      <div className="mt-6">
        <Label htmlFor="careersMessage">Cover note (optional)</Label>
        <textarea
          id="careersMessage"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-xl border border-deep-green/20 bg-beige/40 px-4 py-3 text-sm text-ink shadow-inner focus:border-deep-green focus:outline-none focus:ring-2 focus:ring-deep-green/30"
        />
      </div>

      <div className="mt-6">
        <Label>CV (PDF, up to 5 MB)</Label>
        <label className="mt-2 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-deep-green/30 bg-beige/40 px-4 py-3 text-sm text-body transition-colors hover:border-deep-green">
          <Upload className="h-4 w-4 text-accent" />
          <span className="truncate">
            {fileName ? fileName : "Choose a PDF to upload"}
          </span>
          <input
            type="file"
            name="cv"
            accept="application/pdf"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
            className="hidden"
            required
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-deep-green px-6 py-3 text-sm font-medium text-white shadow-md transition-shadow hover:shadow-lg disabled:opacity-60"
      >
        {status === "sending" ? "Submitting…" : "Submit application"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-xs font-medium uppercase tracking-wider text-accent"
    >
      {children}
    </label>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required,
}: {
  id: string;
  name?: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={id}>
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </Label>
      <input
        id={id}
        name={name ?? id}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-deep-green/20 bg-beige/40 px-4 py-3 text-sm text-ink shadow-inner focus:border-deep-green focus:outline-none focus:ring-2 focus:ring-deep-green/30"
      />
    </div>
  );
}

export default function CareersPageContent() {
  return (
    <main className="bg-beige">
      <PageHero
        eyebrow="Careers"
        heading="Work where the loop closes."
        intro="MKRG is hiring across plant operations, engineering, sales, finance and EHS. Send your CV and a short note we read every application."
        imageUrl={careerHero}
        imageAlt="Save plants greener planet"
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-16">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Apply
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
              Send us your CV.
            </AnimatedHeading>
          </div>
          <div className="mt-10">
            <CareersForm />
          </div>
        </div>
      </section>
    </main>
  );
}
