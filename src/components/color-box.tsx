import { cn } from "@/lib/utils";
import type { ReactElement } from "react";
import { BackgroundGradient } from "./background-gradient";

interface ColorBoxProps {
  className?: string;
}

export const ColorBox = ({ className }: ColorBoxProps): ReactElement => {
  return (
    <BackgroundGradient>
      <div className={cn("w-32 h-32 rounded-xl", className)}></div>
    </BackgroundGradient>
  );
};
