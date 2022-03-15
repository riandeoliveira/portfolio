import styled from "styled-components";

export const TechContainer = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--background);
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(125%);
  }
`;

export const TechName = styled.span`
  color: #737380;
`;
