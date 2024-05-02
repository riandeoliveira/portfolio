import type { IconComponentType } from "./svg";

export type SkillNameType =
  | "azure"
  | "bootstrap"
  | "cs"
  | "css"
  | "cypress"
  | "docker"
  | "dotnet"
  | "express"
  | "git"
  | "html"
  | "jest"
  | "js"
  | "laravel"
  | "materialui"
  | "mysql"
  | "nextjs"
  | "nodejs"
  | "php"
  | "postgresql"
  | "react"
  | "redux"
  | "sass"
  | "styledcomponents"
  | "tailwind"
  | "threejs"
  | "ts"
  | "vite"
  | "vscode";

interface ISkill {
  name: SkillNameType;
  title?: string;
  icon: IconComponentType;
  color: string;
}
