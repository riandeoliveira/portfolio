import styled from "styled-components";
import { theme } from "styles/theme";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: fit-content;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 24px;
`;

export const Bar = styled.hr`
  border-radius: 100px;
  height: 1px;

  ${theme.components.animated_background}
`;

export const SubtitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: fit-content;
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  line-height: 28px;
`;
