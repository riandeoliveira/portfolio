import NextImage from "next/image";
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

export const Content = styled.p`
  ${theme.animations.fade_in}
`;

export const Link = styled.a`
  color: ${theme.colors.cyan};
`;

export const Image = styled(NextImage)`
  ${theme.animations.fade_in}
`;
