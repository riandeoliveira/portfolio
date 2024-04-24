import { ReactComponent as Arduino } from "@/assets/icons/skill/arduino.svg";
import { ReactComponent as Azure } from "@/assets/icons/skill/azure.svg";
import { ReactComponent as Bash } from "@/assets/icons/skill/bash.svg";
import { ReactComponent as Bootstrap } from "@/assets/icons/skill/bootstrap.svg";
import { ReactComponent as CS } from "@/assets/icons/skill/cs.svg";
import { ReactComponent as CSS } from "@/assets/icons/skill/css.svg";
import { ReactComponent as Cypress } from "@/assets/icons/skill/cypress.svg";
import { ReactComponent as Docker } from "@/assets/icons/skill/docker.svg";
import { ReactComponent as DotNet } from "@/assets/icons/skill/dotnet.svg";
import { ReactComponent as Express } from "@/assets/icons/skill/express.svg";
import { ReactComponent as Figma } from "@/assets/icons/skill/figma.svg";
import { ReactComponent as Firebase } from "@/assets/icons/skill/firebase.svg";
import { ReactComponent as Git } from "@/assets/icons/skill/git.svg";
import { ReactComponent as GitHub } from "@/assets/icons/skill/github.svg";
import { ReactComponent as HTML } from "@/assets/icons/skill/html.svg";
import { ReactComponent as Jest } from "@/assets/icons/skill/jest.svg";
import { ReactComponent as JS } from "@/assets/icons/skill/js.svg";
import { ReactComponent as Laravel } from "@/assets/icons/skill/laravel.svg";
import { ReactComponent as Linux } from "@/assets/icons/skill/linux.svg";
import { ReactComponent as MaterialUI } from "@/assets/icons/skill/materialui.svg";
import { ReactComponent as MD } from "@/assets/icons/skill/md.svg";
import { ReactComponent as MongoDB } from "@/assets/icons/skill/mongodb.svg";
import { ReactComponent as MySQL } from "@/assets/icons/skill/mysql.svg";
import { ReactComponent as NextJS } from "@/assets/icons/skill/nextjs.svg";
import { ReactComponent as NodeJS } from "@/assets/icons/skill/nodejs.svg";
import { ReactComponent as PHP } from "@/assets/icons/skill/php.svg";
import { ReactComponent as PostgreSQL } from "@/assets/icons/skill/postgresql.svg";
import { ReactComponent as PowerShell } from "@/assets/icons/skill/powershell.svg";
import { ReactComponent as Prisma } from "@/assets/icons/skill/prisma.svg";
import { ReactComponent as PY } from "@/assets/icons/skill/py.svg";
import { ReactComponent as React } from "@/assets/icons/skill/react.svg";
import { ReactComponent as Redux } from "@/assets/icons/skill/redux.svg";
import { ReactComponent as SASS } from "@/assets/icons/skill/sass.svg";
import { ReactComponent as SQLite } from "@/assets/icons/skill/sqlite.svg";
import { ReactComponent as StyledComponents } from "@/assets/icons/skill/styledcomponents.svg";
import { ReactComponent as Tailwind } from "@/assets/icons/skill/tailwind.svg";
import { ReactComponent as ThreeJS } from "@/assets/icons/skill/threejs.svg";
import { ReactComponent as TS } from "@/assets/icons/skill/ts.svg";
import { ReactComponent as Ubuntu } from "@/assets/icons/skill/ubuntu.svg";
import { ReactComponent as Vercel } from "@/assets/icons/skill/vercel.svg";
import { ReactComponent as Vite } from "@/assets/icons/skill/vite.svg";
import { ReactComponent as Vitest } from "@/assets/icons/skill/vitest.svg";
import { ReactComponent as VSCode } from "@/assets/icons/skill/vscode.svg";
import { ReactComponent as Windows } from "@/assets/icons/skill/windows.svg";
import type { SkillType } from "@/types/skill";
import type { ReactElement } from "react";

interface Skill {
  name: SkillType;
  title: string;
  icon: ReactElement;
}

export const skills: Skill[] = [
  { name: "arduino", title: "Arduino", icon: <Arduino /> },
  { name: "azure", title: "Azure", icon: <Azure /> },
  { name: "bash", title: "Bash", icon: <Bash /> },
  { name: "bootstrap", title: "Bootstrap", icon: <Bootstrap /> },
  { name: "cs", title: "C#", icon: <CS /> },
  { name: "css", title: "CSS", icon: <CSS /> },
  { name: "cypress", title: "Cypress", icon: <Cypress /> },
  { name: "docker", title: "Docker", icon: <Docker /> },
  { name: "dotnet", title: ".NET", icon: <DotNet /> },
  { name: "express", title: "ExpressJS", icon: <Express /> },
  { name: "figma", title: "Figma", icon: <Figma /> },
  { name: "firebase", title: "Firebase", icon: <Firebase /> },
  { name: "git", title: "Git", icon: <Git /> },
  { name: "github", title: "GitHub", icon: <GitHub /> },
  { name: "html", title: "HTML", icon: <HTML /> },
  { name: "jest", title: "Jest", icon: <Jest /> },
  { name: "js", title: "JavaScript", icon: <JS /> },
  { name: "laravel", title: "Laravel", icon: <Laravel /> },
  { name: "linux", title: "Linux", icon: <Linux /> },
  { name: "materialui", title: "MaterialUI", icon: <MaterialUI /> },
  { name: "md", title: "Markdown", icon: <MD /> },
  { name: "mongodb", title: "MongoDB", icon: <MongoDB /> },
  { name: "mysql", title: "MySQL", icon: <MySQL /> },
  { name: "nextjs", title: "NextJS", icon: <NextJS /> },
  { name: "nodejs", title: "NodeJS", icon: <NodeJS /> },
  { name: "php", title: "PHP", icon: <PHP /> },
  { name: "postgresql", title: "PostgreSQL", icon: <PostgreSQL /> },
  { name: "powershell", title: "PowerShell", icon: <PowerShell /> },
  { name: "prisma", title: "Prisma", icon: <Prisma /> },
  { name: "py", title: "Python", icon: <PY /> },
  { name: "react", title: "React", icon: <React /> },
  { name: "redux", title: "Redux", icon: <Redux /> },
  { name: "sass", title: "SASS", icon: <SASS /> },
  { name: "sqlite", title: "SQLite", icon: <SQLite /> },
  { name: "styledcomponents", title: "Styled Components", icon: <StyledComponents /> },
  { name: "tailwind", title: "TailwindCSS", icon: <Tailwind /> },
  { name: "threejs", title: "ThreeJS", icon: <ThreeJS /> },
  { name: "ts", title: "TypeScript", icon: <TS /> },
  { name: "ubuntu", title: "Ubuntu", icon: <Ubuntu /> },
  { name: "vercel", title: "Vercel", icon: <Vercel /> },
  { name: "vite", title: "Vite", icon: <Vite /> },
  { name: "vitest", title: "Vitest", icon: <Vitest /> },
  { name: "vscode", title: "VSCode", icon: <VSCode /> },
  { name: "windows", title: "Windows", icon: <Windows /> },
];
