import { cva } from "class-variance-authority";

export const badgeVariants = cva("", {
  variants: {
    variant: {
      "primary": "text-green-dark",
      "secondary": "text-pink-dark",
    },
    font: {
      "body-sm": "text-sm font-semibold leading-5"
    }
  },
  defaultVariants: {
    variant: "primary",
    font: "body-sm"
  }
})

export const badgeCircleVariants = cva("inline-flex items-center justify-center h-8 min-w-8 p-2 rounded-full", {
  variants: {
    variant: {
      "primary": "bg-green-light",
      "secondary": "bg-pink-light",
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})