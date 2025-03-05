import { cn } from "@/lib/utils";
import { localStorageStore } from "@/stores/local-storage-store";
import { observer } from "mobx-react-lite";
import type {
  Dispatch,
  ElementType,
  MouseEvent,
  ReactElement,
  ReactNode,
  SetStateAction,
} from "react";
import { createContext, useContext, useEffect, useRef, useState } from "react";

type MouseEnterContextType = [boolean, Dispatch<SetStateAction<boolean>>];

const MouseEnterContext = createContext<MouseEnterContextType | undefined>(
  undefined,
);

export const useMouseEnter = (): MouseEnterContextType => {
  const context = useContext(MouseEnterContext);

  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }

  return context;
};

type BodyProps = {
  children: ReactNode;
  className?: string;
};

const Body = ({ children, className }: BodyProps): ReactElement => {
  return (
    <div
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className,
      )}
    >
      {children}
    </div>
  );
};

type ContainerProps = {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
};

const Container = observer(
  ({
    children,
    className,
    containerClassName,
  }: ContainerProps): ReactElement => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [isMouseEntered, setIsMouseEntered] = useState<boolean>(false);

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>): void => {
      if (!containerRef.current) return;

      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();

      const x = (event.clientX - left - width / 2) / 25;
      const y = (event.clientY - top - height / 2) / 25;

      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    const handleMouseEnter = (): void => {
      setIsMouseEntered(true);

      if (!containerRef.current) return;
    };

    const handleMouseLeave = (): void => {
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
          <div
            ref={localStorageStore.isQualityMode ? containerRef : undefined}
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
  },
);

type ItemProps = {
  as?: ElementType;
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

const Item = observer(
  ({
    as: Tag = "div",
    children,
    className,
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    ...rest
  }: ItemProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);
    const [isMouseEntered] = useMouseEnter();

    useEffect(() => {
      handleAnimations();
    }, [isMouseEntered]);

    const handleAnimations = (): void => {
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

      if (!isMouseEntered) {
        ref.current.style.transform = `
        translateX(0px)
        translateY(0px)
        translateZ(0px)
        rotateX(0deg)
        rotateY(0deg)
        rotateZ(0deg)
      `;

        return;
      }
    };

    return (
      <Tag
        ref={localStorageStore.isQualityMode ? ref : undefined}
        className={cn("w-fit transition duration-200 ease-linear", className)}
        {...rest}
      >
        {children}
      </Tag>
    );
  },
);

export const Card = {
  Body,
  Container,
  Item,
};
