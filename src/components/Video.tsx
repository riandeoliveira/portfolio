import styled from "styled-components";

import video from "../assets/bg-video.mp4";

const Container = styled.div`
  video {
    height: 80vh;
    object-fit: cover;
    opacity: 0.5;
    width: 100%;
  }

  div {
    background-color: green;
  }
`;

export const Video = () => {
  return (
    <Container>
      <video autoPlay disablePictureInPicture loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
      </div>
    </Container>
  );
};
