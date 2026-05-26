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
    "bg-transparent border border-white/20 text-white hover:border-orange-500/50 hover:text-orange-400 transition-all duration-300",
  ghost:
    "bg-transparent text-gray-400 hover:text-white transition-colors duration-200",
  outline:
    "bg-transparent border border-orange-500/40 text-orange-400 hover:bg-orange-500/10 transition-all duration-300",
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
