import { image } from "@/assets/images";
import type { ReactElement } from "react";
import { HighlightText } from "../highlight-text";
import { Image } from "../image";
import { NeonBackground } from "../neon-background";

export const AchievementsSection = (): ReactElement => {
  return (
    <section id="achievements" className="flex justify-center py-48 px-4">
      <div className="w-[1200px] flex flex-col gap-8">
        <h1 className="text-zinc-50 font-bold text-4xl text-center w-fit tablet-s:text-2xl tablet-s:w-full">
          <HighlightText>O que Conquistei</HighlightText>
        </h1>
        <p className="text-zinc-50 text-justify text-xl tablet-s:text-base">
          Em outubro de 2023, minha equipe, Absolem Coders, foi vencedora do prêmio Local{" "}
          {"People's"} Choice pelo Instituto Federal do Paraná - IFPR (Curitiba) durante o{" "}
          <strong>NASA Space Apps Challenge</strong> de 2023, o maior hackaton do mundo.
        </p>
        <div className="flex gap-4 mt-8 tablet-s:flex-col">
          <NeonBackground className="max-h-[388px] flex-1">
            <Image
              src={image.teamCertificate}
              alt="Imagem de certificado de uma equipe"
              height={384}
              skeletonClassName="h-96"
              className="rounded-xl w-full h-96 object-cover"
            />
          </NeonBackground>
          <NeonBackground className="max-h-[388px] flex-1">
            <Image
              src={image.personalCertificate}
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
