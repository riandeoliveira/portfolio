import { Technology } from "components/Technology";
import { technologyTreeLevels } from "data/technologyTreeLevels";
import styles from "./styles.module.scss";

export const HardSkills = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Hard Skills 🛠️</h3>
      <p className={styles.content}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste est nisi
        excepturi repudiandae id reiciendis, exercitationem repellat
        consequatur, dolor praesentium ducimus quidem velit magnam dolore iusto
        tempora laboriosam omnis vero! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dignissimos cumque dolor officiis iste magni. Animi
        aspernatur, aliquam explicabo ipsam qui commodi hic veritatis quia illum
        suscipit itaque, cumque voluptatum fuga.
      </p>
      <div className={styles.section_container}>
        <div className={styles.container}>
          {technologyTreeLevels.map((technologies, index) => (
            <Technology list={technologies} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
