import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = { sm: "py-16", md: "py-24", lg: "py-32" };

export default function Section({ children, id, className, size = "lg" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden", sizeMap[size], className)}
    >
      {children}
    </section>
  );
}
