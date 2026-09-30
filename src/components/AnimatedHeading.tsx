"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

type Props = {
  as?: "h1" | "h2" | "h3" | "h4";
  children: string;
  className?: string;
} & Omit<React.HTMLAttributes<HTMLHeadingElement>, "children">;

export default function AnimatedHeading({
  as: Tag = "h2",
  children,
  className,
  ...rest
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(ref.current, {
        y: 16,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
          once: true,
        },
      });
    },
    { scope: ref },
  );

  const lines = children.split("\n");

  return (
    <Tag ref={ref} className={className} {...rest}>
      {lines.map((line, li) => (
        <span key={li} className="block text-balance">
          {line}
          {li < lines.length - 1 && "\n"}
        </span>
      ))}
    </Tag>
  );
}
