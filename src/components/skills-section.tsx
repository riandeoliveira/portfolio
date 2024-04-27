import { skills } from "@/data/skills";
import type { ReactElement } from "react";
import { SkillIcon } from "./skill-icon";

export const SkillsSection = (): ReactElement => {
  return (
    <section className="flex justify-center px-4">
      <div className="w-[1200px]">
        <div className="py-32 flex flex-wrap justify-center gap-8">
          {skills.map(({ name }) => (
            <SkillIcon name={name} key={name} />
          ))}
        </div>
      </div>
    </section>
  );
};
