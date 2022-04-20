import styled from "styled-components";

export const Stack = styled.section`
  background-color: #121214;
  font-family: "Roboto";
`;

export const TechBox = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  margin: 20px;
  margin: auto;
  padding: 20px;
  width: 800px;

  div {
    height: 150px;
    width: 175px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #3c3c3c;
    transition: transform 0.25s ease;

    &:hover {
      transform: scale(125%);
    }

    span {
      color: #737380;
    }

    progress::-webkit-progress-value {
      background: #006aeb;
    }
  }
`;
