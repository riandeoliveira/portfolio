import { Icon } from "@/assets/icons";
import type { ISkill, SkillNameType } from "@/types/skill";
import { makeAutoObservable } from "mobx";

const skillList: ISkill[] = [
  {
    name: "azure",
    title: "Azure",
    icon: Icon.Azure,
    color: "#0669BC",
  },
  {
    name: "bootstrap",
    title: "Bootstrap",
    icon: Icon.Bootstrap,
    color: "#9013FE",
  },
  {
    name: "cs",
    title: "C#",
    icon: Icon.CS,
    color: "#953CAD",
  },
  {
    name: "css",
    title: "CSS",
    icon: Icon.CSS,
    color: "#0277BD",
  },
  {
    name: "cypress",
    title: "Cypress",
    icon: Icon.Cypress,
    color: "#69D3A7",
  },
  {
    name: "docker",
    title: "Docker",
    icon: Icon.Docker,
    color: "#2396ED",
  },
  {
    name: "dotnet",
    title: ".NET",
    icon: Icon.DotNet,
    color: "#512BD4",
  },
  {
    name: "express",
    title: "Express",
    icon: Icon.Express,
    color: "#fff",
  },
  {
    name: "git",
    title: "Git",
    icon: Icon.Git,
    color: "#F03C2E",
  },
  {
    name: "html",
    title: "HTML",
    icon: Icon.HTML,
    color: "#E14E1D",
  },
  {
    name: "jest",
    title: "Jest",
    icon: Icon.Jest,
    color: "#99424F",
  },
  {
    name: "js",
    title: "JavaScript",
    icon: Icon.JS,
    color: "#F0DB4F",
  },
  {
    name: "laravel",
    title: "Laravel",
    icon: Icon.Laravel,
    color: "#FF2D20",
  },
  {
    name: "materialui",
    title: "Material UI",
    icon: Icon.MaterialUI,
    color: "#007FFF",
  },
  {
    name: "mysql",
    title: "MySQL",
    icon: Icon.MySQL,
    color: "#fff",
  },
  {
    name: "nextjs",
    title: "Next.js",
    icon: Icon.NextJS,
    color: "#fff",
  },
  {
    name: "nodejs",
    title: "Node.js",
    icon: Icon.NodeJS,
    color: "#81CD39",
  },
  {
    name: "php",
    title: "PHP",
    icon: Icon.PHP,
    color: "#777BB3",
  },
  {
    name: "postgresql",
    title: "PostgreSQL",
    icon: Icon.PostgreSQL,
    color: "#336791",
  },
  {
    name: "react",
    title: "React",
    icon: Icon.React,
    color: "#00D8FF",
  },
  {
    name: "redux",
    title: "Redux",
    icon: Icon.Redux,
    color: "#764ABC",
  },
  {
    name: "sass",
    title: "SASS",
    icon: Icon.SASS,
    color: "#CD6799",
  },
  {
    name: "styledcomponents",
    title: "Styled Components",
    icon: Icon.StyledComponents,
    color: "#DB7093",
  },
  {
    name: "tailwind",
    title: "Tailwind CSS",
    icon: Icon.Tailwind,
    color: "#14C6B7",
  },
  {
    name: "threejs",
    title: "Three.js",
    icon: Icon.ThreeJS,
    color: "#fff",
  },
  {
    name: "ts",
    title: "TypeScript",
    icon: Icon.TS,
    color: "#007ACC",
  },
  {
    name: "vite",
    title: "Vite",
    icon: Icon.Vite,
    color: "#BD34FE",
  },
  {
    name: "vscode",
    title: "VSCode",
    icon: Icon.VSCode,
    color: "#3C99D4",
  },
];

class SkillStore {
  public list: ISkill[] = skillList;

  public constructor() {
    makeAutoObservable(this);
  }

  public filterBy(skillNameList: SkillNameType[]): ISkill[] {
    return this.list.filter((skill) => skillNameList.includes(skill.name));
  }
}

export const skillStore = new SkillStore();
