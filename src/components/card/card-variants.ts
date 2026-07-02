import { cva } from "class-variance-authority";

export const cardVariants = cva("rounded-xl border border-solid border-gray-200 shadow-sm bg-white", {
  variants: {
    size: {
      none: "",
      md: "p-5"
    }
  }, 
  defaultVariants: {
    size: "none"
  }
})