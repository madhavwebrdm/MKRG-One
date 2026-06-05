"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

const NAV: NavItem[] = [
  {
    label: "About us",
    href: "/about",
    children: [{ label: "Process", href: "/processes" }],
  },
  { label: "Leadership", href: "/leadership", children: [{ label: "Certifications", href: "/certifications" }] },
  { label: "Product", href: "/product" },
  {
    label: "Sustainability",
    href: "/sustainability",
    children: [
      { label: "CSR", href: "/csr" },
      { label: "EHS", href: "/ehs" },
    ],
  },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

type Props = {
  siteTitle?: string;
  logoUrl?: string | null;
  nav?: NavItem[];
};

export default function Header({
  siteTitle = "Madhav KRG Group",
  nav = NAV,
}: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const darkTop = !scrolled;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ease-out ${
        scrolled
          ? "border-b border-deep-green/10 bg-beige/85 backdrop-blur"
          : "bg-black/50"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/MKRG%20LOGO.png"
            alt={siteTitle}
            width={1009}
            height={335}
            priority
            className="h-auto w-[120px] sm:w-[160px]"
          />
          <span className="sr-only">{siteTitle}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) =>
            item.children && item.children.length > 0 ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${darkTop ? "text-white/90 hover:text-white" : "text-body hover:text-accent"}`}
                >
                  {item.label}
                  <ChevronDown
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                    aria-hidden
                  />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <ul className="overflow-hidden rounded-xl border border-deep-green/10 bg-beige/95 py-1.5 shadow-lg backdrop-blur">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm font-medium text-body transition-colors hover:bg-accent/10 hover:text-accent"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${darkTop ? "text-white/90 hover:text-white" : "text-body hover:text-accent"}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <Link
          href="/contact"
          className={`hidden rounded-full px-5 py-2.5 text-sm font-medium shadow-sm transition-colors lg:inline-flex ${darkTop ? "bg-white text-deep-green hover:bg-accent hover:text-white" : "bg-deep-green text-white hover:bg-accent"}`}
        >
          Get in touch
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden ${darkTop ? "text-white" : "text-ink"}`}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-deep-green/10 bg-beige px-6 pb-6 pt-3 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-2.5 text-base font-medium text-body transition-colors hover:bg-accent/10 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                  {item.children && item.children.length > 0 && (
                    <ul className="ml-3 border-l border-deep-green/10 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-md px-2 py-2 text-sm font-medium text-body/80 transition-colors hover:bg-accent/10 hover:text-accent"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-deep-green px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-accent"
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
