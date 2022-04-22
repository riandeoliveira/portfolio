import * as S from "./styles";
import stack from "../../content/stack.json";
import { TechImage } from "../../styles/global";
import { avatar, code } from "../../assets";
import Header from "../Header";

const Home = (): JSX.Element => {
  return (
    <S.Home>
      <div>
        <Header />
        <S.ProfileBox>
          <h1>Rian Dias de Oliveira</h1>
          <h2>Desenvolvedor Front-End</h2>
        </S.ProfileBox>
        <S.AvatarBox>
          <div>
            {stack.map(
              (tech, i) =>
                tech.name === "React" && (
                  <TechImage
                    alt={tech.image_alt}
                    key={i}
                    onClick={(e) => console.log(e.target)}
                    src={tech.image_url}
                    title="Me pegue se for capaz!"
                  />
                )
            )}
          </div>
          <img alt="" src={avatar} />
        </S.AvatarBox>
      </div>
      <video autoPlay disablePictureInPicture loop muted>
        <source src={code} type="video/mp4" />
      </video>
    </S.Home>
  );
};

export default Home;
