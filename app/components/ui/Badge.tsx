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
  orange: "bg-orange-500/10 border-orange-500/25 text-orange-400",
  blue:   "bg-blue-500/10 border-blue-500/25 text-blue-400",
  neutral:"bg-white/5 border-white/10 text-gray-400",
  green:  "bg-green-500/10 border-green-500/25 text-green-400",
};

const dotStyles: Record<BadgeVariant, string> = {
  orange: "bg-orange-500",
  blue:   "bg-blue-500",
  neutral:"bg-gray-400",
  green:  "bg-green-500",
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
    <p className={cn("text-orange-500 text-xs font-bold tracking-widest uppercase mb-4", className)}>
      {children}
    </p>
  );
}
