import { skills } from "@/data/skills";
import type { SkillType } from "@/types/skill";
import type { ReactElement } from "react";

interface SkillIconProps {
  name: SkillType;
}

export const SkillIcon = ({ name }: SkillIconProps): ReactElement =>
  skills.find((icon) => icon.name === name)?.icon as ReactElement;
