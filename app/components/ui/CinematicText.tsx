"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CinematicTextProps {
  children: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export default function CinematicText({
  children,
  className = "",
  tag: Tag = "h2",
  delay = 0,
}: CinematicTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Split into words
    const words = children.split(" ");
    el.innerHTML = words
      .map((word) => `<span class="word-wrap" style="display:inline-block;overflow:hidden;"><span class="word" style="display:inline-block;">${word}&nbsp;</span></span>`)
      .join("");

    const wordEls = el.querySelectorAll(".word");

    gsap.fromTo(
      wordEls,
      { y: "110%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: "power4.out",
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [children, delay]);

  return <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>{children}</Tag>;
}
