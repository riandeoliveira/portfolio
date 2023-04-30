import * as S from "./styles";

export const Author = (): JSX.Element => {
  return (
    <S.Box>
      <S.TitleBox>
        <S.Title>Rian Dias de Oliveira</S.Title>
        <S.Bar />
      </S.TitleBox>
      <S.SubtitleBox>
        <S.Subtitle>Desenvolvedor Web</S.Subtitle>
        <S.Bar />
      </S.SubtitleBox>
    </S.Box>
  );
};
