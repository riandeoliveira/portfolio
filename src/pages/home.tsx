import { ProjectCard } from "@/components/project-card";
import { type ReactElement } from "react";

export const Home = (): ReactElement => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Olá, Mundo!</h1>
      <p>Tente outra vez...</p>
      <ProjectCard
        name="Urna Eletrônica"
        description="Simulador web totalmente funcional da Nova Urna Eletrônica que foi utilizada pela primeira vez nas Eleições Brasileiras de 2022."
        imageUrl="https://i.imgur.com/XfYOeHp.png"
        skillList={["js", "nextjs", "react", "tailwind", "ts"]}
        websiteUrl="https://urna-eletronica-three.vercel.app/"
        gitHubUrl="https://github.com/riandeoliveira/UrnaEletronica"
        releaseDate="Janeiro de 2023"
      />
    </div>
  );
};
