import { Section } from "components/Section";
import { TechnologyArea } from "components/TechnologyArea";
import { TechnologyModal } from "components/TechnologyModal";
import { technologies } from "data/technologies";
import * as S from "./styles";

export const HardSkillsSection = (): JSX.Element => {
  return (
    <Section title="Hard Skills 🛠️">
      <S.SectionBox>
        <S.Technologies>
          {technologies.map((technologiesList, index) => (
            <TechnologyArea technologies={technologiesList} key={index} />
          ))}
        </S.Technologies>
      </S.SectionBox>
      <TechnologyModal />
    </Section>
  );
};
