import { AboutMeSection } from "components/AboutMeSection";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { NavItem } from "components/NavItem";
import { ProjectsSection } from "components/ProjectsSection";
import { SkillsSection } from "components/SkillsSection";
import { sections } from "data/sections";
import type { NextPage } from "next";
import { useSectionStore } from "store/useSectionStore";
import { State } from "types/state";
import styles from "./styles.module.scss";

const Home: NextPage = (): JSX.Element => {
  const sectionStore: State.Section = useSectionStore();

  return (
    <div className={styles.page}>
      <div className={styles.page_box}>
        <Header />
        <nav>
          <ul className={styles.list}>
            {sections.map(({ name, id, label }) => (
              <NavItem section={name} key={id}>
                {label}
              </NavItem>
            ))}
          </ul>
        </nav>
        <main>
          {sectionStore.name === "about_me" && <AboutMeSection />}
          {sectionStore.name === "projects" && <ProjectsSection />}
          {sectionStore.name === "skills" && <SkillsSection />}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
