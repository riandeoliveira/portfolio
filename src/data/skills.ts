import { Icon } from "@/assets/icons";
import type { IconType } from "@/types/icon";

export type Skill = {
  id: string;
  name: string;
  color: string;
  icon: IconType;
};

export const skills: Skill[] = [
  {
    id: "azure",
    name: "Azure",
    color: "#0669BC",
    icon: Icon.Azure,
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    color: "#9013FE",
    icon: Icon.Bootstrap,
  },
  {
    id: "csharp",
    name: "C#",
    color: "#953CAD",
    icon: Icon.CSharp,
  },
  {
    id: "css",
    name: "CSS",
    color: "#0277BD",
    icon: Icon.Css,
  },
  {
    id: "cypress",
    name: "Cypress",
    color: "#69D3A7",
    icon: Icon.Cypress,
  },
  {
    id: "docker",
    name: "Docker",
    color: "#2396ED",
    icon: Icon.Docker,
  },
  {
    id: "dotnet",
    name: ".NET",
    color: "#512BD4",
    icon: Icon.DotNet,
  },
  {
    id: "express",
    name: "Express",
    color: "#fff",
    icon: Icon.Express,
  },
  {
    id: "git",
    name: "Git",
    color: "#F03C2E",
    icon: Icon.Git,
  },
  {
    id: "html",
    name: "HTML",
    color: "#E14E1D",
    icon: Icon.Html,
  },
  {
    id: "javascript",
    name: "JavaScript",
    color: "#F0DB4F",
    icon: Icon.JavaScript,
  },
  {
    id: "jest",
    name: "Jest",
    color: "#99424F",
    icon: Icon.Jest,
  },
  {
    id: "material-ui",
    name: "Material UI",
    color: "#007FFF",
    icon: Icon.MaterialUI,
  },
  {
    id: "nestjs",
    name: "Nest.js",
    color: "#E0234E",
    icon: Icon.NestJS,
  },
  {
    id: "nextjs",
    name: "Next.js",
    color: "#fff",
    icon: Icon.NextJS,
  },
  {
    id: "nodejs",
    name: "Node.js",
    color: "#81CD39",
    icon: Icon.NodeJS,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    color: "#336791",
    icon: Icon.PostgreSQL,
  },
  {
    id: "react",
    name: "React",
    color: "#00D8FF",
    icon: Icon.React,
  },
  {
    id: "redux",
    name: "Redux",
    color: "#764ABC",
    icon: Icon.Redux,
  },
  {
    id: "sass",
    name: "SASS",
    color: "#CD6799",
    icon: Icon.Sass,
  },
  {
    id: "styled-components",
    name: "Styled Components",
    color: "#DB7093",
    icon: Icon.StyledComponents,
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    color: "#14C6B7",
    icon: Icon.TailwindCSS,
  },
  {
    id: "threejs",
    name: "Three.js",
    color: "#fff",
    icon: Icon.ThreeJS,
  },
  {
    id: "typescript",
    name: "TypeScript",
    color: "#007ACC",
    icon: Icon.TypeScript,
  },
  {
    id: "vite",
    name: "Vite",
    color: "#BD34FE",
    icon: Icon.Vite,
  },
  {
    id: "vuejs",
    name: "Vue.js",
    color: "#41B883",
    icon: Icon.VueJS,
  },
  {
    id: "vuetify",
    name: "Vuetify",
    color: "#1697F6",
    icon: Icon.Vuetify,
  },
];
