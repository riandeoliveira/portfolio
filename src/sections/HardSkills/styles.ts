import styled from "styled-components";
import { theme } from "styles/theme";

export const Section = styled.section`
  background-color: ${theme.colors.darkest_purple};
  border-radius: 10rem;
  display: flex;
  flex-direction: column;
  gap: 32rem;
  height: 600rem;
  overflow: auto;
  padding: 32rem;
`;

export const Title = styled.h3`
  animation: ${theme.animations.fade_in};
  font-size: 24rem;
  font-weight: 500;
`;

export const Content = styled.p`
  animation: ${theme.animations.fade_in};
`;

export const SectionBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Technologies = styled.div`
  animation: ${theme.animations.fade_in};
  display: flex;
  flex-direction: column;
  gap: 64rem;
  width: 600rem;
`;
