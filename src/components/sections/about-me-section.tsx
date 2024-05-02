import type { ReactElement } from "react";
import { HighlightText } from "../highlight-text";

export const AboutMeSection = (): ReactElement => {
  return (
    <section className="flex justify-center py-48 px-4">
      <div className="w-[1200px] flex flex-col gap-4">
        <HighlightText className="text-zinc-50 font-bold text-4xl text-center w-fit">
          Um Pouco Sobre Mim
        </HighlightText>
        <p className="text-zinc-50 text-justify text-xl">
          Desde pequeno, sempre fui apaixonado por tecnologia, e hoje tenho a oportunidade de
          exercer minha criatividade fazendo o que tanto amo. Nos últimos 3 anos, venho
          desenvolvendo e aprimorando minhas habilidades em programação. Possuo uma ótima
          experiência com tecnologias tanto da parte de front end quanto de back end. Algumas delas
          são: React, TypeScript, .NET, C#, entre outras. Apesar do meu foco estar concentrado no
          front end, estou sempre aberto a novas oportunidades para continuar aprendendo coisas
          novas.
        </p>
      </div>
    </section>
  );
};
