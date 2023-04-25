import { TechnologyArea } from "components/TechnologyArea";
import { TechnologyModal } from "components/TechnologyModal";
import { technologies } from "data/technologies";
import styles from "./styles.module.scss";

export const HardSkills = (): JSX.Element => {
  // TODO: Incluir descrição.

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
        <div className={styles.technologies_container}>
          {technologies.map((technologiesList, index) => (
            <TechnologyArea technologies={technologiesList} key={index} />
          ))}
        </div>
      </div>
      <TechnologyModal />
    </section>
  );
};
