import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

type BadgeVariant = "orange" | "blue" | "neutral" | "green";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  orange:  "bg-[#F5F5F4] border-[#1C1917]/20 text-[#0C0A09]",
  blue:    "bg-[#F5F5F4] border-[#1C1917]/20 text-[#0C0A09]",
  neutral: "bg-[#EFEEEC] border-[#E7E5E4] text-[#57534E]",
  green:   "bg-[#F5F5F4] border-[#1C1917]/25 text-[#44403C]",
};

const dotStyles: Record<BadgeVariant, string> = {
  orange:  "bg-[#1C1917]",
  blue:    "bg-[#1C1917]",
  neutral: "bg-[#A8A29E]",
  green:   "bg-[#1C1917]",
};

export default function Badge({ children, variant = "orange", dot = false, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", dotStyles[variant])} />
      )}
      {children}
    </span>
  );
}

export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-[#78716C] text-[11px] font-medium tracking-[0.25em] uppercase mb-4", className)}>
      {children}
    </p>
  );
}
