import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { BackgroundGradient } from "./background-gradient";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, className, ...props }: ButtonProps): ReactElement => {
  return (
    <div className="relative z-50 p-0.5 group">
      <BackgroundGradient className="rounded-xl">
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
      </BackgroundGradient>
    </div>
  );
};
