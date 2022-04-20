import * as S from "./styles";
import stack from "../../content/stack.json";
import { TechImage } from "../../styles/global/Globals";
import { avatar, workspace } from "../../assets";
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
                  <TechImage alt={tech.alt} key={i} src={tech.url} />
                )
            )}
          </div>
          <img alt="" src={avatar} />
        </S.AvatarBox>
      </div>
      <video autoPlay disablePictureInPicture loop muted>
        <source src={workspace} type="video/mp4" />
      </video>
    </S.Home>
  );
};

export default Home;
