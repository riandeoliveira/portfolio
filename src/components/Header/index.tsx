import * as S from "./styles";
import nav_list from "../../content/nav_list.json";

const Header = (): JSX.Element => {
  return (
    <S.Header>
      <span>Rian Oliveira</span>
      <nav>
        <ul>
          {nav_list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </nav>
    </S.Header>
  );
};

export default Header;
