import { OuterSpaceBackground } from "@/components/outer-space-background";
import { SwitchModeButton } from "@/components/toggle-mode-button";
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
      <SwitchModeButton />
    </>
  );
});
