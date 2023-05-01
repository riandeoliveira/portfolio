import { useModalStore } from "store/useModalStore";
import { useTechnologyStore } from "store/useTechnologyStore";
import { TechnologyType } from "types";
import { State } from "types/state";
import * as S from "./styles";

type TechnologyProps = {
  technologies: TechnologyType[];
};

export const Technology = ({
  technologies,
}: TechnologyProps): JSX.Element => {
  const modalStore: State.Modal = useModalStore();
  const technologyStore: State.Technology = useTechnologyStore();

  return (
    <S.Box>
      {technologies.map((technology) => {
        const { icon: Icon, title } = technology;

        return (
          <S.TechnologyBox key={technology.id}>
            <S.Technology
              onClick={() => {
                modalStore.open("technology");
                technologyStore.setTechnology(technology);
              }}
            >
              <S.Icon>
                <Icon />
              </S.Icon>
              <span>{title}</span>
            </S.Technology>
          </S.TechnologyBox>
        );
      })}
    </S.Box>
  );
};
