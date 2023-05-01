import styled from "styled-components";
import { theme } from "styles/theme";

export const Section = styled.section`
  background-color: ${theme.colors.darkest_purple};
  border-radius: 10px;
  height: 600px;
  overflow: auto;
  padding: 32px;
`;

export const SectionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${theme.animations.fade_in}
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: fit-content;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
`;

export const Bar = styled.hr`
  border-radius: 100px;
  height: 1px;

  ${theme.components.animated_background}
`;
