import styled from "styled-components";

export const ContactSection = styled.section``;

export const SocialMediasContainer = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: repeat(5, 1fr);
  width: 328px;
  padding: 20px;
`;

export const SocialMedia = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
  padding: 12px;
  background-color: #c3c3c3;
  border-radius: 10px;
  transition: transform 0.25s ease;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(125%);
  }
`;
