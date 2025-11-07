import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type HighlightTextProps = {
  children: ReactNode;
  className?: string;
};

export const HighlightText = ({ children, className }: HighlightTextProps) => {
  return (
    <motion.strong
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block pb-1 px-1 rounded-lg bg-linear-to-r from-indigo-500 to-purple-500",
        className,
      )}
    >
      {children}
    </motion.strong>
  );
};
