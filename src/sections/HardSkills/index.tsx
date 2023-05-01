import { TechnologyArea } from "components/TechnologyArea";
import { TechnologyModal } from "components/TechnologyModal";
import { technologies } from "data/technologies";
import * as S from "./styles";

export const HardSkills = (): JSX.Element => {
  // TODO: Incluir descrição.

  return (
    <S.Section>
      <S.Title>Hard Skills 🛠️</S.Title>
      <S.Bar />
      <S.SectionBox>
        <S.Technologies>
          {technologies.map((technologiesList, index) => (
            <TechnologyArea technologies={technologiesList} key={index} />
          ))}
        </S.Technologies>
      </S.SectionBox>
      <TechnologyModal />
    </S.Section>
  );
};
