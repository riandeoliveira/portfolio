import * as S from "../styles/Header";

export const Header: React.FC = () => {
  return (
    <S.Header>
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
    </S.Header>
  );
};
