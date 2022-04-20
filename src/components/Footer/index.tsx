import * as S from "./styles";
import { TitleBox } from "../../styles/global/Globals";
import {
  SiGmail,
  SiLinkedin,
  SiWhatsapp,
  SiGithub,
  SiInstagram,
} from "react-icons/si";

const Footer = (): JSX.Element => {
  return (
    <S.Footer>
      <S.SocialMediasBox>
        <a
          href="mailto:riandiasdeoliveira2001@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <SiGmail />
        </a>
        <a
          href="https://www.linkedin.com/in/riandeoliveira/"
          rel="noreferrer"
          target="_blank"
        >
          <SiLinkedin />
        </a>
        <a href="https://wa.me/5551991852873" rel="noreferrer" target="_blank">
          <SiWhatsapp />
        </a>
        <a
          href="https://github.com/riandeoliveira"
          rel="noreferrer"
          target="_blank"
        >
          <SiGithub />
        </a>
        <a
          href="https://www.instagram.com/rian.deoliveira/"
          rel="noreferrer"
          target="_blank"
        >
          <SiInstagram />
        </a>
      </S.SocialMediasBox>
      <p>
        Made with 💙 by <strong>Rian Oliveira</strong>
      </p>
    </S.Footer>
  );
};

export default Footer;
