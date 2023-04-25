import { useModalStore } from "store/useModalStore";
import { useTechnologyStore } from "store/useTechnologyStore";
import { TechnologyType } from "types";
import { State } from "types/state";
import styles from "./styles.module.scss";

type TechnologyProps = {
  technologies: TechnologyType[];
};

export const TechnologyArea = ({
  technologies,
}: TechnologyProps): JSX.Element => {
  const modalStore: State.Modal = useModalStore();
  const technologyStore: State.Technology = useTechnologyStore();

  return (
    <div className={styles.technology_area}>
      {technologies.map((technology, index) => {
        const { icon: Icon, title } = technology;

        return (
          <div className={styles.technology_container} key={index}>
            <div
              className={styles.technology}
              onClick={() => {
                modalStore.open("technology");
                technologyStore.setTechnology(technology);
              }}
            >
              <div className={styles.icon}>
                <Icon />
              </div>
              <span>{title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
