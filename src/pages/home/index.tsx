import { Header } from "components/Header";
import { NavItem } from "components/NavItem";
import { sections } from "data/sections";
import type { NextPage } from "next";
import { AboutMe } from "sections/AboutMe";
import { HardSkills } from "sections/HardSkills";
import { Projects } from "sections/Projects";
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
        {sectionStore.name === "about_me" && <AboutMe />}
        {sectionStore.name === "projects" && <Projects />}
        {sectionStore.name === "hard_skills" && <HardSkills />}
      </S.PageBox>
    </S.Page>
  );
};

export default Home;
