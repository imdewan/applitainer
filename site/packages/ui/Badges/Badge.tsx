import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

const badgeVariants = cva("font-semibold ", {
  variants: {
    variant: {
      default: "border-2 border-black text-black",
      error: "border-2 border-red-600 text-red-600",
      success: "border-2 border-green-600 text-green-600",
      filled: "bg-purple-200 text-purple-600 rounded",
    },
    size: {
      sm: "px-2 py-.5 text-xs",
      md: "px-2.5 py-1 text-sm",
      lg: "px-3 py-1.5 text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

interface ButtonProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({
  children,
  size = "md",
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </span>
  );
}
