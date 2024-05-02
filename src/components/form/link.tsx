import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ReactElement } from "react";
import { NeonBackground } from "../neon-background";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
}

export const Link = ({ children, className, ...props }: LinkProps): ReactElement => {
  return (
    <NeonBackground>
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
