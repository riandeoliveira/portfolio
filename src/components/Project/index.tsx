import * as S from "./styles";
import { TitleBox } from "../../styles/global/Globals";
import projects from "../../content/projects.json";
import { stackImages } from "../../assets";
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { ParallaxBox } from "../../styles/global/Globals";
import { abc } from "../../assets";

const Project = (): JSX.Element => {
  return (
    <S.Project>
      <TitleBox>
        <h3>Meus Projetos</h3>
        <h4>Alguns projetos pessoais que desenvolvi</h4>
      </TitleBox>
      <ParallaxBox image={abc}>
        <S.ProjectBox>
          {projects.map((project, i) => (
            <div key={i}>
              <div>
                <span>{project.name}</span>
                <div>
                  <a
                    href={project.repository_url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SiGithub />
                  </a>
                  <a href={project.url} rel="noreferrer" target="_blank">
                    <BiLinkExternal />
                  </a>
                </div>
              </div>
              <img alt="" src={stackImages[i]} />
            </div>
          ))}
        </S.ProjectBox>
      </ParallaxBox>
    </S.Project>
  );
};

export default Project;
