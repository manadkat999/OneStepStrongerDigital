"use client";
import { cn } from "@/app/lib/utils";
import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function RevealOnScroll({
  children,
  delay = 0,
  className,
  threshold = 0.12,
  direction = "up",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const initial = {
    opacity: 0,
    y: direction === "up" ? 32 : 0,
    x: direction === "left" ? -32 : direction === "right" ? 32 : 0,
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{
        duration: 0.65,
        delay: delay / 1000,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
