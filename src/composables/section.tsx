import { HighlightText } from "@/components/highlight-text";
import { cn } from "@/lib/utils";
import type {
  HeadingElementProps,
  ParagraphElementProps,
} from "@/types/element";
import type { ReactElement } from "react";

const Description = ({
  children,
  className,
  ...props
}: ParagraphElementProps): ReactElement => {
  return (
    <p
      className={cn(
        "text-justify text-xl max-tablet-s:text-base indent-10",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};

type TitleProps = HeadingElementProps & {
  isHighlighted?: boolean;
};

const Title = ({
  children,
  className,
  isHighlighted = false,
  ...props
}: TitleProps): ReactElement => {
  return (
    <h1
      className={cn(
        "font-bold text-4xl w-fit max-tablet-s:text-2xl max-tablet-s:w-full max-tablet-s:text-center",
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
