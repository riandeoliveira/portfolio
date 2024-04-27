import type { ReactElement } from "react";
import React, { useState } from "react";

interface TooltipProps {
  title: string;
  children: React.ReactNode;
}

export const NewTooltip = ({ title, children }: TooltipProps): ReactElement => {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className="relative inline-block">
      <div onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
        {children}
      </div>
      <div
        className={`absolute z-20 transition-opacity ${showTooltip ? "opacity-100" : "opacity-0"}`}
      >
        {showTooltip && (
          <span className="p-2 text-xs text-white bg-gray-800 rounded-xl text-center">{title}</span>
        )}
      </div>
    </div>
  );
};
