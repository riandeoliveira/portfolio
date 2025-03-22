import { BackgroundBeams } from "@/components/background-beams";
import { skills } from "@/data/skills";
import { useAppMode } from "@/hooks/use-app-mode";
import { useI18n } from "@/hooks/use-i18n";
import type { ReactElement } from "react";
import { SkillCard } from "./skill-card";

export const SkillsSection = (): ReactElement => {
  const { appMode } = useAppMode();
  const { t } = useI18n();

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-zinc-950 flex justify-center relative max-s-600:py-10"
    >
      {appMode === "quality" && <BackgroundBeams />}
      <div className="w-300 flex flex-col text-center gap-2">
        <h1 className="text-6xl bg-clip-text text-transparent bg-gradient-to-b from-zinc-200 to-zinc-600 font-bold max-s-600:text-4xl">
          {t("skills")}
        </h1>
        <p className="text-zinc-500 text-xl max-s-600:text-base">
          {t("skills_description")}
        </p>
        <div className="grid grid-cols-12 gap-6 mt-12 max-s-960:grid-cols-8 max-s-600:grid-cols-4 text-zinc-50">
          {skills.map(({ title, iconName, color, id }) => (
            <SkillCard
              title={title}
              iconName={iconName}
              color={color}
              key={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
