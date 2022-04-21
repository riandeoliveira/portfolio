import styled from "styled-components";
import fonts from "../../styles/fonts";
import device from "media-query-sizes";
import colors from "../../styles/colors";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  font-family: ${fonts.primary}, ${fonts.default};
  height: 200px;
  justify-content: space-between;
  margin: auto;
  max-width: 1200px;
  padding: 20px;

  div {
    align-items: center;
    display: flex;
    justify-content: space-between;

    div {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(6, 1fr);

      @media ${device.tablet} {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    a,
    button {
      align-items: center;
      background-color: ${colors.primary_light};
      border-radius: 10px;
      color: ${colors.secondary};
      cursor: pointer;
      display: flex;
      padding: 12px;
      transition: all 0.25s ease;
      width: 48px;

      svg {
        height: 100%;
        width: 100%;
      }

      &:hover {
        background-color: ${colors.secondary};
        color: ${colors.neutral};
        transform: scale(125%);
      }
    }
  }

  p {
    color: ${colors.neutral_dark};
    text-align: center;

    strong {
      color: ${colors.neutral};
    }
  }
`;
