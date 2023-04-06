import type { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSection, setSection } from "redux/sectionSlice";
import type { SectionType } from "types/section";

interface NavItemProps {
  name: SectionType;
  className?: string;
  children: ReactNode;
}

export const NavItem = ({
  name,
  className,
  children,
}: NavItemProps): JSX.Element => {
  const dispatch = useDispatch();
  const section = useSelector(selectSection);

  return (
    <li className="flex flex-1">
      <button
        type="button"
        onClick={() => dispatch(setSection(name))}
        className={`p-2 flex flex-1 border-purple-alpha border-2 justify-center hover:bg-purple-alpha transition-colors ${className} ${
          section.current === name ? "bg-purple-alpha" : ""
        }`}
      >
        {children}
      </button>
    </li>
  );
};
