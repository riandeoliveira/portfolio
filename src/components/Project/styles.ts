import NextImage from "next/image";
import styled from "styled-components";
import { theme } from "styles/theme";

type HoverBoxProps = {
  hovered: boolean;
};

export const OpaqueBackground = styled.div<HoverBoxProps>`
  background-color: ${theme.colors.darkest_purple};
  border-radius: 10px;
  max-width: 744px;
  height: 100%;
  position: absolute;
  z-index: 1;
  transition: opacity 0.2s ease;
  opacity: ${(props) => (props.hovered ? 0.6 : 0)};
  left: 0;
  right: 0;
  margin: auto;
`;

export const Box = styled.div<HoverBoxProps>`
  border-radius: 10px;
  position: absolute;
  max-width: 744px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  z-index: 1;
  justify-content: space-between;
  transition: opacity 0.2s ease;
  opacity: ${(props) => (props.hovered ? 1 : 0)};
  left: 0;
  right: 0;
  margin: auto;
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

  @media ${theme.devices.tablet_s} {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 300;
  text-align: justify;

  @media ${theme.devices.tablet_s} {
    font-size: 14px;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media ${theme.devices.tablet_s} {
    justify-content: center;
    gap: 8px;
  }
`;

export const Icon = styled.div`
  @media ${theme.devices.tablet_s} {
    scale: 0.8;
  }
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

  @media ${theme.devices.tablet_s} {
    font-size: 12px;
  }
`;

export const Image = styled(NextImage)<HoverBoxProps>`
  display: block;
  max-width: 744px;
  border-radius: 10px;
  object-fit: cover;
  width: 100%;
  margin: auto;
  transition: filter 0.2s ease;

  filter: ${(props) => (props.hovered ? "blur(2px)" : "")};
`;
