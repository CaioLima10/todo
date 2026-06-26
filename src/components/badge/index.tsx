import type { VariantProps } from "class-variance-authority";
import type React from "react";
import { badgeCircleVariants, badgeVariants } from "./bagge-variants";

interface BadgeProps extends React.ComponentProps<"span">, VariantProps<typeof badgeVariants> {}

export function Badge({variant, className, font, children, ...props}: BadgeProps) {
  return(
    <div className={badgeCircleVariants({ variant, className })}>
      <span className={badgeVariants({ variant, font, className })} {...props}>
        {children}
      </span>
    </div>
  )
}