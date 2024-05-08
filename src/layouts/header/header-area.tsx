import { Icon } from "@/assets/icons";
import { NeonBackground } from "@/components/neon-background";
import { cn } from "@/lib/utils";
import { localStorageStore } from "@/stores/local-storage-store";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { HeaderNavLink } from "./header-nav-link";

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
      {isHeaderFixed && <div style={{ height: `${headerHeight}px` }} />}
      <header
        style={{ height: `${headerHeight}px` }}
        className={cn(
          "flex justify-center px-4 animate-header",
          isHeaderFixed ? "transition-all fixed top-0 left-0 right-0 bg-zinc-950 z-50" : "",
        )}
      >
        <nav className="w-[1200px] flex">
          <ul className="flex items-center w-full">
            <HeaderNavLink to="#profile" icon={Icon.FaHome}>
              Início
            </HeaderNavLink>
            <HeaderNavLink to="#about" icon={Icon.FaUser}>
              Sobre
            </HeaderNavLink>
            <HeaderNavLink to="#projects" icon={Icon.FaFolderOpen}>
              Projetos
            </HeaderNavLink>
            <HeaderNavLink to="#skills" icon={Icon.FaTools}>
              Skills
            </HeaderNavLink>
            <HeaderNavLink to="#achievements" icon={Icon.FaAward}>
              Conquistas
            </HeaderNavLink>
            <HeaderNavLink to="#contact" icon={Icon.FaEnvelope}>
              Contato
            </HeaderNavLink>
          </ul>
        </nav>
      </header>
      <NeonBackground
        className={cn(
          "h-0.5 p-0 animate-headerBar",
          isHeaderFixed ? "fixed top-10 left-0 right-0 z-50" : "",
          localStorageStore.isPerformanceMode && isHeaderFixed ? "top-20" : "",
        )}
      />
    </>
  );
};
