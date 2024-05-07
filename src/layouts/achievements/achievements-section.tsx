import { Image } from "@/components/image";
import { NeonBackground } from "@/components/neon-background";
import { Section } from "@/composables/section";
import type { ReactElement } from "react";

export const AchievementsSection = (): ReactElement => {
  return (
    <section id="achievements" className="flex justify-center py-48 px-4">
      <div className="w-[1200px] flex flex-col gap-8">
        <Section.Title isHighlighted>O que Conquistei</Section.Title>
        <Section.Description>
          Em outubro de 2023, minha equipe, Absolem Coders, foi vencedora do prêmio Local{" "}
          {"People's"} Choice pelo Instituto Federal do Paraná - IFPR (Curitiba) durante o{" "}
          <strong>NASA Space Apps Challenge</strong> de 2023, o maior hackaton do mundo.
        </Section.Description>
        <div className="flex gap-4 mt-8 tablet-s:flex-col">
          <NeonBackground className="max-h-[388px] flex-1">
            <Image
              src="https://i.imgur.com/lafl4UT.png"
              alt="Imagem de certificado de uma equipe"
              height={384}
              skeletonClassName="h-96"
              className="rounded-xl w-full h-96 object-cover"
            />
          </NeonBackground>
          <NeonBackground className="max-h-[388px] flex-1">
            <Image
              src="https://i.imgur.com/undCXcN.png"
              alt="Imagem de certificado de uma pessoa"
              height={384}
              skeletonClassName="h-96"
              className="rounded-xl w-full h-96 object-cover"
            />
          </NeonBackground>
        </div>
      </div>
    </section>
  );
};
