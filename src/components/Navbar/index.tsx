import { NavItem } from "components/NavItem";
import * as S from "./styles";

export const Navbar = (): JSX.Element => {
  return (
    <nav>
      <S.List>
        <NavItem section="about_me">Sobre mim</NavItem>
        <NavItem section="education">Educação</NavItem>
        <NavItem section="experience">Experiência</NavItem>
        <NavItem section="projects">Projetos</NavItem>
        <NavItem section="hard_skills">Hard Skills</NavItem>
        <NavItem section="soft_skills">Soft Skills</NavItem>
      </S.List>
    </nav>
  );
};
