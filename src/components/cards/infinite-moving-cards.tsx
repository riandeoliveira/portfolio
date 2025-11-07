import { type ReactNode, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { cn } from "@/utils/cn";

type InfiniteMovingCardsProps<TItem> = {
  items: TItem[];
  forEachItem: (item: TItem) => ReactNode;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export const InfiniteMovingCards = <TItem,>({
  items,
  forEachItem,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps<TItem>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const duplicatedItems = [...items, ...items];

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (!containerRef.current) return;

    if (direction === "left") {
      containerRef.current.style.setProperty(
        "--animation-direction",
        "forwards",
      );

      return;
    }

    containerRef.current.style.setProperty("--animation-direction", "reverse");
  };

  const getSpeed = () => {
    if (!containerRef.current) return;

    if (speed === "fast") {
      containerRef.current.style.setProperty("--animation-duration", "20s");

      return;
    }

    if (speed === "normal") {
      containerRef.current.style.setProperty("--animation-duration", "40s");

      return;
    }

    containerRef.current.style.setProperty("--animation-duration", "80s");
  };

  useEffect(() => {
    addAnimation();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-18 py-12",
          start && "animate-scroll",
          pauseOnHover && "hover:paused",
        )}
      >
        {duplicatedItems.map((item) => (
          <li key={uuid()} className="flex">
            {forEachItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};
