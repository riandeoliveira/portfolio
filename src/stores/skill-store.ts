import { skills } from "@/data/skills";
import type { IconName } from "@/types/icon";
import type { Skill } from "@/types/skill";
import { makeAutoObservable } from "mobx";

class SkillStore {
  public list: Skill[] = skills;

  public constructor() {
    makeAutoObservable(this);
  }

  public filterBy(skillNames: IconName[]): Skill[] {
    return this.list.filter((skill) => skillNames.includes(skill.iconName));
  }
}

export const skillStore = new SkillStore();
