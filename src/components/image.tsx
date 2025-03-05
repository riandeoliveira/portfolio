import { Icon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { type ImgHTMLAttributes, type ReactElement, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
        <Icon.FaSpinner size={32} className="animate-spin" />
      </div>
      <LazyLoadImage
        onLoad={() => setIsLoaded(true)}
        className={cn(isLoaded ? "block" : "hidden", className)}
        {...props}
      />
    </>
  );
};
