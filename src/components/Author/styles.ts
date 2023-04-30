import styled from "styled-components";
import { theme } from "styles/theme";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: fit-content;
`;

export const Title = styled.h1`
  font-size: 32rem;
  font-weight: 700;
  line-height: 24rem;
`;

export const Bar = styled.hr`
  border-radius: 100rem;
  height: 1rem;

  ${theme.components.animated_background}
`;

export const SubtitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: fit-content;
`;

export const Subtitle = styled.h2`
  font-size: 20rem;
  font-weight: 300;
  line-height: 28rem;
`;
