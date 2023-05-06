import dynamic from "next/dynamic";
import styled from "styled-components";
import { theme } from "styles/theme";
import { Swiper } from "swiper/react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const Header = styled.header`
  background-color: ${theme.colors.darkest_purple};
  border-radius: 10px;
  display: flex;
  height: 192px;
  justify-content: space-between;
  padding: 32px;
`;

export const HeaderBox = styled.div`
  display: flex;
  gap: 24px;
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
`;

export const Link = styled.a`
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  transition: scale 0.3s ease;
  width: 32px;

  ${theme.components.animated_background}
  ${theme.functions.focus("small", theme.colors.cyan, "light")}

  &:hover {
    scale: 1.25;
  }
`;

export const Slider = styled(Swiper)`
  margin: 0;
`;

export const MusicPlayer = styled(ReactPlayer)`
  display: none;
`;
