import { useEffect } from "react";
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
import { useProject } from "@/hooks/use-project";

export const HomePage = () => {
  const { getProjects } = useProject();

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
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
