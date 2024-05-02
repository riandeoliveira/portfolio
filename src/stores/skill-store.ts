import {
  Azure,
  Bootstrap,
  CS,
  CSS,
  Cypress,
  Docker,
  DotNet,
  Express,
  Git,
  HTML,
  Jest,
  JS,
  Laravel,
  MaterialUI,
  MySQL,
  NextJS,
  NodeJS,
  PHP,
  PostgreSQL,
  React,
  Redux,
  SASS,
  StyledComponents,
  Tailwind,
  ThreeJS,
  TS,
  Vite,
  VSCode,
} from "@/assets/icons";
import type { ISkill, SkillNameType } from "@/types/skill";
import { makeAutoObservable } from "mobx";

const skillList: ISkill[] = [
  {
    name: "azure",
    title: "Azure",
    icon: Azure,
    color: "#0669BC",
  },
  {
    name: "bootstrap",
    title: "Bootstrap",
    icon: Bootstrap,
    color: "#9013FE",
  },
  {
    name: "cs",
    title: "C#",
    icon: CS,
    color: "#953CAD",
  },
  {
    name: "css",
    title: "CSS",
    icon: CSS,
    color: "#0277BD",
  },
  {
    name: "cypress",
    title: "Cypress",
    icon: Cypress,
    color: "#69D3A7",
  },
  {
    name: "docker",
    title: "Docker",
    icon: Docker,
    color: "#2396ED",
  },
  {
    name: "dotnet",
    title: ".NET",
    icon: DotNet,
    color: "#512BD4",
  },
  {
    name: "express",
    title: "Express",
    icon: Express,
    color: "#fff",
  },
  {
    name: "git",
    title: "Git",
    icon: Git,
    color: "#F03C2E",
  },
  {
    name: "html",
    title: "HTML",
    icon: HTML,
    color: "#E14E1D",
  },
  {
    name: "jest",
    title: "Jest",
    icon: Jest,
    color: "#99424F",
  },
  {
    name: "js",
    title: "JavaScript",
    icon: JS,
    color: "#F0DB4F",
  },
  {
    name: "laravel",
    title: "Laravel",
    icon: Laravel,
    color: "#FF2D20",
  },
  {
    name: "materialui",
    title: "Material UI",
    icon: MaterialUI,
    color: "#007FFF",
  },
  {
    name: "mysql",
    title: "MySQL",
    icon: MySQL,
    color: "#fff",
  },
  {
    name: "nextjs",
    title: "Next.js",
    icon: NextJS,
    color: "#fff",
  },
  {
    name: "nodejs",
    title: "Node.js",
    icon: NodeJS,
    color: "#81CD39",
  },
  {
    name: "php",
    title: "PHP",
    icon: PHP,
    color: "#777BB3",
  },
  {
    name: "postgresql",
    title: "PostgreSQL",
    icon: PostgreSQL,
    color: "#336791",
  },
  {
    name: "react",
    title: "React",
    icon: React,
    color: "#00D8FF",
  },
  {
    name: "redux",
    title: "Redux",
    icon: Redux,
    color: "#764ABC",
  },
  {
    name: "sass",
    title: "SASS",
    icon: SASS,
    color: "#CD6799",
  },
  {
    name: "styledcomponents",
    title: "Styled Components",
    icon: StyledComponents,
    color: "#DB7093",
  },
  {
    name: "tailwind",
    title: "Tailwind CSS",
    icon: Tailwind,
    color: "#14C6B7",
  },
  {
    name: "threejs",
    title: "Three.js",
    icon: ThreeJS,
    color: "#fff",
  },
  {
    name: "ts",
    title: "TypeScript",
    icon: TS,
    color: "#007ACC",
  },
  {
    name: "vite",
    title: "Vite",
    icon: Vite,
    color: "#BD34FE",
  },
  {
    name: "vscode",
    title: "VSCode",
    icon: VSCode,
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
