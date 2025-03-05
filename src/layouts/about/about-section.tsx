import { Section } from "@/composables/section";
import type { ReactElement } from "react";

export const AboutSection = (): ReactElement => {
  return (
    <section id="about" className="flex justify-center py-48 px-4">
      <div className="w-[1200px] flex flex-col gap-8">
        <Section.Title isHighlighted>Um Pouco Sobre Mim</Section.Title>
        <Section.Description>
          Desde pequeno, sempre fui apaixonado por tecnologia, e hoje tenho a
          oportunidade de exercer minha criatividade fazendo o que tanto amo.
          Nos últimos 3 anos, venho desenvolvendo e aprimorando minhas
          habilidades em programação. Possuo uma ótima experiência com
          tecnologias tanto da parte de front end quanto de back end. Algumas
          delas são: React, TypeScript, Next.js, Node.js, entre outras. Apesar
          do meu foco estar concentrado no front end, estou sempre aberto a
          novas oportunidades para continuar aprendendo coisas novas.
        </Section.Description>
      </div>
    </section>
  );
};
