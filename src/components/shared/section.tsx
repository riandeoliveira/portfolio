import type { ComponentProps } from "react";
import { HighlightText } from "@/components/shared/highlight-text";
import { cn } from "@/utils/cn";

type DescriptionProps = ComponentProps<"p">;

const Description = ({ children, className, ...props }: DescriptionProps) => {
  return (
    <p
      className={cn("text-justify text-xl max-s-600:text-base", className)}
      {...props}
    >
      {children}
    </p>
  );
};

type TitleProps = ComponentProps<"h1"> & {
  isHighlighted?: boolean;
};

const Title = ({
  children,
  className,
  isHighlighted = false,
  ...props
}: TitleProps) => {
  return (
    <h1
      className={cn(
        "font-bold text-4xl w-fit max-s-600:text-2xl max-s-600:w-full max-s-600:text-center",
        className,
      )}
      {...props}
    >
      {isHighlighted ? <HighlightText>{children}</HighlightText> : children}
    </h1>
  );
};

export const Section = {
  Description,
  Title,
};
