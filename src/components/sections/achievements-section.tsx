import { personal, team } from "@/assets/images";
import type { ReactElement } from "react";
import { HighlightText } from "../highlight-text";
import { NeonBackground } from "../neon-background";

export const AchievementsSection = (): ReactElement => {
  return (
    <section className="flex justify-center py-48 px-4">
      <div className="w-[1200px] flex flex-col gap-4">
        <HighlightText className="text-zinc-50 font-bold text-4xl text-center w-fit">
          O que Conquistei
        </HighlightText>
        <p className="text-zinc-50 text-justify text-xl">
          Em outubro de 2023, minha equipe foi vencedora do prêmio Local {"People's"} Choice pelo
          Instituto Federal do Paraná - IFPR (Curitiba) durante o{" "}
          <strong>NASA Space Apps Challenge</strong> de 2023, o maior hackaton do mundo.
        </p>
        <div className="flex gap-4 mt-8">
          <NeonBackground>
            <img src={team} alt="" width={720} height={507.08} className="rounded-xl" />
          </NeonBackground>
          <NeonBackground>
            <img src={personal} alt="" width={720} height={507.08} className="rounded-xl" />
          </NeonBackground>
        </div>
      </div>
    </section>
  );
};
