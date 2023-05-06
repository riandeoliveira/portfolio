import { Section } from "components/Section";
import { Skill } from "components/Skill";
import { skills } from "data/skills";
import * as S from "./styles";

export const SkillsSection = (): JSX.Element => {
  return (
    <Section title="Habilidades 🛠️">
      <S.Section>
        <S.Skills>
          {skills.map((skillsList, index) => (
            <Skill skills={skillsList} key={index} />
          ))}
        </S.Skills>
      </S.Section>
    </Section>
  );
};
