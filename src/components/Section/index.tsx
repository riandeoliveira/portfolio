import { ReactNode } from "react";
import * as S from "./styles";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export const Section = ({ title, children }: SectionProps): JSX.Element => {
  return (
    <S.Section>
      <S.SectionBox>
        <S.TitleBox>
          <S.Title>{title}</S.Title>
          <S.Bar />
        </S.TitleBox>
        {children}
      </S.SectionBox>
    </S.Section>
  );
};
