import * as S from "../styles/Main";

import video from "../assets/bg-video.mp4";
import img from "../assets/avatar.jpg";

export const Main: React.FC = () => {
  return (
    <main>
      <S.About>
        <S.Profile>
          <div>
            <h1>Rian Dias de Oliveira</h1>
            <h2>Desenvolvedor Front-End Júnior</h2>
          </div>
          <img src={img} alt="" />
        </S.Profile>
        <video autoPlay disablePictureInPicture loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </S.About>
    </main>
  );
};
