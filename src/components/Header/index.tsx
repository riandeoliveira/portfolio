import * as S from "./styles";
import nav_list from "../../content/nav_list.json";
import { BiMenu } from "react-icons/bi";
import { useState, useEffect } from "react";

const Header = (): JSX.Element => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenwidth] = useState(window.innerWidth);

  const toggleNav = (): void => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenwidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  return (
    <S.Header>
      <span>Rian Oliveira</span>
      <nav>
        {(toggleMenu || screenWidth >= 768) && (
          <ul>
            {nav_list.map((item, i) => (
              <li key={i}>
                <a href={`#${nav_list[i]}`} rel="internal">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
        <BiMenu onClick={toggleNav} />
      </nav>
    </S.Header>
  );
};

export default Header;
