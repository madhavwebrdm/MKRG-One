"use client";

import { Fragment, useRef } from "react";
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
      const chars = ref.current?.querySelectorAll<HTMLElement>(".ah-char");
      if (!chars?.length) return;

      gsap.from(chars, {
        yPercent: 110,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.03,
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
  const isMultiLine = lines.length > 1;

  return (
    <Tag ref={ref} className={className} {...rest}>
      {lines.map((line, li) => {
        const words = line.split(" ");
        return (
          <span
            key={li}
            className={isMultiLine ? "block text-balance" : "block"}
          >
            {words.map((word, wi) => (
              <Fragment key={`${word}-${li}-${wi}`}>
                <span className="inline-block overflow-hidden pb-[0.15em] align-bottom">
                  {word.split("").map((char, ci) => (
                    <span key={ci} className="ah-char inline-block">
                      {char}
                    </span>
                  ))}
                </span>
                {wi < words.length - 1 && " "}
              </Fragment>
            ))}
          </span>
        );
      })}
    </Tag>
  );
}
