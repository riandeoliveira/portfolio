import { Modal } from "@mui/material";
import { useModalStore } from "store/useModalStore";
import { useTechnologyStore } from "store/useTechnologyStore";
import { State } from "types/state";
import * as S from "./styles";

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
      <S.Modal>
        <S.Header>
          <div>
            <S.Title>{technologyStore.technology.title}</S.Title>
            <span>{technologyStore.technology.category}</span>
          </div>
          <Icon />
        </S.Header>
        <S.Content>
          <S.Subtitle>Sobre</S.Subtitle>
          <p>{technologyStore.technology.about}</p>
        </S.Content>
        <S.Content>
          <p>{technologyStore.technology.description}</p>
        </S.Content>
        <S.Content>
          <S.Subtitle>Descoberto em</S.Subtitle>
          <span>{technologyStore.technology.descoveryDate}</span>
        </S.Content>
      </S.Modal>
    </Modal>
  );
};
