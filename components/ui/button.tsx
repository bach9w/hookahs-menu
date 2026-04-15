import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-normal uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary px-6 py-3 text-base text-primary-foreground hover:bg-[hsl(var(--primary-hover))]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-white/60 bg-transparent px-4 py-3 text-white hover:bg-[#1EAEDB] hover:text-white",
        secondary:
          "bg-[#969696] text-[#202020] hover:bg-[#969696]/90",
        ghost: "hover:bg-accent/20 hover:text-accent-foreground",
        link: "text-foreground underline-offset-4 hover:text-[hsl(221_52%_48%)] hover:underline",
      },
      size: {
        default: "min-h-12 px-6 py-3",
        sm: "min-h-10 px-3 text-xs",
        lg: "min-h-12 px-8 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
