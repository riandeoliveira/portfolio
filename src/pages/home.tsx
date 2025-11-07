import { useEffect } from "react";
import { OuterSpaceBackground } from "@/components/backgrounds/outer-space-background";
import { FooterLayout } from "@/components/layouts/footer-layout";
import { HeaderLayout } from "@/components/layouts/header-layout";
import { AboutSection } from "@/components/sections/about-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProfileSection } from "@/components/sections/profile-section";
import { ProjectGallerySection } from "@/components/sections/project-gallery-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { useAppMode } from "@/hooks/use-app-mode";
import { useProject } from "@/hooks/use-project";

export const HomePage = () => {
  const { getProjects } = useProject();
  const { appMode } = useAppMode();

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      {appMode === "quality" && <OuterSpaceBackground />}
      <HeaderLayout />
      <main className="flex flex-col gap-24">
        <ProfileSection />
        <AboutSection />
        <ProjectGallerySection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <FooterLayout />
    </>
  );
};
