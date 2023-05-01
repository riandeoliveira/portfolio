import styled from "styled-components";
import { theme } from "styles/theme";
import { Swiper } from "swiper/react";

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

export const Slider = styled(Swiper)`
  width: 100%;
  padding-bottom: 50px;
`;
