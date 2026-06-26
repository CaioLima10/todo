import { cva } from "class-variance-authority";

export const buttonVariant = cva("flex items-center justify-center cursor-pointer rounded-xl group", {
  variants: {
    variant: {
      "primary": "bg-pink-light hover:bg-pink-base"
    },
    font: {
      "body-md": "text-md hover:text-pink-light"
    },
    disabled: {
      false: "",
      true: "cursor-not-allowed bg-pink-light/70"
    }
  },
  defaultVariants: {
    variant: "primary",
    font: "body-md",
    disabled: false
  }
})

export const buttonIconVariant = cva("", {
  variants: {
    variant: {
      "primary": "fill-pink-base group-hover:fill-gray-100"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})