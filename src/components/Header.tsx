import styled from "styled-components";

const HeaderArea = styled.header`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: center;
`;

const Navbar = styled.nav`
  height: 100%;
`;

const List = styled.ul`
  display: flex;
  height: inherit;
`;

const Item = styled.li`
  align-items: center;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  display: flex;
  height: inherit;
  margin: 0 20px;
  text-align: center;

  &:hover {
    border-color: #006aeb;
  }
`;

const Link = styled.a`
  color: white;
`;

export const Header: React.FC = () => {
  return (
    <HeaderArea>
      <Navbar>
        <List>
          <Item>
            <Link href=".">Sobre</Link>
          </Item>
          <Item>
            <Link href=".">Tecnologias</Link>
          </Item>
          <Item>
            <Link href=".">Projetos</Link>
          </Item>
          <Item>
            <Link href=".">Contato</Link>
          </Item>
        </List>
      </Navbar>
    </HeaderArea>
  );
};
