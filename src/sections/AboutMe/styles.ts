import NextImage from "next/image";
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
  font-size: 24rem;
  font-weight: 500;

  ${theme.animations.fade_in}
`;

export const Content = styled.p`
  ${theme.animations.fade_in}
`;

export const Link = styled.a`
  color: ${theme.colors.cyan};
`;

export const Image = styled(NextImage)`
  ${theme.animations.fade_in}
`;
