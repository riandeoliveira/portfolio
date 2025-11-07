import { type ComponentProps, useCallback, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Icon } from "@/assets/icons";
import { cn } from "@/utils/cn";

type ImageProps = ComponentProps<"img">;

export const Image = ({ className, src, alt = "", ...props }: ImageProps) => {
  const [status, setStatus] = useState<"loading" | "loaded">("loading");

  const handleLoad = useCallback(() => setStatus("loaded"), []);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
          <Icon.Spinner className="w-6 h-6 animate-spin text-zinc-400" />
        </div>
      )}
      <LazyLoadImage
        src={src}
        alt={alt}
        onLoad={handleLoad}
        className={cn("object-cover w-full h-full duration-300", className)}
        {...props}
      />
    </div>
  );
};
