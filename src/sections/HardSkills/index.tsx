import { Technology } from "components/Technology";
import { technologyTreeLevels } from "data/technologyTreeLevels";
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
      <svg
        className={styles.svg}
        width="1125"
        height="1125"
        viewBox="0 0 200 1"
        style={{ position: "absolute" }}
      >
        <path
          d="M100 -85 Q 28 5 100 85"
          stroke="#361973"
          stroke-width="3"
          fill="none"
          className={styles.sla}
        ></path>
        <path
          d="M100 -85 Q 171 5 100 85"
          stroke="#361973"
          stroke-width="3"
          fill="none"
          className={styles.sla}
        ></path>
        <path
          d="M100 -85 L 100 85"
          stroke="#361973"
          stroke-width="3"
          fill="none"
          className={styles.sla}
        />
      </svg>
      <svg
        className={styles.svg}
        width="1125"
        height="1125"
        viewBox="0 0 200 1"
        style={{ position: "absolute", translate: "0 960px" }}
      >
        <path
          d="M100 -85 Q 28 5 100 85"
          stroke="#361973"
          stroke-width="3"
          fill="none"
          className={styles.sla}
        ></path>
        <path
          d="M100 -85 Q 171 5 100 85"
          stroke="#361973"
          stroke-width="3"
          fill="none"
          className={styles.sla}
        ></path>
        <path
          d="M100 -85 L 100 85"
          stroke="#361973"
          stroke-width="3"
          fill="none"
          className={styles.sla}
        />
      </svg>
      <svg
        className={styles.svg}
        width="1125"
        height="1125"
        viewBox="0 0 200 1"
        style={{ position: "absolute", translate: "0 1920px" }}
      >
        <path
          d="M100 -85 Q 28 5 100 85"
          stroke="#361973"
          stroke-width="3"
          fill="none"
          className={styles.sla}
        ></path>
        <path
          d="M100 -85 Q 171 5 100 85"
          stroke="#361973"
          stroke-width="3"
          fill="none"
          className={styles.sla}
        ></path>
        <path
          d="M100 -85 L 100 85"
          stroke="#361973"
          stroke-width="3"
          fill="none"
          className={styles.sla}
        />
      </svg>
      <svg
        className={styles.svg}
        width="1125"
        height="1125"
        viewBox="0 0 200 1"
        style={{ position: "absolute", translate: "0 2880px" }}
      >
        <path
          d="M100 -85 Q 28 5 100 85"
          stroke="#361973"
          stroke-width="3"
          fill="none"
          className={styles.sla}
        ></path>
        <path
          d="M100 -85 Q 171 5 100 85"
          stroke="#361973"
          stroke-width="3"
          fill="none"
          className={styles.sla}
        ></path>
        <path
          d="M100 -85 L 100 85"
          stroke="#361973"
          stroke-width="3"
          fill="none"
          className={styles.sla}
        />
      </svg>
      <svg
        className={styles.svg}
        width="1125"
        height="1125"
        viewBox="0 0 200 1"
        style={{ position: "absolute", translate: "0 3840px" }}
      >
        <path
          d="M100 -85 Q 28 5 100 85"
          stroke="#361973"
          stroke-width="3"
          fill="none"
          className={styles.sla}
        ></path>
        <path
          d="M100 -85 Q 171 5 100 85"
          stroke="#361973"
          stroke-width="3"
          fill="none"
          className={styles.sla}
        ></path>
        <path
          d="M100 -85 L 100 85"
          stroke="#361973"
          stroke-width="3"
          fill="none"
          className={styles.sla}
        />
      </svg>
    </section>
  );
};
