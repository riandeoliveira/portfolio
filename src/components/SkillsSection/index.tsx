import { Section } from "components/Section";
import { Skill } from "components/Skill";
import { skills } from "data/skills";
import styles from "./styles.module.scss";

export const SkillsSection = (): JSX.Element => {
  return (
    <Section title="Habilidades 🛠️">
      <div className={styles.section}>
        <div className={styles.skills}>
          {skills.map((skillsList, index) => (
            <Skill skills={skillsList} key={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};
