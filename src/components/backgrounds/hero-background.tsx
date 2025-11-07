import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/utils/cn";

type HeroBackgroundProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export const HeroBackground = ({
  children,
  className,
  containerClassName,
}: HeroBackgroundProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement>) => {
    if (!currentTarget) return;

    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: This div uses mouse movement solely for a decorative animation and is not meant to be interactive.
    <div
      className={cn(
        "relative flex items-center bg-black justify-center w-full group",
        containerClassName,
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-800 pointer-events-none" />
      <motion.div
        className="pointer-events-none bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <div className={cn("relative", className)}>{children}</div>
    </div>
  );
};
