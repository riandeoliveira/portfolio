import { TechnologyType } from "types";
import { v4 as uuidv4 } from "uuid";
import bashLogo from "../../public/assets/icons/bash-logo.svg";
import bootstrapLogo from "../../public/assets/icons/bootstrap-logo.svg";
import cLogo from "../../public/assets/icons/c-logo.svg";
import charpLogo from "../../public/assets/icons/csharp-logo.svg";
import cssLogo from "../../public/assets/icons/css-logo.svg";
import dockerLogo from "../../public/assets/icons/docker-logo.svg";
import dotnetLogo from "../../public/assets/icons/dotnet-logo.svg";
import expressjsLogo from "../../public/assets/icons/expressjs-logo.svg";
import figmaLogo from "../../public/assets/icons/figma-logo.svg";
import firebaseLogo from "../../public/assets/icons/firebase-logo.svg";
import gitLogo from "../../public/assets/icons/git-logo.svg";
import githubLogo from "../../public/assets/icons/github-logo.svg";
import herokuLogo from "../../public/assets/icons/heroku-logo.svg";
import htmlLogo from "../../public/assets/icons/html-logo.svg";
import javascriptLogo from "../../public/assets/icons/javascript-logo.svg";
import jestLogo from "../../public/assets/icons/jest-logo.svg";
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
import sequelizeLogo from "../../public/assets/icons/sequelize-logo.svg";
import sqliteLogo from "../../public/assets/icons/sqlite-logo.svg";
import styledcomponentsLogo from "../../public/assets/icons/styled-components-logo.svg";
import tailwindcssLogo from "../../public/assets/icons/tailwindcss-logo.svg";
import threejsLogo from "../../public/assets/icons/threejs-logo.svg";
import typescriptLogo from "../../public/assets/icons/typescript-logo.svg";
import vercelLogo from "../../public/assets/icons/vercel-logo.svg";
import viteLogo from "../../public/assets/icons/vite-logo.svg";
import vscodeLogo from "../../public/assets/icons/vscode-logo.svg";
import vuejsLogo from "../../public/assets/icons/vuejs-logo.svg";
import webpackLogo from "../../public/assets/icons/webpack-logo.svg";

export const technologies: TechnologyType[][] = [
  [
    {
      id: uuidv4(),
      name: "firebase",
      title: "Firebase",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: firebaseLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "csharp",
      title: "C#",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: charpLogo,
    },
    {
      id: uuidv4(),
      name: "dotnet",
      title: ".NET",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: dotnetLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "postgresql",
      title: "PostgreSQL",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: postgresqlLogo,
    },
    {
      id: uuidv4(),
      name: "laravel",
      title: "Laravel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: laravelLogo,
    },
    {
      id: uuidv4(),
      name: "materialui",
      title: "MaterialUI",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: materialUILogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "threejs",
      title: "ThreeJS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: threejsLogo,
    },
    {
      id: uuidv4(),
      name: "redux",
      title: "Redux",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: reduxLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "c",
      title: "C",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: cLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "bash",
      title: "Bash",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: bashLogo,
    },
    {
      id: uuidv4(),
      name: "docker",
      title: "Docker",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: dockerLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "jest",
      title: "Jest",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: jestLogo,
    },
    {
      id: uuidv4(),
      name: "vuejs",
      title: "VueJS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: vuejsLogo,
    },
    {
      id: uuidv4(),
      name: "tailwindcss",
      title: "TailwindCSS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: tailwindcssLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "nextjs",
      title: "NextJS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: nextjsLogo,
    },
    {
      id: uuidv4(),
      name: "vercel",
      title: "Vercel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: vercelLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "prisma",
      title: "Prisma",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: prismaLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "vite",
      title: "Vite",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: viteLogo,
    },
    {
      id: uuidv4(),
      name: "styledcomponents",
      title: "Styled Components",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: styledcomponentsLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "heroku",
      title: "Heroku",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: herokuLogo,
    },
    {
      id: uuidv4(),
      name: "typescript",
      title: "TypeScript",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: typescriptLogo,
    },
    {
      id: uuidv4(),
      name: "sass",
      title: "SASS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: sassLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "mongodb",
      title: "MongoDB",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: mongodbLogo,
    },
    {
      id: uuidv4(),
      name: "sqlite",
      title: "SQLite",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: sqliteLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "react",
      title: "React",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: reactLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "bootstrap",
      title: "Bootstrap",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: bootstrapLogo,
    },
    {
      id: uuidv4(),
      name: "webpack",
      title: "Webpack",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: webpackLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "expressjs",
      title: "ExpressJS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: expressjsLogo,
    },
    {
      id: uuidv4(),
      name: "nodejs",
      title: "NodeJS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: nodejsLogo,
    },
    {
      id: uuidv4(),
      name: "sequelize",
      title: "Sequelize",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: sequelizeLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "php",
      title: "PHP",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: phpLogo,
    },
    {
      id: uuidv4(),
      name: "mysql",
      title: "MySQL",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: mysqlLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "figma",
      title: "Figma",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: figmaLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "git",
      title: "Git",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: gitLogo,
    },
    {
      id: uuidv4(),
      name: "python",
      title: "Python",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: pythonLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "markdown",
      title: "Markdown",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: markdownLogo,
    },
    {
      id: uuidv4(),
      name: "github",
      title: "GitHub",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: githubLogo,
    },
    {
      id: uuidv4(),
      name: "vscode",
      title: "VsCode",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: vscodeLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "html",
      title: "HTML",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: htmlLogo,
    },
    {
      id: uuidv4(),
      name: "css",
      title: "CSS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: cssLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "javascript",
      title: "JavaScript",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime nam cupiditate magnam, dolore fugiat accusantium velit dolorem repellat nemo eveniet eum ipsum et asperiores neque sit consequuntur iusto fugit.",
      icon: javascriptLogo,
    },
  ],
];
