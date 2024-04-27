import { skills } from "@/data/skills";
import type { SkillType } from "@/types/skill";
import type { ReactElement } from "react";

interface SkillIconProps {
  name: SkillType;
}

// TODO: Ajustar componente, pois ele representa agora o card de skill (SkillCard)

export const SkillIcon = ({ name }: SkillIconProps): ReactElement => {
  const skill = skills.find((icon) => icon.name === name);

  if (!skill) return <></>;

  const Icon = skill.icon;

  return (
    <div className="flex flex-col items-center gap-2 flex-1">
      <div style={{ boxShadow: `0 0 20px ${skill.color}` }} className={"rounded-xl w-12 h-12"}>
        <Icon />
      </div>
      <span className="text-white text-center">{skill.title}</span>
    </div>
  );
};
