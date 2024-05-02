import { personal, team } from "@/assets/images";
import type { ReactElement } from "react";
import { NeonBackground } from "../neon-background";

export const CertificatesSection = (): ReactElement => {
  return (
    <section className="flex justify-center z-40">
      <div className="flex flex-col w-[1600px] gap-8">
        <div className="relative p-1">
          <NeonBackground className="absolute rounded-xl">
            <p className="text-zinc-50 text-2xl font-semibold text-justify bg-zinc-950 p-12 rounded-xl">
              Em outubro de 2023, minha equipe foi vencedora do prêmio Local {"People's"} Choice
              Winner pelo Instituto Federal do Paraná - IFPR (Curitiba) durante o NASA Space Apps
              Challenge de 2023, o maior hackaton do mundo.
            </p>
          </NeonBackground>
        </div>
        <div className="flex justify-between gap-4">
          <div className="relative p-1">
            <NeonBackground className="absolute rounded-xl">
              <img src={team} alt="" width={720} height={507.08} className="rounded-xl" />
            </NeonBackground>
          </div>
          <div className="relative p-1">
            <NeonBackground className="absolute rounded-xl">
              <img src={personal} alt="" width={720} height={507.08} className="rounded-xl" />
            </NeonBackground>
          </div>
        </div>
      </div>
    </section>
  );
};
