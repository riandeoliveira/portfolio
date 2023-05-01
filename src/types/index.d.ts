import { IconType } from "react-icons";

export type ModalType = "technology";

export type ProjectType = {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies_icons: any[];
  github_link: string;
  website_link: string;
  release_date: string;
};

export type SectionNameType =
  | "about_me"
  | "education"
  | "experience"
  | "projects"
  | "hard_skills"
  | "soft_skills";

export type SectionType = {
  id: string;
  name: SectionNameType;
  label: string;
};

export type SocialMediasType = {
  id: string;
  name: string;
  url: string;
  icon: IconType;
};

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
