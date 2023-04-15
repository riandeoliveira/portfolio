import { Technology } from "components/Technology";
import { technologyTreeLevels } from "data/technologyTreeLevels";
import TechnologyTree from "../../../public/assets/images/technology-tree.svg";
import styles from "./styles.module.scss";

export const HardSkills = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Hard Skills</h3>
      <div className={styles.section_container}>
        <div className={styles.container}>
          {technologyTreeLevels.map((technologies, index) => (
            <Technology list={technologies} key={index} />
          ))}
        </div>
      </div>
      <TechnologyTree className={styles.tree_1} />
      <TechnologyTree className={styles.tree_2} />
      <TechnologyTree className={styles.tree_3} />
      <TechnologyTree className={styles.tree_4} />
      <TechnologyTree className={styles.tree_5} />
    </section>
  );
};
