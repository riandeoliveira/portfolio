import { skills } from "@/data/skills";
import type { ReactElement } from "react";
import { BackgroundBeams } from "./background-beams";
import { SkillIcon } from "./skill-icon";

// NOTE: Adicionar alguma animação com as tecnologias surgindo suavemente e/ou deslizando pela tela???

export const SkillsSection = (): ReactElement => {
  return (
    <section className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <h1 className="text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
        Skills
      </h1>
      <p className="text-neutral-500 mt-2 text-center text-base">
        Tecnologias e ferramentas do mercado que possuo experiência
      </p>
      <div className="w-[1200px] flex flex-wrap justify-center gap-8 mt-24">
        {skills.map(({ name }) => (
          <SkillIcon name={name} key={name} />
        ))}
      </div>
      <BackgroundBeams />
    </section>
  );
};
