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
  orange:  "bg-[#EEF2FF] border-[#6366F1]/20 text-[#4F46E5]",
  blue:    "bg-[#EEF2FF] border-[#6366F1]/20 text-[#4F46E5]",
  neutral: "bg-[#F3F4F6] border-[#E5E7EB] text-[#4B5563]",
  green:   "bg-[#F0FDF4] border-[#22C55E]/25 text-[#16A34A]",
};

const dotStyles: Record<BadgeVariant, string> = {
  orange:  "bg-[#6366F1]",
  blue:    "bg-[#6366F1]",
  neutral: "bg-[#9CA3AF]",
  green:   "bg-[#22C55E]",
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
    <p className={cn("text-[#6366F1] text-xs font-bold tracking-widest uppercase mb-4", className)}>
      {children}
    </p>
  );
}
