import styled from "styled-components";
import { theme } from "styles/theme";

export const Footer = styled.footer`
  background-color: ${theme.colors.darkest_purple};
  border-radius: 20px;
  padding: 10px;
  text-align: center;
`;

export const Content = styled.span`
  transition: all 0.15s ease;

  @media ${theme.devices.tablet_s} {
    font-size: 14px;
  }
`;
