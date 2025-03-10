import { BaseIcon } from "@/components/base-icon";
import { NeonBackground } from "@/components/neon-background";
import type { IconName } from "@/types/icon";
import type { ReactElement } from "react";

type HeaderNavLinkProps = {
  children: string;
  iconName: IconName;
  to: string;
};

export const HeaderNavLink = ({
  children,
  iconName,
  to,
}: HeaderNavLinkProps): ReactElement => {
  return (
    <li className="flex-1 text-center flex justify-center">
      <a
        href={to}
        className="font-semibold flex flex-col items-center gap-1 group"
        aria-label={children}
      >
        <BaseIcon
          name={iconName}
          className="w-6 h-6 fill-purple-500 hidden tablet-s:block"
        />
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 to-purple-500 tablet-s:hidden">
          {children}
        </span>
        <NeonBackground className="w-full h-0.5 p-0 opacity-0 group-hover:opacity-100 transition-opacity tablet-s:hidden" />
      </a>
    </li>
  );
};
