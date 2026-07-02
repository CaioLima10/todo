import type { VariantProps } from "class-variance-authority";
import { cardVariants } from "./card-variants";

interface CardProps extends Omit<React.ComponentProps<"div">, "size">, VariantProps<typeof cardVariants> {
  children: React.ReactNode
}

export function Card({ className, size, children, ...props }: CardProps){
  return(
    <div className={cardVariants({ className, size })} {...props}>
      {children}
    </div>
  )
}