import * as S from "./styles";
import { TitleBox, TechImage } from "../../styles/global/Globals";
import stack from "../../content/stack.json";
import { ParallaxBox } from "../../styles/global/Globals";
import { sla } from "../../assets";

const Stack = (): JSX.Element => {
  return (
    <S.Stack>
      <TitleBox>
        <h3>Minha Stack</h3>
        <h4>
          Tecnologias que costumo utilizar e meu nível de experiência nelas
        </h4>
      </TitleBox>
      <ParallaxBox image={sla}>
        <S.TechBox>
          {stack.map((tech, i) => (
            <div key={i}>
              <TechImage src={tech.url} alt={tech.alt} />
              <span>{tech.name}</span>
              <progress max="100" value={tech.domain_level}></progress>
            </div>
          ))}
        </S.TechBox>
      </ParallaxBox>
    </S.Stack>
  );
};

export default Stack;
