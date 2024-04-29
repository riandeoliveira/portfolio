import personalCertificate from "@/assets/images/personal-certificate.png";
import teamCertificate from "@/assets/images/team-certificate.png";

import type { ReactElement } from "react";

export const CertificatesSection = (): ReactElement => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col w-[1600px] gap-8">
        <p className="text-zinc-50 text-3xl font-semibold text-justify">
          Em outubro de 2023, minha equipe foi vencedora do prêmio Local {"People's"} Choice Winner
          pelo Instituto Federal do Paraná - IFPR (Curitiba) durante o NASA Space Apps Challenge de
          2023, o maior hackaton do mundo.
        </p>
        <div className="flex justify-between gap-4">
          <img src={teamCertificate} alt="" width={720} height={507.08} />
          <img src={personalCertificate} alt="" width={720} height={507.08} />
        </div>
      </div>
    </section>
  );
};
