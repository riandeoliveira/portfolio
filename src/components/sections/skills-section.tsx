import { skillStore } from "@/stores/skill-store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { BackgroundBeams } from "../background-beams";
import { SkillCard } from "../skill-card";

// REFACT: Ajustar => SkillsSection | SkillCard | BackgroundBeams

export const SkillsSection = observer((): ReactElement => {
  return (
    <section className="h-[50vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <h1 className="text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
        Skills
      </h1>
      <p className="text-neutral-500 mt-2 text-center text-base">
        Tecnologias e ferramentas do mercado que possuo experiência
      </p>
      <div className="w-[1200px] flex flex-wrap justify-center gap-8 mt-24">
        {skillStore.list.map(({ title, icon, color, name }) => (
          <SkillCard title={title} icon={icon} color={color} key={name} />
        ))}
      </div>
      <BackgroundBeams />
    </section>
  );
});
