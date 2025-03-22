import { AboutSection } from "@/components/about-section";
import { AchievementsSection } from "@/components/achievements-section";
import { AppModeSwitcher } from "@/components/app-mode-switcher";
import { ContactSection } from "@/components/contact-section";
import { FooterArea } from "@/components/footer-area";
import { HeaderArea } from "@/components/header-area";
import { LanguageSwitcher } from "@/components/language-switcher";
import { OuterSpaceBackground } from "@/components/outer-space-background";
import { ProfileSection } from "@/components/profile-section";
import { ProjectGallerySection } from "@/components/project-gallery-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { useAppMode } from "@/hooks/use-app-mode";
import type { ReactElement } from "react";

export const Home = (): ReactElement => {
  const { appMode } = useAppMode();

  return (
    <>
      {appMode === "quality" && <OuterSpaceBackground />}
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
      <AppModeSwitcher />
      <LanguageSwitcher />
    </>
  );
};
