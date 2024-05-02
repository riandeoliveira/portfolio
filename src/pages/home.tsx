import { OuterSpaceBackground } from "@/components/outer-space-background";
import { AboutMeSection } from "@/components/sections/about-me-section";
import { CertificatesSection } from "@/components/sections/certificates-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FooterArea } from "@/components/sections/footer-area";
import { ProfileSection } from "@/components/sections/profile-section";
import { ProjectsPresentationSection } from "@/components/sections/projects-presentation-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
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
        <ProjectsPresentationSection />
        <ProjectsSection />
        <div className="mt-64 w-full h-full" />
        <ContactSection />
      </main>
      <FooterArea />
    </>
  );
});
