import { Icon } from "@/assets/icons";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { NavLink } from "../nav-link";
import { NeonBackground } from "../neon-background";

export const HeaderArea = (): ReactElement => {
  const headerHeight: number = 80;

  const [isHeaderFixed, setIsHeaderFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition: number = window.scrollY;

      if (scrollPosition > headerHeight) {
        setIsHeaderFixed(true);

        return;
      }

      setIsHeaderFixed(false);
    };

    window.addEventListener("scroll", handleScroll);

    return (): void => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{ height: `${headerHeight}px` }}
        className={`flex justify-center px-4 ${isHeaderFixed ? "transition-all fixed top-0 left-0 right-0 bg-zinc-950 z-50" : ""}`}
      >
        <nav className="w-[1200px] flex">
          <ul className="flex items-center w-full">
            <NavLink to="#profile" icon={Icon.FaHome}>
              Início
            </NavLink>
            <NavLink to="#about" icon={Icon.FaUser}>
              Sobre
            </NavLink>
            <NavLink to="#projects" icon={Icon.FaFolderOpen}>
              Projetos
            </NavLink>
            <NavLink to="#skills" icon={Icon.FaTools}>
              Skills
            </NavLink>
            <NavLink to="#achievements" icon={Icon.FaAward}>
              Conquistas
            </NavLink>
            <NavLink to="#contact" icon={Icon.FaEnvelope}>
              Contato
            </NavLink>
          </ul>
        </nav>
      </header>
      <NeonBackground className="h-0.5 p-0" />
    </>
  );
};
