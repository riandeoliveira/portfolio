import * as S from "../styles/styles";

export const Navbar: React.FC = () => {
  return (
    <S.Navbar>
      <ul>
        <li>
          <a href=".">Sobre</a>
        </li>
        <li>
          <a href=".">Tecnologias</a>
        </li>
        <li>
          <a href=".">Projetos</a>
        </li>
        <li>
          <a href=".">Contato</a>
        </li>
      </ul>
    </S.Navbar>
  );
};
