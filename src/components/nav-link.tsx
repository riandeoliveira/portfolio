import type { ReactElement } from "react";
import type { IconType } from "react-icons";
import { NeonBackground } from "./neon-background";

interface NavLinkProps {
  children: string;
  icon: IconType;
  to: string;
}

export const NavLink = ({ children, icon: Icon, to }: NavLinkProps): ReactElement => {
  return (
    <li className="flex-1 text-center flex justify-center">
      <a
        href={to}
        className="font-semibold bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 to-purple-500 flex flex-col items-center gap-1 group"
      >
        <Icon size={24} className="text-purple-500 hidden tablet-s:block" />
        <span className="tablet-s:hidden">{children}</span>
        <NeonBackground className="w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity tablet-s:hidden" />
      </a>
    </li>
  );
};
