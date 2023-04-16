import { useModalStore } from "store/useModalStore";
import { useTechnologyStore } from "store/useTechnologyStore";
import { State } from "types/state";
import styles from "./styles.module.scss";

export const TechnologyModal = (): JSX.Element => {
  const modalStore: State.Modal = useModalStore();
  const technologyStore: State.Technology = useTechnologyStore();

  const toggleModalStyle: string = modalStore.technology.opened
    ? styles.open
    : styles.close;

  return (
    <>
      <div
        className={`${styles.background_container} ${toggleModalStyle}`}
        onClick={() => modalStore.close("technology")}
      ></div>
      <div className={`${styles.modal} ${toggleModalStyle}`}>
        <h4>{technologyStore.technology.title}</h4>
        <p>{technologyStore.technology.description}</p>
      </div>
    </>
  );
};
