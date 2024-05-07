import type { ISkill } from "@/types/skill";
import type { ReactElement } from "react";

type SkillCardProps = Omit<ISkill, "name">;

export const SkillCard = ({ color, icon: Icon, title }: SkillCardProps): ReactElement => {
  return (
    <div className="flex flex-col items-center gap-2 flex-1">
      <Icon className="mobile-l:scale-90" />
      <div
        style={{ boxShadow: `0 0 32px ${color}` }}
        className="w-12 h-12 absolute animate-pulse rounded-xl mobile-l:scale-90"
      />
      {title && <span className="text-center">{title}</span>}
    </div>
  );
};
