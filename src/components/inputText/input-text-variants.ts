import { cva } from "class-variance-authority";

export const inputTextVariants = cva("border-solid border-b-1 border-b-gray-200 focus:border-b-pink-base outline-none bg-transparent", {
  variants: {
    disabled: {
      false: "",
      true: "cursor-not-allowed",
    },
    size: {
      sm: "px-2 pb-1"
    }
  },
  defaultVariants: {
    disabled: false,
    size: "sm"
  }
})