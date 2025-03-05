import { cn } from "@/lib/utils";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type TooltipProps = {
  open?: boolean;
};

type ElementType = ElementRef<typeof TooltipPrimitive.Content>;

type ElementProps = ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> &
  TooltipProps;

export const Tooltip = forwardRef<ElementType, ElementProps>(
  ({ children, className, sideOffset = 10, open, title, ...props }, ref) => (
    <TooltipPrimitive.Provider delayDuration={250}>
      <TooltipPrimitive.Root open={open}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          ref={ref}
          sideOffset={sideOffset}
          className={cn(
            "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-zinc-800",
            className,
          )}
          {...props}
        >
          <span>{title}</span>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  ),
);

Tooltip.displayName = "Tooltip";
