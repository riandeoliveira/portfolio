import type { Transition, Variants } from "framer-motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type GradientBackgroundProps = {
  children?: ReactNode;
  className?: string;
  colors?: string[];
  animate?: boolean;
};

export const GradientBackground = ({
  children,
  className,
  colors = ["#00ccb1", "#7b61ff", "#ffc414", "#1ca0fb"],
  animate = true,
}: GradientBackgroundProps) => {
  const variants: Variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  const springOptions: Transition = {
    duration: 5,
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "reverse",
  };

  const backgroundGradients = `
    radial-gradient(circle farthest-side at 0 100%, ${colors[0]}, transparent),
    radial-gradient(circle farthest-side at 100% 0, ${colors[1]}, transparent),
    radial-gradient(circle farthest-side at 100% 100%, ${colors[2]}, transparent),
    radial-gradient(circle farthest-side at 0 0, ${colors[3]}, #141316)
  `;

  const motionProps = {
    variants: animate ? variants : undefined,
    initial: animate ? "initial" : undefined,
    animate: animate ? "animate" : undefined,
    transition: animate ? springOptions : undefined,
    style: {
      backgroundImage: backgroundGradients,
      backgroundSize: animate ? "400% 400%" : undefined,
    },
  };

  return (
    <div className={cn("relative transform-3d p-1", className)}>
      <motion.div
        {...motionProps}
        className={cn(
          "absolute inset-0 -z-50 opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform rounded-xl",
          className,
        )}
      />
      <motion.div
        {...motionProps}
        className={cn(
          "absolute inset-0 -z-50 will-change-transform",
          className,
        )}
      />
      {children}
    </div>
  );
};
