import * as S from "./styles";
import {
  SiGmail,
  SiLinkedin,
  SiWhatsapp,
  SiGithub,
  SiInstagram,
  SiTwitter,
} from "react-icons/si";
import { MdKeyboardArrowUp } from "react-icons/md";

const Footer = (): JSX.Element => {
  return (
    <S.Footer>
      <div>
        <div>
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
          <a
            href="https://github.com/riandeoliveira"
            rel="noreferrer"
            target="_blank"
          >
            <SiGithub />
          </a>
          <a
            href="https://wa.me/5551991852873"
            rel="noreferrer"
            target="_blank"
          >
            <SiWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/rian.deoliveira/"
            rel="noreferrer"
            target="_blank"
          >
            <SiInstagram />
          </a>
          <a
            href="https://twitter.com/_MrBachelor_"
            rel="noreferrer"
            target="_blank"
          >
            <SiTwitter />
          </a>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          type="button"
        >
          <MdKeyboardArrowUp />
        </button>
      </div>
      <p>
        Made with 💙 by <strong>Rian Oliveira</strong>
      </p>
    </S.Footer>
  );
};

export default Footer;
