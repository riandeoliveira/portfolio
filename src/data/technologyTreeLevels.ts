import { TechnologyType } from "types";
import BashLogo from "../../public/assets/icons/bash-logo.svg";
import BootstrapLogo from "../../public/assets/icons/bootstrap-logo.svg";
import CLogo from "../../public/assets/icons/c-logo.svg";
import CSharpLogo from "../../public/assets/icons/csharp-logo.svg";
import CssLogo from "../../public/assets/icons/css-logo.svg";
import DockerLogo from "../../public/assets/icons/docker-logo.svg";
import DotNetLogo from "../../public/assets/icons/dotnet-logo.svg";
import ExpressJSLogo from "../../public/assets/icons/expressjs-logo.svg";
import FigmaLogo from "../../public/assets/icons/figma-logo.svg";
import FirebaseLogo from "../../public/assets/icons/firebase-logo.svg";
import GitLogo from "../../public/assets/icons/git-logo.svg";
import GitHubLogo from "../../public/assets/icons/github-logo.svg";
import HerokuLogo from "../../public/assets/icons/heroku-logo.svg";
import HtmlLogo from "../../public/assets/icons/html-logo.svg";
import JavaScriptLogo from "../../public/assets/icons/javascript-logo.svg";
import JestLogo from "../../public/assets/icons/jest-logo.svg";
import LaravelLogo from "../../public/assets/icons/laravel-logo.svg";
import MarkdownLogo from "../../public/assets/icons/markdown-logo.svg";
import MaterialUILogo from "../../public/assets/icons/materialui-logo.svg";
import MongoDBLogo from "../../public/assets/icons/mongodb-logo.svg";
import MySQLLogo from "../../public/assets/icons/mysql-logo.svg";
import NextJSLogo from "../../public/assets/icons/nextjs-logo.svg";
import NodeJSLogo from "../../public/assets/icons/nodejs-logo.svg";
import PhpLogo from "../../public/assets/icons/php-logo.svg";
import PostgreSQLLogo from "../../public/assets/icons/postgresql-logo.svg";
import PrismaLogo from "../../public/assets/icons/prisma-logo.svg";
import PythonLogo from "../../public/assets/icons/python-logo.svg";
import ReactLogo from "../../public/assets/icons/react-logo.svg";
import ReduxLogo from "../../public/assets/icons/redux-logo.svg";
import SASSLogo from "../../public/assets/icons/sass-logo.svg";
import SequelizeLogo from "../../public/assets/icons/sequelize-logo.svg";
import SQLiteLogo from "../../public/assets/icons/sqlite-logo.svg";
import StyledComponentsLogo from "../../public/assets/icons/styled-components-logo.svg";
import TailwindCSSLogo from "../../public/assets/icons/tailwindcss-logo.svg";
import ThreeJSLogo from "../../public/assets/icons/threejs-logo.svg";
import TypeScriptLogo from "../../public/assets/icons/typescript-logo.svg";
import VercelLogo from "../../public/assets/icons/vercel-logo.svg";
import ViteLogo from "../../public/assets/icons/vite-logo.svg";
import VsCodeLogo from "../../public/assets/icons/vscode-logo.svg";
import VueJSLogo from "../../public/assets/icons/vuejs-logo.svg";
import WebpackLogo from "../../public/assets/icons/webpack-logo.svg";

export const technologyTreeLevels: TechnologyType[][] = [
  [
    {
      id: 41,
      name: "Firebase",
      icon: FirebaseLogo,
    },
  ],
  [
    {
      id: 40,
      name: "C#",
      icon: CSharpLogo,
    },
    {
      id: 39,
      name: ".NET",
      icon: DotNetLogo,
    },
  ],
  [
    {
      id: 38,
      name: "PostgreSQL",
      icon: PostgreSQLLogo,
    },
    {
      id: 37,
      name: "Laravel",
      icon: LaravelLogo,
    },
    {
      id: 36,
      name: "MaterialUI",
      icon: MaterialUILogo,
    },
  ],
  [
    {
      id: 35,
      name: "ThreeJS",
      icon: ThreeJSLogo,
    },
    {
      id: 34,
      name: "Redux",
      icon: ReduxLogo,
    },
  ],
  [
    {
      id: 33,
      name: "C",
      icon: CLogo,
    },
  ],
  [
    {
      id: 32,
      name: "Bash",
      icon: BashLogo,
    },
    {
      id: 31,
      name: "Docker",
      icon: DockerLogo,
    },
  ],
  [
    {
      id: 30,
      name: "Jest",
      icon: JestLogo,
    },
    {
      id: 29,
      name: "VueJS",
      icon: VueJSLogo,
    },
    {
      id: 28,
      name: "TailwindCSS",
      icon: TailwindCSSLogo,
    },
  ],
  [
    {
      id: 27,
      name: "NextJS",
      icon: NextJSLogo,
    },
    {
      id: 26,
      name: "Vercel",
      icon: VercelLogo,
    },
  ],
  [
    {
      id: 25,
      name: "Prisma",
      icon: PrismaLogo,
    },
  ],
  [
    {
      id: 24,
      name: "Vite",
      icon: ViteLogo,
    },
    {
      id: 23,
      name: "Styled Components",
      icon: StyledComponentsLogo,
    },
  ],
  [
    {
      id: 22,
      name: "Heroku",
      icon: HerokuLogo,
    },
    {
      id: 21,
      name: "TypeScript",
      icon: TypeScriptLogo,
    },
    {
      id: 20,
      name: "SASS",
      icon: SASSLogo,
    },
  ],
  [
    {
      id: 19,
      name: "MongoDB",
      icon: MongoDBLogo,
    },
    {
      id: 18,
      name: "SQLite",
      icon: SQLiteLogo,
    },
  ],
  [
    {
      id: 17,
      name: "React",
      icon: ReactLogo,
    },
  ],
  [
    {
      id: 16,
      name: "Bootstrap",
      icon: BootstrapLogo,
    },
    {
      id: 15,
      name: "Webpack",
      icon: WebpackLogo,
    },
  ],
  [
    {
      id: 14,
      name: "ExpressJS",
      icon: ExpressJSLogo,
    },
    {
      id: 13,
      name: "NodeJS",
      icon: NodeJSLogo,
    },
    {
      id: 12,
      name: "Sequelize",
      icon: SequelizeLogo,
    },
  ],
  [
    {
      id: 11,
      name: "PHP",
      icon: PhpLogo,
    },
    {
      id: 10,
      name: "MySQL",
      icon: MySQLLogo,
    },
  ],
  [
    {
      id: 9,
      name: "Figma",
      icon: FigmaLogo,
    },
  ],
  [
    {
      id: 8,
      name: "Git",
      icon: GitLogo,
    },
    {
      id: 7,
      name: "Python",
      icon: PythonLogo,
    },
  ],
  [
    {
      id: 6,
      name: "Markdown",
      icon: MarkdownLogo,
    },
    {
      id: 5,
      name: "GitHub",
      icon: GitHubLogo,
    },
    {
      id: 4,
      name: "VsCode",
      icon: VsCodeLogo,
    },
  ],
  [
    {
      id: 3,
      name: "HTML",
      icon: HtmlLogo,
    },
    {
      id: 2,
      name: "CSS",
      icon: CssLogo,
    },
  ],
  [
    {
      id: 1,
      name: "JavaScript",
      icon: JavaScriptLogo,
    },
  ],
];
