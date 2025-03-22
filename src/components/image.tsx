import { cn } from "@/utils/cn";
import { type ImgHTMLAttributes, type ReactElement, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BaseIcon } from "./base-icon";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  skeletonClassName?: string;
};

export const Image = ({
  className,
  skeletonClassName,
  ...props
}: ImageProps): ReactElement => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <>
      <div
        className={cn(
          className,
          `w-full h-full ${isLoaded ? "hidden" : "flex"} items-center justify-center bg-zinc-950`,
          skeletonClassName,
        )}
      >
        <BaseIcon name="spinner" className="w-8 h-8 animate-spin" />
      </div>
      <LazyLoadImage
        onLoad={(): void => setIsLoaded(true)}
        className={cn(isLoaded ? "block" : "hidden", className)}
        {...props}
      />
    </>
  );
};
