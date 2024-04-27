import { ReactComponent as Azure } from "@/assets/icons/skill/azure.svg";
import { ReactComponent as Bootstrap } from "@/assets/icons/skill/bootstrap.svg";
import { ReactComponent as CS } from "@/assets/icons/skill/cs.svg";
import { ReactComponent as CSS } from "@/assets/icons/skill/css.svg";
import { ReactComponent as Cypress } from "@/assets/icons/skill/cypress.svg";
import { ReactComponent as Docker } from "@/assets/icons/skill/docker.svg";
import { ReactComponent as DotNet } from "@/assets/icons/skill/dotnet.svg";
import { ReactComponent as Express } from "@/assets/icons/skill/express.svg";
import { ReactComponent as Git } from "@/assets/icons/skill/git.svg";
import { ReactComponent as HTML } from "@/assets/icons/skill/html.svg";
import { ReactComponent as Jest } from "@/assets/icons/skill/jest.svg";
import { ReactComponent as JS } from "@/assets/icons/skill/js.svg";
import { ReactComponent as Laravel } from "@/assets/icons/skill/laravel.svg";
import { ReactComponent as MaterialUI } from "@/assets/icons/skill/materialui.svg";
import { ReactComponent as MySQL } from "@/assets/icons/skill/mysql.svg";
import { ReactComponent as NextJS } from "@/assets/icons/skill/nextjs.svg";
import { ReactComponent as NodeJS } from "@/assets/icons/skill/nodejs.svg";
import { ReactComponent as PHP } from "@/assets/icons/skill/php.svg";
import { ReactComponent as PostgreSQL } from "@/assets/icons/skill/postgresql.svg";
import { ReactComponent as React } from "@/assets/icons/skill/react.svg";
import { ReactComponent as Redux } from "@/assets/icons/skill/redux.svg";
import { ReactComponent as SASS } from "@/assets/icons/skill/sass.svg";
import { ReactComponent as StyledComponents } from "@/assets/icons/skill/styledcomponents.svg";
import { ReactComponent as Tailwind } from "@/assets/icons/skill/tailwind.svg";
import { ReactComponent as TS } from "@/assets/icons/skill/ts.svg";
import { ReactComponent as Vite } from "@/assets/icons/skill/vite.svg";
import { ReactComponent as VSCode } from "@/assets/icons/skill/vscode.svg";
import type { SkillType } from "@/types/skill";
import type { FunctionComponent, SVGProps } from "react";

export type IconComponentType = FunctionComponent<
  SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

interface Skill {
  name: SkillType;
  title: string;
  icon: IconComponentType;
  color: string;
}

export const skills: Skill[] = [
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
    color: "#fff",
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
