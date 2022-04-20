import styled from "styled-components";
import { ParallaxBoxProps } from "../../interfaces/interfaces";

export const TechImage = styled.img`
  height: 50px;
  width: 50px;
`;

export const TitleBox = styled.div`
  background-color: #121214;
  color: white;
  text-align: center;
  padding: 20px;

  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 42px;
    margin-bottom: 10px;
  }

  h4 {
    font-family: "Roboto";
    color: #737380;
    font-weight: 400;
  }
`;

export const SocialMediasBox = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: repeat(5, 1fr);
  width: 328px;
  padding: 20px;

  a {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    margin: auto;
    color: black;
    justify-content: center;
    padding: 12px;
    background-color: #a2a2a2;
    border-radius: 100%;
    transition: transform 0.25s ease;
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
    }

    &:hover {
      transform: scale(125%);
    }
  }
`;

export const ParallaxBox = styled.div<ParallaxBoxProps>`
  background-attachment: fixed;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px;
`;
