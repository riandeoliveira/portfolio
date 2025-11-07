import type { Dispatch, MouseEvent, ReactNode, SetStateAction } from "react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useAppMode } from "@/hooks/use-app-mode";
import { cn } from "@/utils/cn";

type MouseEnterContextType = [boolean, Dispatch<SetStateAction<boolean>>];

const MouseEnterContext = createContext<MouseEnterContextType | undefined>(
  undefined,
);

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);

  if (!context) {
    throw new Error("useMouseEnter must be used within a Card.Root");
  }

  return context;
};

type CardBodyProps = {
  children: ReactNode;
  className?: string;
};

const CardBody = ({ children, className }: CardBodyProps) => {
  return (
    <div className={cn("h-96 w-96 transform-3d *:transform-3d", className)}>
      {children}
    </div>
  );
};

type CardItemProps = {
  children: ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: unknown;
};

const CardItem = ({
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: CardItemProps) => {
  const { appMode } = useAppMode();

  const ref = useRef<HTMLDivElement>(null);

  const [isMouseEntered] = useMouseEnter();

  const handleAnimations = () => {
    if (!ref.current) return;

    if (isMouseEntered) {
      ref.current.style.transform = `
          translateX(${translateX}px)
          translateY(${translateY}px)
          translateZ(${translateZ}px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          rotateZ(${rotateZ}deg)
        `;

      return;
    }

    ref.current.style.transform = `
        translateX(0px)
        translateY(0px)
        translateZ(0px)
        rotateX(0deg)
        rotateY(0deg)
        rotateZ(0deg)
      `;
  };

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  return (
    <div
      ref={appMode === "quality" ? ref : undefined}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

type CardRootProps = {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
};

const CardRoot = ({
  children,
  className,
  containerClassName,
}: CardRootProps) => {
  const { appMode } = useAppMode();

  const containerRef = useRef<HTMLDivElement>(null);

  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    const x = (event.clientX - left - width / 2) / 25;
    const y = (event.clientY - top - height / 2) / 25;

    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);

    if (!containerRef.current) return;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;

    setIsMouseEntered(false);

    containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("flex items-center justify-center", containerClassName)}
        style={{
          perspective: "1000px",
        }}
      >
        {/* * biome-ignore lint/a11y/noStaticElementInteractions: `div` is used for visual effects, not interactions. */}
        <div
          ref={appMode === "quality" ? containerRef : undefined}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className,
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const Card = {
  Body: CardBody,
  Item: CardItem,
  Root: CardRoot,
};
