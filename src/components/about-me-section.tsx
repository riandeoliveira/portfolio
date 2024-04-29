import type { ReactElement } from "react";
import { TextGenerateEffect } from "./text-generate-effect";
import { WavyBackground } from "./wavy-background";

export const AboutMeSection = (): ReactElement => {
  return (
    <WavyBackground>
      <section className="flex justify-center">
        <div className="w-[1200px]">
          <h1 className="text-zinc-50 font-bold text-4xl">Um Pouco Sobre Mim</h1>
          <TextGenerateEffect className="text-zinc-50">
            Olá, me chamo Rian, e é um prazer ver você por aqui! Desde pequeno, sempre fui
            apaixonado por tecnologia, e hoje tenho a oportunidade de exercer minha criatividade
            fazendo o que tanto amo. Nos últimos 3 anos, venho desenvolvendo e aprimorando minhas
            habilidades em programação. Possuo uma ótima experiência com tecnologias tanto da parte
            de front-end quanto de back-end. Algumas delas são: React; TypeScript; .NET; C#; entre
            outras. Apesar do meu foco estar concentrado no front-end, estou sempre aberto a novas
            oportunidades para continuar aprendendo coisas novas.
          </TextGenerateEffect>
        </div>
      </section>
    </WavyBackground>
  );
};
