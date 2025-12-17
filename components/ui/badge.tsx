import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const baseStyles =
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-[color,box-shadow] overflow-hidden"

const variantStyles = {
  default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
  secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
  destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90",
  outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
}

export interface BadgeProps extends React.ComponentProps<"span"> {
  variant?: keyof typeof variantStyles
  asChild?: boolean
}

function Badge({ className, variant = "default", asChild = false, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : "span"

  return <Comp data-slot="badge" className={cn(baseStyles, variantStyles[variant], className)} {...props} />
}

function badgeVariants({
  variant = "default",
  className = "",
}: { variant?: keyof typeof variantStyles; className?: string } = {}) {
  return cn(baseStyles, variantStyles[variant], className)
}

export { Badge, badgeVariants }
