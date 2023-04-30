import { Header } from "components/Header";
import { Navbar } from "components/Navbar";
import type { NextPage } from "next";
import { AboutMe } from "sections/AboutMe";
import { HardSkills } from "sections/HardSkills";
import { useSectionStore } from "store/useSectionStore";
import * as S from "./styles";

const Home: NextPage = (): JSX.Element => {
  const sectionStore = useSectionStore();

  return (
    <S.Page>
      <S.PageBox>
        <Header />
        <Navbar />
        {sectionStore.name === "about_me" && <AboutMe />}
        {sectionStore.name === "hard_skills" && <HardSkills />}
      </S.PageBox>
    </S.Page>
  );
};

export default Home;
