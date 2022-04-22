import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Home = styled.section`
  & > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: space-between;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 1;
    backdrop-filter: blur(2.5px);
  }

  video {
    height: 80vh;
    object-fit: cover;
    width: 100%;
  }
`;

export const ProfileBox = styled.div`
  color: ${colors.neutral};

  h2 {
    font-size: 64px;
    letter-spacing: 7.5px;
    font-family: ${fonts.tertiary}, ${fonts.default};
    text-shadow: 5px 5px 0 #0000007c;
  }

  h1 {
    font-weight: 400;
    font-size: 48px;
    font-family: ${fonts.quaternary}, ${fonts.default};
  }
`;

export const AvatarBox = styled.div`
  div {
    animation: orbit 10s infinite linear;
    display: flex;
    height: 320px;
    background-color: transparent;
    width: 320px;
    margin-bottom: -310px;

    img {
      cursor: pointer;
      transition: transform 0.25s ease;

      &:hover {
        transform: scale(125%);
      }
    }
  }

  & > img {
    border-radius: 100%;
    border: 10px solid ${colors.primary};
    margin-bottom: 80px;
    width: 300px;
  }
`;
