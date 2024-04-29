import personalCertificate from "@/assets/images/personal-certificate.png";
import teamCertificate from "@/assets/images/team-certificate.png";
import { Boxes } from "./background-boxes";

export const BackgroundBoxesDemo = () => {
  return (
    <>
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <Boxes />
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <div className="flex flex-col w-[1600px] gap-8">
          <p className="text-zinc-50 text-3xl font-semibold text-justify">
            Em outubro de 2023, minha equipe foi vencedora do prêmio Local {"People's"} Choice
            Winner pelo Instituto Federal do Paraná - IFPR (Curitiba) durante o NASA Space Apps
            Challenge de 2023, o maior hackaton do mundo.
          </p>
          <div className="flex justify-between gap-4">
            <img src={teamCertificate} alt="" width={720} height={507.08} />
            <img src={personalCertificate} alt="" width={720} height={507.08} />
          </div>
        </div>
      </div>
    </>
  );
};
