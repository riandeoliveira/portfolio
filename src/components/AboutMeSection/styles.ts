import NextImage from "next/image";
import styled from "styled-components";
import { theme } from "styles/theme";

export const Content = styled.p`
  ${theme.animations.fade_in}
`;

export const Link = styled.a`
  color: ${theme.colors.cyan};
`;

export const Image = styled(NextImage)`
  ${theme.animations.fade_in}
`;
