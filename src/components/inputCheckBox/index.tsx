import { type VariantProps } from "class-variance-authority";
import { IconCheckVariants, inputCheckBoxVariants, inputCheckBoxWrapperVariants } from "./input-checkbox-variants";
import { Icon } from "../icon";

interface InputCheckBoxProps extends Omit<React.ComponentProps<"input">, "size" | "disabled">, VariantProps<typeof inputCheckBoxVariants>{
  icon: React.ComponentProps<typeof Icon>["svg"]
}

export function InputCheckBox({ className, size, disabled, icon, ...props }: InputCheckBoxProps) {
  return(
    <label className={inputCheckBoxWrapperVariants({className})}>
      <input className={inputCheckBoxVariants({ className, size, disabled })} {...props} />
      <Icon svg={icon} className={IconCheckVariants({size})}/>
    </label>
  )
}