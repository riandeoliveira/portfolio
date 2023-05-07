import { SkillType } from "types";
import { v4 as uuidv4 } from "uuid";
import bootstrapLogo from "../../public/assets/icons/bootstrap-logo.svg";
import charpLogo from "../../public/assets/icons/csharp-logo.svg";
import cssLogo from "../../public/assets/icons/css-logo.svg";
import dotnetLogo from "../../public/assets/icons/dotnet-logo.svg";
import expressjsLogo from "../../public/assets/icons/expressjs-logo.svg";
import figmaLogo from "../../public/assets/icons/figma-logo.svg";
import firebaseLogo from "../../public/assets/icons/firebase-logo.svg";
import gitLogo from "../../public/assets/icons/git-logo.svg";
import githubLogo from "../../public/assets/icons/github-logo.svg";
import htmlLogo from "../../public/assets/icons/html-logo.svg";
import javascriptLogo from "../../public/assets/icons/javascript-logo.svg";
import laravelLogo from "../../public/assets/icons/laravel-logo.svg";
import markdownLogo from "../../public/assets/icons/markdown-logo.svg";
import materialUILogo from "../../public/assets/icons/materialui-logo.svg";
import mongodbLogo from "../../public/assets/icons/mongodb-logo.svg";
import mysqlLogo from "../../public/assets/icons/mysql-logo.svg";
import nextjsLogo from "../../public/assets/icons/nextjs-logo.svg";
import nodejsLogo from "../../public/assets/icons/nodejs-logo.svg";
import phpLogo from "../../public/assets/icons/php-logo.svg";
import postgresqlLogo from "../../public/assets/icons/postgresql-logo.svg";
import prismaLogo from "../../public/assets/icons/prisma-logo.svg";
import pythonLogo from "../../public/assets/icons/python-logo.svg";
import reactLogo from "../../public/assets/icons/react-logo.svg";
import reduxLogo from "../../public/assets/icons/redux-logo.svg";
import sassLogo from "../../public/assets/icons/sass-logo.svg";
import sqliteLogo from "../../public/assets/icons/sqlite-logo.svg";
import styledcomponentsLogo from "../../public/assets/icons/styled-components-logo.svg";
import tailwindcssLogo from "../../public/assets/icons/tailwindcss-logo.svg";
import threejsLogo from "../../public/assets/icons/threejs-logo.svg";
import typescriptLogo from "../../public/assets/icons/typescript-logo.svg";
import vercelLogo from "../../public/assets/icons/vercel-logo.svg";
import viteLogo from "../../public/assets/icons/vite-logo.svg";
import vscodeLogo from "../../public/assets/icons/vscode-logo.svg";

// TODO: Remover assets não utilizados !!!

export const skills: SkillType[][] = [
  [{ id: uuidv4(), title: "Firebase", icon: firebaseLogo }],
  [
    { id: uuidv4(), title: "C#", icon: charpLogo },
    { id: uuidv4(), title: ".NET", icon: dotnetLogo },
  ],
  [
    { id: uuidv4(), title: "PostgreSQL", icon: postgresqlLogo },
    { id: uuidv4(), title: "Laravel", icon: laravelLogo },
    { id: uuidv4(), title: "MaterialUI", icon: materialUILogo },
  ],
  [
    { id: uuidv4(), title: "ThreeJS", icon: threejsLogo },
    { id: uuidv4(), title: "Redux", icon: reduxLogo },
  ],
  [{ id: uuidv4(), title: "TailwindCSS", icon: tailwindcssLogo }],
  [
    { id: uuidv4(), title: "NextJS", icon: nextjsLogo },
    { id: uuidv4(), title: "Vercel", icon: vercelLogo },
  ],
  [
    { id: uuidv4(), title: "Vite", icon: viteLogo },
    { id: uuidv4(), title: "Prisma", icon: prismaLogo },
    { id: uuidv4(), title: "Styled Components", icon: styledcomponentsLogo },
  ],
  [
    { id: uuidv4(), title: "TypeScript", icon: typescriptLogo },
    { id: uuidv4(), title: "SASS", icon: sassLogo },
  ],
  [{ id: uuidv4(), title: "React", icon: reactLogo }],
  [
    { id: uuidv4(), title: "MongoDB", icon: mongodbLogo },
    { id: uuidv4(), title: "SQLite", icon: sqliteLogo },
  ],
  [
    { id: uuidv4(), title: "ExpressJS", icon: expressjsLogo },
    { id: uuidv4(), title: "Bootstrap", icon: bootstrapLogo },
    { id: uuidv4(), title: "NodeJS", icon: nodejsLogo },
  ],
  [
    { id: uuidv4(), title: "PHP", icon: phpLogo },
    { id: uuidv4(), title: "MySQL", icon: mysqlLogo },
  ],
  [{ id: uuidv4(), title: "Figma", icon: figmaLogo }],
  [
    { id: uuidv4(), title: "Git", icon: gitLogo },
    { id: uuidv4(), title: "Python", icon: pythonLogo },
  ],
  [
    { id: uuidv4(), title: "Markdown", icon: markdownLogo },
    { id: uuidv4(), title: "GitHub", icon: githubLogo },
    { id: uuidv4(), title: "VSCode", icon: vscodeLogo },
  ],
  [
    { id: uuidv4(), title: "HTML", icon: htmlLogo },
    { id: uuidv4(), title: "CSS", icon: cssLogo },
  ],
  [{ id: uuidv4(), title: "JavaScript", icon: javascriptLogo }],
];
