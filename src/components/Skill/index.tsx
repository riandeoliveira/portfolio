import { SkillType } from "types";
import styles from "./styles.module.scss";

type SkillProps = {
  skills: SkillType[];
};

export const Skill = ({ skills }: SkillProps): JSX.Element => {
  return (
    <div className={styles.box}>
      {skills.map((skill) => {
        const { icon: Icon, title } = skill;

        return (
          <div className={styles.skill_box} key={skill.id}>
            <div className={styles.skill}>
              <div className={styles.icon}>
                <Icon />
              </div>
              <span className={styles.title}>{title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
