import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

type LinkProps = ComponentProps<"a">;

export const Link = ({ children, className, ...props }: LinkProps) => {
  return (
    <a
      className={cn(
        "h-full w-full px-4 py-2 flex items-center justify-center rounded-xl font-semibold hover:bg-zinc-950 transition-colors max-s-480:text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};
