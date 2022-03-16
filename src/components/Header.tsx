import { HeaderArea, Navbar, List, Item, Link } from "../styles/Header";

export const Header: React.FC = () => {
  return (
    <HeaderArea>
      <Navbar>
        <List>
          <Item>
            <Link href=".">Sobre</Link>
          </Item>
          <Item>
            <Link href=".">Stack</Link>
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
