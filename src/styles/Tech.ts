import styled from "styled-components";

export const TechContainer = styled.div`
  border: 2px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  background-color: var(--background);
  cursor: pointer;

  &:hover {
    transform: scale(125%);
  }
`;

export const TechImage = styled.img`
  height: 50px;
  width: 50px;
`;

export const TechName = styled.span``;
