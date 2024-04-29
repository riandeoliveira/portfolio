import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

interface TextGenerateEffectProps {
  children: string;
  className?: string;
}

export const TextGenerateEffect = ({ children, className }: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();

  const wordsArray = children.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.1),
      },
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="text-white opacity-0">
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)}>
      <div className="mt-4">
        <div className=" text-white text-xl leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};
