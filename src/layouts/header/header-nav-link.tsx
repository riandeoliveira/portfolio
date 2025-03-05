import { NeonBackground } from "@/components/neon-background";
import type { ReactElement } from "react";
import type { IconType } from "react-icons";

type HeaderNavLinkProps = {
  children: string;
  icon: IconType;
  to: string;
};

export const HeaderNavLink = ({
  children,
  icon: Icon,
  to,
}: HeaderNavLinkProps): ReactElement => {
  return (
    <li className="flex-1 text-center flex justify-center">
      <a
        href={to}
        className="font-semibold flex flex-col items-center gap-1 group"
        aria-label={children}
      >
        <Icon size={24} className="fill-purple-500 hidden tablet-s:block" />
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 to-purple-500 tablet-s:hidden">
          {children}
        </span>
        <NeonBackground className="w-full h-0.5 p-0 opacity-0 group-hover:opacity-100 transition-opacity tablet-s:hidden" />
      </a>
    </li>
  );
};
