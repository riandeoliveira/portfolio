import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { ParallaxBoxProps } from "../../interfaces";
import colors from "../colors";

export const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
  }

  body {
    background-color: ${colors.primary};
  }
`;

export const TechImage = styled.img`
  max-height: 50px;
  max-width: 50px;
`;

export const TitleBox = styled.div`
  text-align: center;
  padding: 50px;

  h3 {
    color: ${colors.neutral};
    font-family: "Oswald", sans-serif;
    font-size: 42px;
    margin-bottom: 10px;
  }

  h4 {
    font-family: "Roboto";
    color: ${colors.neutral_dark};
    font-weight: 400;
  }
`;

export const ParallaxBox = styled.div<ParallaxBoxProps>`
  background-attachment: fixed;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding: 100px 20px;
`;
