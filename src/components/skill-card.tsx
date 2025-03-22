import { BaseIcon } from "@/components/base-icon";
import type { Skill } from "@/data/skills";
import type { ReactElement } from "react";

type SkillCardProps = Omit<Skill, "id" | "title"> & {
  title?: string;
};

export const SkillCard = ({
  color,
  iconName,
  title,
}: SkillCardProps): ReactElement => {
  return (
    <div className="flex flex-col items-center gap-2 flex-1">
      <BaseIcon name={iconName} className="max-s-480:scale-90" />
      <div
        style={{ boxShadow: `0 0 32px ${color}` }}
        className="w-12 h-12 absolute animate-pulse rounded-xl max-s-480:scale-90"
      />
      {title && <span className="text-center">{title}</span>}
    </div>
  );
};
