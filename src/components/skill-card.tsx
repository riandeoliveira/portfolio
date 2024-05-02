import type { ISkill } from "@/types/skill";
import type { ReactElement } from "react";

interface SkillCardProps extends Omit<ISkill, "name"> {}

export const SkillCard = ({ color, icon: Icon, title }: SkillCardProps): ReactElement => {
  return (
    <div className="flex flex-col items-center gap-2 flex-1">
      <div style={{ boxShadow: `0 0 20px ${color}` }} className="rounded-xl">
        <Icon />
      </div>
      {title && <span className="text-zinc-50 text-center">{title}</span>}
    </div>
  );
};
