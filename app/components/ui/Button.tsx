import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  icon?: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "btn-primary text-white font-bold",
  secondary:
    "bg-transparent border-2 border-[#6366F1]/25 text-[#4F46E5] hover:bg-[#EEF2FF] hover:border-[#6366F1]/50 transition-all duration-200",
  ghost:
    "bg-transparent text-[#4B5563] hover:text-[#6366F1] transition-colors duration-200",
  outline:
    "bg-transparent border border-[#6366F1]/30 text-[#4F46E5] hover:bg-[#EEF2FF] transition-all duration-200",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className,
  disabled,
  type = "button",
  onClick,
  icon,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-semibold cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon && <span className="w-4 h-4 flex-shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
      {icon && <span className="w-4 h-4 flex-shrink-0">{icon}</span>}
    </button>
  );
}
