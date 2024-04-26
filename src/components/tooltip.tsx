import { cn } from "@/lib/utils";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from "react";
import { forwardRef } from "react";

interface TooltipProps {
  children: ReactNode;
  title: string;
}

export const Tooltip = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content & TooltipProps>
>(({ children, className, sideOffset = 110, title, ...props }, ref) => (
  <TooltipPrimitive.Provider>
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "z-100 overflow-hidden rounded-xl bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-white",
          className,
        )}
        {...props}
      >
        <span>{title}</span>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
));

Tooltip.displayName = "Tooltip";
