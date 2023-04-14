import { Header } from "components/Header";
import { Navbar } from "components/Navbar";
import type { NextPage } from "next";
import { AboutMe } from "sections/AboutMe";
import { HardSkills } from "sections/HardSkills";
import { useSectionStore } from "store/useSectionStore";
import styles from "./styles.module.scss";

const Home: NextPage = (): JSX.Element => {
  const sectionStore = useSectionStore();

  return (
    <div className={styles.page}>
      <div className={styles.page_container}>
        <Header />
        <Navbar />
        {sectionStore.name === "about_me" && <AboutMe />}
        {sectionStore.name === "hard_skills" && <HardSkills />}
      </div>
    </div>
  );
};

export default Home;
