import * as S from "./styles";
import { TitleBox, TechImage, ParallaxBox } from "../../styles/global";
import stack from "../../content/stack.json";
import { notebook } from "../../assets";

const Stack = (): JSX.Element => {
  return (
    <S.Stack id="Tecnologias">
      <TitleBox>
        <h3>Minha Stack</h3>
        <h4>Tecnologias que utilizo e meu nível de experiência nelas</h4>
      </TitleBox>
      <ParallaxBox image={notebook}>
        <S.TechBox>
          {stack.map((tech, i) => (
            <div key={i} title={`Saiba mais sobre ${tech.name}`}>
              <a href={tech.url} rel="noreferrer" target="_blank">
                <TechImage src={tech.image_url} alt={tech.image_alt} />
                <span>{tech.name}</span>
                <div>
                  <S.DomainLevelBar progress={tech.domain_level}>
                    <span>{tech.domain_level}%</span>
                  </S.DomainLevelBar>
                </div>
              </a>
            </div>
          ))}
        </S.TechBox>
      </ParallaxBox>
    </S.Stack>
  );
};

export default Stack;
