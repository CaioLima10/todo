import type React from "react";
import { Icon } from "../icon";
import type { VariantProps } from "class-variance-authority";
import { buttonIconVariant, buttonVariant } from "./button-variants";

interface ButtonProps extends Omit<React.ComponentProps<"button">, "disabled">, VariantProps<typeof buttonVariant >{
  icon?: React.ComponentProps<typeof Icon>["svg"]
}

export function Button({variant, font ,className, icon: IconComponent , disabled, children, ...props}:ButtonProps) {
  return(
    <button className={buttonVariant({ variant, font, disabled, className })} {...props}> 
      {IconComponent && <Icon svg={IconComponent} className={buttonIconVariant({ variant, className})}/>}
      {children}
    </button>
  )
}