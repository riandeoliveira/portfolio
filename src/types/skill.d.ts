import type { FunctionComponent, SVGProps } from "react";

export type SkillType =
  | "arduino"
  | "azure"
  | "bash"
  | "bootstrap"
  | "cs"
  | "css"
  | "cypress"
  | "docker"
  | "dotnet"
  | "express"
  | "figma"
  | "firebase"
  | "git"
  | "github"
  | "html"
  | "jest"
  | "js"
  | "laravel"
  | "linux"
  | "materialui"
  | "md"
  | "mongodb"
  | "mysql"
  | "nextjs"
  | "nodejs"
  | "php"
  | "postgresql"
  | "powershell"
  | "prisma"
  | "py"
  | "react"
  | "redux"
  | "sass"
  | "sqlite"
  | "styledcomponents"
  | "tailwind"
  | "threejs"
  | "ts"
  | "ubuntu"
  | "vercel"
  | "vite"
  | "vitest"
  | "vscode"
  | "windows";

type IconComponentType = FunctionComponent<
  SVGProps<SVGSVGElement> & {
    title?: string;
  }
>;

interface ISkill {
  name: SkillType;
  title?: string;
  icon: IconComponentType;
  color: string;
}
