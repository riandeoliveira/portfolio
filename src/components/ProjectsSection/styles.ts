import styled from "styled-components";
import { theme } from "styles/theme";
import { Swiper } from "swiper/react";

export const Slider = styled(Swiper)`
  width: 100%;
  padding-bottom: 50px;

  .swiper-slide {
    user-select: none;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${theme.colors.cyan};
  }
`;
