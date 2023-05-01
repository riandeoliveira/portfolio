import styled from "styled-components";
import { theme } from "styles/theme";

export const Section = styled.section`
  background-color: ${theme.colors.darkest_purple};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 600px;
  overflow: auto;
  padding: 32px;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;

  ${theme.animations.fade_in}
`;

export const Bar = styled.hr`
  border-radius: 100px;
  height: 1px;

  ${theme.components.animated_background}
`;

export const SectionBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Technologies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 600px;

  ${theme.animations.fade_in};
`;
