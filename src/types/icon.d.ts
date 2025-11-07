import type { FunctionComponent, SVGProps } from "react";

export type IconType = FunctionComponent<
  SVGProps<SVGSVGElement> & {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
  }
>;
