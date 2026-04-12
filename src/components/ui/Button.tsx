import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-bold transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-brand-accent text-brand-dark hover:bg-brand-accent-glow hover:shadow-[0_0_20px_rgba(168,224,99,0.4)]": variant === "primary",
            "bg-white text-brand-dark hover:bg-gray-100": variant === "secondary",
            "border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-dark": variant === "outline",
            "hover:bg-brand-primary-light text-white": variant === "ghost",
            "h-10 px-6 text-sm": size === "sm",
            "h-12 px-8 text-base": size === "md",
            "h-14 px-10 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
