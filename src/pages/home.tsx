import { AboutMeSection } from "@/components/about-me-section";
import { CertificatesSection } from "@/components/certificates-section";
import { ContactSection } from "@/components/contact-section";
import { FooterArea } from "@/components/footer-area";
import { OuterSpaceBackground } from "@/components/outer-space-background";
import { ProfileSection } from "@/components/profile-section";
import { ProjectParallax } from "@/components/project-parallax";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";

export const Home = observer((): ReactElement => {
  return (
    <>
      <OuterSpaceBackground />
      <main>
        <div className="py-24" />
        <ProfileSection />
        <div className="py-24" />
        <AboutMeSection />
        <div className="py-96" />
        <CertificatesSection />
        <div className="mb-96" />
        <SkillsSection />
        <ProjectParallax />
        <ProjectsSection />
        <div className="mt-64 w-full h-full" />
        <ContactSection />
      </main>
      <FooterArea />
    </>
  );
});
