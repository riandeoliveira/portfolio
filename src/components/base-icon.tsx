import type { IconName } from "@/types/icon";
import { cn } from "@/utils/cn";
import { type FC, type ReactElement, type SVGProps, useEffect } from "react";

type IconElement = {
  default: FC<SVGProps<SVGSVGElement>>;
};

type IconType = Record<IconName, IconElement>;

const importIcons = import.meta.glob("../assets/icons/**/*.svg", {
  eager: true,
  query: "react",
});

const iconsMap: IconType = Object.keys(importIcons).reduce(
  (acc: IconType, path) => {
    const iconName = path.split("/").pop()?.replace(".svg", "") as
      | IconName
      | undefined;

    if (iconName) {
      acc[iconName] = importIcons[path] as IconElement;
    }

    return acc;
  },
  {} as IconType,
);

type BaseIconProps = {
  name: IconName;
  className?: string;
};

export const BaseIcon = ({ name, className }: BaseIconProps): ReactElement => {
  const Icon = iconsMap[name].default;

  useEffect(() => {
    if (!Icon) throw new Error(`Error: Icon '${name}' not found!`);
  }, [Icon, name]);

  if (!Icon) return <></>;

  return <Icon className={cn("", className)} />;
};
