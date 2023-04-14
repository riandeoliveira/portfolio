import { TechnologyType } from "types";
import styles from "./styles.module.scss";

type TechnologyProps = {
  list: TechnologyType[];
};

export const Technology = ({ list }: TechnologyProps): JSX.Element => {
  return (
    <div className={styles.technology_container}>
      {list.map(({ icon: Icon, name }, index) => (
        <div className={styles.container} key={index}>
          <div className={styles.technology}>
            <Icon />
          </div>
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
};
