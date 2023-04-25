export type ModalType = "technology";

export type SectionType =
  | "about_me"
  | "education"
  | "experience"
  | "projects"
  | "hard_skills"
  | "soft_skills";

export type TechnologyNameType =
  | "bash"
  | "bootstrap"
  | "c"
  | "csharp"
  | "css"
  | "docker"
  | "dotnet"
  | "expressjs"
  | "figma"
  | "firebase"
  | "git"
  | "github"
  | "heroku"
  | "html"
  | "javascript"
  | "jest"
  | "laravel"
  | "markdown"
  | "materialui"
  | "mongodb"
  | "mysql"
  | "nextjs"
  | "nodejs"
  | "php"
  | "postgresql"
  | "prisma"
  | "python"
  | "react"
  | "redux"
  | "sass"
  | "sequelize"
  | "sqlite"
  | "styledcomponents"
  | "tailwindcss"
  | "threejs"
  | "typescript"
  | "vercel"
  | "vite"
  | "vscode"
  | "vuejs"
  | "webpack";

export type TechnologyType = {
  id: string;
  name: TechnologyNameType;
  title: string;
  category: string;
  about: string;
  description: string;
  descoveryDate: string;
  icon: any;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
  authenticated: boolean;
};
