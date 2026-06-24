import type React from "react";
import type { VariantProps } from "class-variance-authority";
import { iconVariants } from "./icon-variants";

interface IconProps extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>
}

export function Icon({ svg: SvgComponents, animate, className, ...props }: IconProps) {
  return(
    <SvgComponents {...props} className={iconVariants({ animate, className })}/>
  )
}