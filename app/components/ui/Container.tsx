import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "full";
}

const sizeMap = {
  sm:   "max-w-3xl",
  md:   "max-w-5xl",
  lg:   "max-w-7xl",
  full: "max-w-none",
};

export default function Container({ children, className, size = "lg" }: ContainerProps) {
  return (
    <div className={cn("mx-auto px-6 w-full", sizeMap[size], className)}>
      {children}
    </div>
  );
}
