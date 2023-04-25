import { Modal } from "@mui/material";
import { useModalStore } from "store/useModalStore";
import { useTechnologyStore } from "store/useTechnologyStore";
import { State } from "types/state";
import styles from "./styles.module.scss";

export const TechnologyModal = (): JSX.Element => {
  const modalStore: State.Modal = useModalStore();
  const technologyStore: State.Technology = useTechnologyStore();

  const { icon: Icon } = technologyStore.technology;

  // TODO: Alinhar textos para que ocupem o mesmo espaço.

  return (
    <Modal
      open={modalStore.technology.opened}
      onClose={() => modalStore.close("technology")}
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.header_container}>
            <h4 className={styles.title}>{technologyStore.technology.title}</h4>
            <span>{technologyStore.technology.category}</span>
          </div>
          <Icon />
        </div>
        <div className={styles.content}>
          <h5 className={styles.subtitle}>Sobre</h5>
          <p>{technologyStore.technology.about}</p>
        </div>
        <div className={styles.content}>
          <p>{technologyStore.technology.description}</p>
        </div>
        <div className={styles.content}>
          <h5 className={styles.subtitle}>Descoberto em</h5>
          <span>{technologyStore.technology.descoveryDate}</span>
        </div>
      </div>
    </Modal>
  );
};
