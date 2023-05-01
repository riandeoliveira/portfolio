import { Section } from "components/Section";
import { Technology } from "components/Technology";
import { TechnologyModal } from "components/TechnologyModal";
import { technologies } from "data/technologies";
import * as S from "./styles";

export const TechnologiesSection = (): JSX.Element => {
  return (
    <Section title="Tecnologias 🛠️">
      <S.SectionBox>
        <S.Technologies>
          {technologies.map((technologiesList, index) => (
            <Technology technologies={technologiesList} key={index} />
          ))}
        </S.Technologies>
      </S.SectionBox>
      <TechnologyModal />
    </Section>
  );
};
