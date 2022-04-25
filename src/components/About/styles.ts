import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const About = styled.section`
  p {
    background-color: #12121480;
    border-radius: 10px;
    text-align: justify;
    padding: 20px;
    color: ${colors.neutral};
    line-height: 2em;
    font-family: ${fonts.primary}, ${fonts.default};
    max-width: 1200px;
  }
`;
