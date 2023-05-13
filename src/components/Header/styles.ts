import styled from "styled-components";
import { theme } from "styles/theme";

export const Header = styled.header`
  background-color: ${theme.colors.darkest_purple};
  border-radius: 20px;
  display: flex;
  min-height: 192px;
  justify-content: space-between;
  padding: 32px;
  transition: all 0.15s ease;

  @media ${theme.devices.tablet_l} {
    flex-direction: column;
    gap: 18px;
  }

  @media ${theme.devices.tablet_s} {
    padding: 16px;
    justify-content: center;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  gap: 24px;
  transition: all 0.15s ease;

  @media ${theme.devices.tablet_s} {
    gap: 18px;
    flex-direction: column;
  }
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
`;

export const SocialMedias = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  transition: all 0.15s ease;

  @media ${theme.devices.tablet_s} {
    justify-content: center;
  }
`;

export const Link = styled.a`
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  transition: all 0.15s ease, scale 0.3s ease;
  width: 32px;

  ${theme.components.animated_background}
  ${theme.functions.focus("small", theme.colors.cyan, "light")}

  &:hover {
    scale: 1.25;
  }

  @media ${theme.devices.tablet_s} {
    width: 28px;
    height: 28px;
  }
`;
