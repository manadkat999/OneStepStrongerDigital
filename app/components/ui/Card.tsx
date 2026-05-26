import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  accent?: "orange" | "blue" | "none";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className,
  glow = true,
  hover = true,
  padding = "lg",
  accent = "none",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[#111] border transition-all duration-300",
        glow ? "card-glow" : "border-white/8",
        hover && "hover:-translate-y-1",
        accent === "orange" && "border-t-2 border-t-orange-500/50",
        accent === "blue"   && "border-t-2 border-t-blue-500/50",
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
