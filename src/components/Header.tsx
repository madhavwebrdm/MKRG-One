"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoFallback from "@/Images/MKRG Logo_Actual Color_PNG.png";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Processes", href: "/processes" },
  { label: "Leadership", href: "/leadership" },
  { label: "Certifications", href: "/certifications" },
  { label: "Media", href: "/media" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

type Props = {
  siteTitle?: string;
  logoUrl?: string | StaticImageData | null;
  nav?: Array<{ label: string; href: string }>;
};

export default function Header({
  siteTitle = "Madhav KRG Group",
  logoUrl,
  nav = NAV,
}: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const darkTop = !scrolled;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      setScrolled(y > 16);

      if (open || y < 80) {
        setHidden(false);
      } else if (delta > 4) {
        setHidden(true);
      } else if (delta < -4) {
        setHidden(false);
      }

      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ease-out ${
        scrolled
          ? "border-b border-deep-green/10 bg-beige/85 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src={logoUrl ?? logoFallback}
            alt={siteTitle}
            width={100}
            height={100}
            style={{ width: 100, height: "auto" }}
          />
          <span className="sr-only">{siteTitle}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${darkTop ? "text-white/90 hover:text-white" : "text-body hover:text-accent"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className={`hidden rounded-full px-5 py-2.5 text-sm font-medium shadow-sm transition-colors lg:inline-flex ${darkTop ? "bg-white text-deep-green hover:bg-accent hover:text-white" : "bg-deep-green text-white hover:bg-accent"}`}
        >
          Make an Impact
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
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-deep-green px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-accent"
                >
                  Make an Impact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
