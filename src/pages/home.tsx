import { OuterSpaceBackground } from "@/components/outer-space-background";
import { AboutSection } from "@/layouts/about/about-section";
import { AchievementsSection } from "@/layouts/achievements/achievements-section";
import { ContactSection } from "@/layouts/contact/contact-section";
import { FooterArea } from "@/layouts/footer/footer-area";
import { HeaderArea } from "@/layouts/header/header-area";
import { ProfileSection } from "@/layouts/profile/profile-section";
import { ProjectGallerySection } from "@/layouts/project-gallery/project-gallery-section";
import { ProjectsSection } from "@/layouts/projects/projects-section";
import { SkillsSection } from "@/layouts/skills/skills-section";
import { localStorageStore } from "@/stores/local-storage-store";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";

export const Home = observer((): ReactElement => {
  return (
    <>
      {localStorageStore.isQualityMode && <OuterSpaceBackground />}
      <HeaderArea />
      <button
        type="button"
        onClick={localStorageStore.toggleMode}
        className="bg-zinc-800 p-4 m-4 rounded-xl hover:bg-zinc-700 transition-colors"
      >
        Alterar para o Modo {localStorageStore.isQualityMode ? "Desempenho" : "Qualidade"}
      </button>
      <main className="flex flex-col gap-24">
        <ProfileSection />
        <AboutSection />
        <ProjectGallerySection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <FooterArea />
    </>
  );
});
