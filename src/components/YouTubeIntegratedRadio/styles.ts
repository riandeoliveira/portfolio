import styled from "styled-components";
import { theme } from "styles/theme";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10rem;
  width: 300rem;
`;

export const TitleBox = styled.div`
  align-items: center;
  display: flex;
  gap: 12rem;
  justify-content: center;
`;

export const Title = styled.span`
  font-size: 20rem;
  font-weight: 500;
`;

export const MusicPlayerBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Thumbnail = styled.svg`
  border-radius: 3rem;
`;

export const MusicPlayerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PlayButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const PlayButton = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 100rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 6rem;

  ${theme.components.animated_background}
`;
