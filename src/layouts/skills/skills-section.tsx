import { BackgroundBeams } from "@/components/background-beams";
import { useI18n } from "@/hooks/use-i18n";
import { localStorageStore } from "@/stores/local-storage-store";
import { skillStore } from "@/stores/skill-store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { SkillCard } from "./skill-card";

export const SkillsSection = observer((): ReactElement => {
  const { t } = useI18n();

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-zinc-950 flex justify-center relative tablet-s:py-10"
    >
      {localStorageStore.isQualityMode && <BackgroundBeams />}
      <div className="w-[1200px] flex flex-col text-center gap-2">
        <h1 className="text-6xl bg-clip-text text-transparent bg-gradient-to-b from-zinc-200 to-zinc-600 font-bold tablet-s:text-4xl">
          {t("skills")}
        </h1>
        <p className="text-zinc-500 text-xl tablet-s:text-base">
          {t("skills_description")}
        </p>
        <div className="grid grid-cols-12 gap-6 mt-12 tablet-l:grid-cols-8 tablet-s:grid-cols-4">
          {skillStore.list.map(({ title, iconName, color, id }) => (
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
});
