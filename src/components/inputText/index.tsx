import type { VariantProps } from "class-variance-authority";
import type React from "react";
import { inputTextVariants } from "./input-text-variants";

interface InputTextProps extends Omit<React.ComponentProps<"input">, "size" | "disabled">, VariantProps<typeof inputTextVariants> {}

export function InputText({ className, size, disabled, ...props }: InputTextProps) {
  return(
    <input className={inputTextVariants({ className, size, disabled })} {...props} />
  )
}