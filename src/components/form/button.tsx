import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactElement } from "react";
import { NeonBackground } from "../neon-background";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export const Button = ({ children, className, ...props }: ButtonProps): ReactElement => {
  return (
    <NeonBackground>
      <button
        type="button"
        {...props}
        className={cn(
          "px-3 py-2 text-center rounded-xl items-center text-zinc-50 w-full font-semibold text-base hover:bg-zinc-950 transition-colors",
          className,
        )}
      >
        {children}
      </button>
    </NeonBackground>
  );
};
