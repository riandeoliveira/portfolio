import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #121214;
  display: flex;
  color: white;
  font-family: "Roboto";
  padding: 100px;
  flex-direction: column;

  p {
    text-align: center;
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
