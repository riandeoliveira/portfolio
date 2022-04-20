import * as S from "./styles";
import { TitleBox } from "../../styles/global/Globals";
import { ParallaxBox } from "../../styles/global/Globals";
import { space } from "../../assets";

const About = (): JSX.Element => {
  return (
    <S.AboutBox>
      <TitleBox>
        <h3>Quem Sou Eu</h3>
        <h4>Um pouco sobre mim</h4>
      </TitleBox>
      <ParallaxBox image={space}>
        <p>
          Olá, Mundo! Meu nome é Rian, tenho 20 anos e sou um Desenvolvedor
          Front-End. Estou cursando o 3º semestre de Ciência da Computação pelo
          Centro Universitário Cesuca, em Cachoeirinha, RS. Ao longo de um ano
          tenho procurado me especializar nas tecnologias fundamentais da web:
          HTML, CSS e JavaScript, depois, seguindo para outras mais avançadas,
          como React. Também possuo alguns conhecimentos básicos de Back-End,
          como: construção de APIs, através de Node.js e Express.js; banco de
          dados, com MongoDB e automações para a web com Python, porém, meu lado
          Front-End é mais forte. Atualmente estou buscando minha primeira
          oportunidade na área.
        </p>
      </ParallaxBox>
    </S.AboutBox>
  );
};

export default About;
