import { Section } from "components/Section";
import * as S from "./styles";

export const ExperienceSection = (): JSX.Element => {
  return (
    <Section title="Experiência 💼">
      <S.Section>
        <S.Experience>
          <S.RehagroLogo />
          <S.Box>
            <S.Title>Desenvolvedor Web</S.Title>
            <S.Label>Estágio</S.Label>
            <S.Link
              href="https://rehagro.com.br/"
              rel="external"
              target="_blank"
            >
              Rehagro
            </S.Link>
            <S.Label>Remoto</S.Label>
            <S.Label>nov de 2021 - atualmente</S.Label>
          </S.Box>
        </S.Experience>
        <S.Experience>
          <S.CesucaLogo />
          <S.Box>
            <S.Title>Ciência da Computação (5º semestre)</S.Title>
            <S.Label>Curso Superior</S.Label>
            <S.Link
              href="https://www.cesuca.edu.br/"
              rel="external"
              target="_blank"
            >
              Centro Universitário Cesuca
            </S.Link>
            <S.Label>Presencial</S.Label>
            <S.Label>mar de 2021 - dez de 2024</S.Label>
          </S.Box>
        </S.Experience>
      </S.Section>
    </Section>
  );
};
