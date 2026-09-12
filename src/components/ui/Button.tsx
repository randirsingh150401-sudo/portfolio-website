import * as React from "react"
import { cn } from "../../utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group inline-flex items-center justify-center rounded-lg font-medium transition-[transform,box-shadow,background-color,filter] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-gradient-to-r from-primary to-accent text-white hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_20px_rgba(0,0,0,0.35),0_0_30px_-10px_rgba(167,139,250,0.35)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.4),0_0_45px_-8px_rgba(167,139,250,0.55)]": variant === "primary",
            "bg-surface text-text-primary hover:bg-surface/80 hover:scale-[1.02] active:scale-[0.98]": variant === "secondary",
            "border-2 border-primary/50 text-primary hover:bg-primary/10": variant === "outline",
            "hover:bg-surface text-text-secondary hover:text-text-primary": variant === "ghost",
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-base": size === "md",
            "h-14 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
