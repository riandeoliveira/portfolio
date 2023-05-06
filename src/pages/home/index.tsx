import { AboutMeSection } from "components/AboutMeSection";
import { ExperienceSection } from "components/ExperienceSection";
import { Header } from "components/Header";
import { MyResumeSection } from "components/MyResumeSection";
import { NavItem } from "components/NavItem";
import { ProjectsSection } from "components/ProjectsSection";
import { TechnologiesSection } from "components/TechnologiesSection";
import { sections } from "data/sections";
import type { NextPage } from "next";
import { useSectionStore } from "store/useSectionStore";
import * as S from "./styles";

const Home: NextPage = (): JSX.Element => {
  const sectionStore = useSectionStore();

  return (
    <S.Page>
      <S.PageBox>
        <Header />
        <nav>
          <S.List>
            {sections.map(({ name, id, label }) => (
              <NavItem section={name} key={id}>
                {label}
              </NavItem>
            ))}
          </S.List>
        </nav>
        <main>
          {sectionStore.name === "about_me" && <AboutMeSection />}
          {sectionStore.name === "experience" && <ExperienceSection />}
          {sectionStore.name === "projects" && <ProjectsSection />}
          {sectionStore.name === "technologies" && <TechnologiesSection />}
          {sectionStore.name === "my_resume" && <MyResumeSection />}
        </main>
      </S.PageBox>
    </S.Page>
  );
};

export default Home;
