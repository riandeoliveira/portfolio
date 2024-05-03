import { OuterSpaceBackground } from "@/components/outer-space-background";
import { AboutMeSection } from "@/components/sections/about-me-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
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
      <main className="flex flex-col gap-24">
        {/* <ProfileSection /> */}
        {/* <AboutMeSection /> */}
        {/* <ProjectsPresentationSection /> */}
        <ProjectsSection />
        {/* <SkillsSection /> */}
        {/* <AchievementsSection /> */}
        {/* <ContactSection /> */}
      </main>
      {/* <FooterArea /> */}
    </>
  );
});
