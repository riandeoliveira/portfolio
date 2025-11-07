import { useEffect, useState } from "react";
import { Icon } from "@/assets/icons";
import { useAppMode } from "@/hooks/use-app-mode";
import { useI18n } from "@/hooks/use-i18n";
import type { IconType } from "@/types/icon";
import { cn } from "@/utils/cn";
import { GradientBackground } from "../backgrounds/gradient-background";

const headerHeight = 80;

export const HeaderLayout = () => {
  const { t } = useI18n();
  const { appMode } = useAppMode();

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setIsHeaderFixed(scrollPosition > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
        <nav className="w-300 flex">
          <ul className="flex items-center w-full">
            <NavLink to="#home" icon={Icon.Home}>
              {t("home")}
            </NavLink>
            <NavLink to="#about" icon={Icon.User}>
              {t("about")}
            </NavLink>
            <NavLink to="#projects" icon={Icon.FolderOpen}>
              {t("projects")}
            </NavLink>
            <NavLink to="#skills" icon={Icon.Tools}>
              {t("skills")}
            </NavLink>
            <NavLink to="#experience" icon={Icon.Briefcase}>
              {t("experience")}
            </NavLink>
            <NavLink to="#achievements" icon={Icon.Award}>
              {t("achievements")}
            </NavLink>
            <NavLink to="#contact" icon={Icon.Envelope}>
              {t("contact")}
            </NavLink>
          </ul>
        </nav>
      </header>
      <div className="animate-slide-in-down">
        <GradientBackground
          className={cn(
            "h-px p-0",
            isHeaderFixed ? "fixed top-10 left-0 right-0 z-50" : "",
            appMode === "performance" && isHeaderFixed ? "top-20" : "",
          )}
        />
      </div>
    </>
  );
};

type NavLinkProps = {
  children: string;
  icon: IconType;
  to: string;
};

const NavLink = ({ children, icon: Icon, to }: NavLinkProps) => {
  return (
    <li className="flex-1 text-center flex justify-center">
      <a
        href={to}
        className="font-semibold flex flex-col items-center gap-1 group"
        aria-label={children}
      >
        <Icon className="w-6 h-6 fill-purple-500 hidden max-s-720:block" />
        <span className="bg-clip-text text-transparent bg-linear-to-b from-indigo-500 to-purple-500 max-s-720:hidden">
          {children}
        </span>
        <GradientBackground className="w-full h-px p-0 opacity-0 group-hover:opacity-100 transition-opacity max-s-720:hidden" />
      </a>
    </li>
  );
};
