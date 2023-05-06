import { SkillType } from "types";
import * as S from "./styles";

type SkillProps = {
  skills: SkillType[];
};

export const Skill = ({ skills }: SkillProps): JSX.Element => {
  return (
    <S.Box>
      {skills.map((skill) => {
        const { icon: Icon, title } = skill;

        return (
          <S.SkillBox key={skill.id}>
            <S.Skill>
              <S.Icon>
                <Icon />
              </S.Icon>
              <span>{title}</span>
            </S.Skill>
          </S.SkillBox>
        );
      })}
    </S.Box>
  );
};
