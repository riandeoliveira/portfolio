import { AppModeSwitcher } from "@/components/app-mode-switcher";
import { LanguageSwitcher } from "@/components/language-switcher";
import { OuterSpaceBackground } from "@/components/outer-space-background";
import { useAppMode } from "@/hooks/use-app-mode";
import { AboutSection } from "@/layouts/about/about-section";
import { AchievementsSection } from "@/layouts/achievements/achievements-section";
import { ContactSection } from "@/layouts/contact/contact-section";
import { FooterArea } from "@/layouts/footer/footer-area";
import { HeaderArea } from "@/layouts/header/header-area";
import { ProfileSection } from "@/layouts/profile/profile-section";
import { ProjectGallerySection } from "@/layouts/project-gallery/project-gallery-section";
import { ProjectsSection } from "@/layouts/projects/projects-section";
import { SkillsSection } from "@/layouts/skills/skills-section";
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
