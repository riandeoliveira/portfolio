import { css } from "styled-components";
import { animations } from "./animations";
import { colors } from "./colors";

const animatedButtonOpacity: number = 80;
const animatedButtonColor: string = `${colors.black}${animatedButtonOpacity}`;

export const components = {
  animated_background: css`
    ${animations.gradient}

    background-image: linear-gradient(-45deg, ${colors.gradient_palette});
    background-size: 400% 400%;
  `,

  animated_button: css`
    border-bottom: 3rem solid ${animatedButtonColor};
    border-right: 3rem solid ${animatedButtonColor};

    &:active {
      border-bottom: none;
      border-left: 3rem solid ${animatedButtonColor};
      border-right: none;
      border-top: 3rem solid ${animatedButtonColor};
    }
  `,
};
