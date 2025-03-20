import { NeonBackground } from "@/components/neon-background";
import { useAppMode } from "@/hooks/use-app-mode";
import { useI18n } from "@/hooks/use-i18n";
import { cn } from "@/lib/utils";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { HeaderNavLink } from "./header-nav-link";

export const HeaderArea = (): ReactElement => {
  const headerHeight: number = 80;

  const { t } = useI18n();
  const { appMode } = useAppMode();

  const [isHeaderFixed, setIsHeaderFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition: number = window.scrollY;

      setIsHeaderFixed(scrollPosition > headerHeight);
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
          "flex justify-center px-4 animate-slide-in-down transition-all",
          isHeaderFixed
            ? "fixed top-0 left-0 right-0 z-50 bg-zinc-950/60 backdrop-blur-md shadow-lg"
            : "",
        )}
      >
        <nav className="w-[1200px] flex">
          <ul className="flex items-center w-full">
            <HeaderNavLink to="#home" iconName="home">
              {t("home")}
            </HeaderNavLink>
            <HeaderNavLink to="#about" iconName="user">
              {t("about")}
            </HeaderNavLink>
            <HeaderNavLink to="#projects" iconName="folder-open">
              {t("projects")}
            </HeaderNavLink>
            <HeaderNavLink to="#skills" iconName="tools">
              {t("skills")}
            </HeaderNavLink>
            <HeaderNavLink to="#achievements" iconName="award">
              {t("achievements")}
            </HeaderNavLink>
            <HeaderNavLink to="#contact" iconName="envelope">
              {t("contact")}
            </HeaderNavLink>
          </ul>
        </nav>
      </header>
      <div className="animate-slide-in-down">
        <NeonBackground
          className={cn(
            "h-0.5 p-0",
            isHeaderFixed ? "fixed top-10 left-0 right-0 z-50" : "",
            appMode === "performance" && isHeaderFixed ? "top-20" : "",
          )}
        />
      </div>
    </>
  );
};
