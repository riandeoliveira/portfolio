import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ReactElement, ReactNode } from "react";
import { NeonBackground } from "../neon-background";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  containerClassName?: string;
}

export const Link = ({
  containerClassName,
  children,
  className,
  ...props
}: LinkProps): ReactElement => {
  return (
    <NeonBackground className={cn("", containerClassName)}>
      <a
        {...props}
        className={cn(
          "h-full w-full px-4 py-2 flex items-center justify-center rounded-xl text-zinc-50 font-semibold hover:bg-zinc-950 transition-colors",
          className,
        )}
      >
        {children}
      </a>
    </NeonBackground>
  );
};
