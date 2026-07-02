import type { VariantProps } from "class-variance-authority";
import { Icon } from "../icon";
import { buttonIconVariant, IconSvgVariant } from "./button-icon-variants";

interface ButtonIconProps extends Omit<React.ComponentProps<"button">, "disabled">, VariantProps<typeof buttonIconVariant> {
  icon: React.ComponentProps<typeof Icon>["svg"]
}

export function ButtonIcon({ className, disabled, variant, font, icon, ...props }: ButtonIconProps) {
  return(
    <button className={buttonIconVariant({ className, disabled, variant, font })} {...props}>
      <Icon svg={icon} className={IconSvgVariant({ className, variant, font })} />
    </button>
  )
}