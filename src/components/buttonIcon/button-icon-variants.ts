import { cva } from "class-variance-authority";

export const buttonIconVariant = cva("inline-flex items-center justify-center cursor-pointer group", {
  variants: {
    variant: {
      "primary": "bg-green-base hover:bg-green-dark",
      "secondary": "bg-pink-light hover:bg-pink-dark",  
      "ternary": "bg-transparent hover:bg-gray-200"
    },

    font: {
      sm: "w-6 h6 p-1 rounded"
    },
    disabled: {
      false: "",
      true: "opacity-50 pointer-events-none"
    }
  },
  defaultVariants: {
    variant: "primary",
    font: "sm",
    disabled: false
  }
})

export const IconSvgVariant = cva("", {
  variants: {
    variant: {
      "primary": "fill-white",
      "secondary": "fill-pink-base group-hover:fill-white",
      "ternary": "fill-gray-300 group-hover:fill-gray-400"
    },
    font: {
      sm: "w-4 h-4"
    }
  },
  defaultVariants: {
    variant: "primary",
    font: "sm"
  }
})

