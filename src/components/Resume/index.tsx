import * as S from "./styles";
import { TitleBox, ParallaxBox } from "../../styles/global";
import { resume } from "../../assets";

const Resume = (): JSX.Element => {
  return (
    <S.Resume id="Currículo">
      <TitleBox>
        <h3>Meu Currículo</h3>
        <h4>Mais informações sobre mim</h4>
      </TitleBox>
      <ParallaxBox image={resume}>
        <S.ResumeBox>
          <iframe
            allow="autoplay"
            height="480"
            src="https://drive.google.com/file/d/1f8V9Z6VrjCl3WWdCtDJUVEIha6tZVYMf/preview"
            title="Rian Oliveira's resume"
            width="640"
          ></iframe>
        </S.ResumeBox>
      </ParallaxBox>
    </S.Resume>
  );
};

export default Resume;
