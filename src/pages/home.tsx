import { CertificatesSection } from "@/components/certificates-section";
import { FooterArea } from "@/components/footer-area";
import { ProfileSection } from "@/components/profile-section";
import { ProjectParallax } from "@/components/project-parallax";
import { ProjectsSection } from "@/components/projects-section";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// TODO: Buscar um tooltip animado pro SKillIcon ou fazer um manualmente

// TODO: Testar cores de fundo para o card de projeto: zinc; neutral; stone

export const Home = observer((): ReactElement => {
  return (
    <>
      <main>
        <ProfileSection />
        <CertificatesSection />
        <div>
          {/* <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Air Jordan 4 Retro Reimagined
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
            The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your
            best opportunity to get these right now is by entering raffles and waiting for the
            official releases.
          </p>
          <button
          type="button"
          className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
          >
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
          $100
          </span>
          </button>
        </BackgroundGradient> */}
          <div className="mb-96" />
          {/* <SkillsSection /> */}
        </div>
        <ProjectParallax />
        <ProjectsSection />
        <div className="mt-64 w-full h-full" />
      </main>
      <FooterArea />
    </>
  );
});
