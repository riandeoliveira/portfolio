import dynamic from "next/dynamic";
import styled from "styled-components";
import { theme } from "styles/theme";
import { Swiper } from "swiper/react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const Header = styled.header`
  background-color: ${theme.colors.darkest_purple};
  border-radius: 10rem;
  display: flex;
  height: 192rem;
  justify-content: space-between;
  padding: 32rem;
`;

export const HeaderBox = styled.div`
  display: flex;
  gap: 24rem;
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12rem;
  justify-content: center;
`;

export const SocialMedias = styled.div`
  display: flex;
  gap: 10rem;
`;

export const Slider = styled(Swiper)`
  margin: 0;
`;

export const MusicPlayer = styled(ReactPlayer)`
  display: none;
`;
