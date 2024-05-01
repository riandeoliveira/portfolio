import personalCertificate from "@/assets/images/personal-certificate.png";
import teamCertificate from "@/assets/images/team-certificate.png";

import type { ReactElement } from "react";
import { BackgroundGradient } from "./background-gradient";

export const CertificatesSection = (): ReactElement => {
  return (
    <section className="flex justify-center z-40">
      <div className="flex flex-col w-[1600px] gap-8">
        <div className="relative p-1">
          <BackgroundGradient className="absolute rounded-xl">
            <p className="text-zinc-50 text-2xl font-semibold text-justify bg-zinc-950 p-12 rounded-xl">
              Em outubro de 2023, minha equipe foi vencedora do prêmio Local {"People's"} Choice
              Winner pelo Instituto Federal do Paraná - IFPR (Curitiba) durante o NASA Space Apps
              Challenge de 2023, o maior hackaton do mundo.
            </p>
          </BackgroundGradient>
        </div>
        <div className="flex justify-between gap-4">
          <div className="relative p-1">
            <BackgroundGradient className="absolute rounded-xl">
              <img
                src={teamCertificate}
                alt=""
                width={720}
                height={507.08}
                className="rounded-xl"
              />
            </BackgroundGradient>
          </div>
          <div className="relative p-1">
            <BackgroundGradient className="absolute rounded-xl">
              <img
                src={personalCertificate}
                alt=""
                width={720}
                height={507.08}
                className="rounded-xl"
              />
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </section>
  );
};
