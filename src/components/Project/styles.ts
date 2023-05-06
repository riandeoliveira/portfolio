import NextImage from "next/image";
import styled from "styled-components";
import { theme } from "styles/theme";

type HoverBoxProps = {
  hovered: boolean;
};

export const OpaqueBackground = styled.div<HoverBoxProps>`
  background-color: ${theme.colors.darkest_purple};
  border-radius: 10px;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  transition: opacity 0.2s ease;
  opacity: ${(props) => (props.hovered ? 0.6 : 0)};
`;

export const Box = styled.div<HoverBoxProps>`
  border-radius: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  z-index: 1;
  justify-content: space-between;
  transition: opacity 0.2s ease;
  opacity: ${(props) => (props.hovered ? 1 : 0)};
`;

export const Content = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 300;
  text-align: justify;
`;

export const List = styled.ul`
  display: flex;
  gap: 16px;
`;

export const Footer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

export const LinkBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
`;

export const Link = styled.a`
  display: flex;
  transition: scale 0.2s ease;

  &:hover {
    scale: 1.25;
  }
`;

export const Date = styled.span`
  text-align: center;
  font-weight: 300;
`;

export const Image = styled(NextImage)<HoverBoxProps>`
  display: block;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  transition: filter 0.2s ease;

  filter: ${(props) => (props.hovered ? "blur(2px)" : "")};
`;
