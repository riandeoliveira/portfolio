import { NavItem } from "./NavItem";

export const Navbar = (): JSX.Element => {
  return (
    <nav>
      <ul className="flex shadow-neon rounded-full">
        <NavItem name="about_me" className="rounded-l-full">
          Sobre mim
        </NavItem>
        <NavItem name="education" className="border-l-0">
          Educação
        </NavItem>
        <NavItem name="experience" className="border-l-0">
          Experiência
        </NavItem>
        <NavItem name="projects" className="border-l-0">
          Projetos
        </NavItem>
        <NavItem name="hard_skills" className="border-l-0">
          Hard Skills
        </NavItem>
        <NavItem name="soft_skills" className="rounded-r-full border-l-0">
          Soft Skills
        </NavItem>
      </ul>
    </nav>
  );
};
