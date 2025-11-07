import { BeamsBackground } from "@/components/backgrounds/beams-background";
import { skills } from "@/data/skills";
import { useI18n } from "@/hooks/use-i18n";
import { SkillCard } from "../cards/skill-card";

export const SkillsSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-zinc-950 flex justify-center relative max-s-600:py-10"
    >
      <BeamsBackground className="max-s-600:hidden" />
      <div className="w-300 flex flex-col text-center gap-2">
        <h1 className="text-6xl bg-clip-text text-transparent bg-linear-to-b from-zinc-200 to-zinc-600 font-bold max-s-600:text-4xl">
          {t("skills")}
        </h1>
        <p className="text-zinc-400 text-xl max-s-600:text-base">
          {t("skills_description")}
        </p>
        <div className="grid grid-cols-9 gap-6 mt-12 max-s-960:grid-cols-7 max-s-720:grid-cols-4 text-zinc-50 z-40">
          {skills.map(({ name, color, icon, id }) => (
            <SkillCard name={name} icon={icon} color={color} key={id} />
          ))}
        </div>
      </div>
    </section>
  );
};
