import styled from "styled-components";

export const StackSection = styled.section`
  background-color: var(--other);
`;

export const StackContainer = styled.div`
  display: grid;
  height: 500px;
  grid-template-columns: repeat(4, 1fr);
  width: 800px;
  gap: 20px;
  padding: 20px;
  margin: 20px;
  margin: auto;
`;
