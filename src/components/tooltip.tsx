import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import { v4 as uuid } from "uuid";

interface TooltipProps {
  iconUrl: string;
  id: number;
  label: string;
  linkUrl: string;
}

export const Tooltip = ({ iconUrl, id, label, linkUrl }: TooltipProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = { stiffness: 100, damping: 5 };

  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 15]), springConfig);

  // FIXME: Encontrar a tipagem adequada

  const handleMouseMove = (event: any): void => {
    const halfWidth = event.target.offsetWidth / 2;

    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div
      onMouseEnter={() => setHoveredIndex(id)}
      onMouseLeave={() => setHoveredIndex(null)}
      key={uuid()}
      className="-mr-4 relative group"
    >
      {hoveredIndex === id && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.6 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 10,
            },
          }}
          exit={{ opacity: 0, y: 20, scale: 0.6 }}
          style={{
            translateX,
            rotate,
            whiteSpace: "nowrap",
          }}
          className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-xl z-50 shadow-xl px-4 py-2 bg-black"
        >
          <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
          <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
          <div className="text-white text-xs">{label}</div>
        </motion.div>
      )}
      <a href={linkUrl} target="_blank" rel="noreferrer">
        <img
          onMouseMove={handleMouseMove}
          height={100}
          width={100}
          src={iconUrl}
          alt={label}
          className="object-cover !m-0 !p-0 object-top h-12 w-12 group-hover:scale-105 group-hover:z-30 relative transition duration-500"
        />
      </a>
    </div>
  );
};
