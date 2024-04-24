import type { IProject } from "@/types/project";

export const projects: IProject[] = [
  {
    name: "Urna Eletrônica",
    description:
      "Simulador web totalmente funcional da Nova Urna Eletrônica que foi utilizada pela primeira vez nas Eleições Brasileiras de 2022.",
    imageUrl: "urna-eletronica.png",
    skillList: ["js", "nextjs", "react", "tailwind", "ts"],
    gitHubUrl: "https://github.com/riandeoliveira/UrnaEletronica",
    websiteUrl: "https://urna-eletronica-three.vercel.app/",
    releaseDate: "Janeiro de 2023",
  },
  {
    name: "Popular Movies",
    description:
      "Aplicação para pesquisar e favoritar filmes no Local Storage do navegador, fazendo uso da API do The Movie Database (TMDB).",
    imageUrl: "popular-movies.png",
    skillList: ["js", "nextjs", "react", "tailwind", "ts"],
    gitHubUrl: "https://github.com/riandeoliveira/PopularMovies",
    websiteUrl: "https://popular-movies-six.vercel.app/",
    releaseDate: "Janeiro de 2023",
  },
  {
    name: "Todo List",
    description:
      "Lista de Tarefas básica e funcional, com salvamento de dados no Local Storage do navegador.",
    imageUrl: "todo-list.png",
    skillList: ["js", "nextjs", "react", "sass", "ts"],
    gitHubUrl: "https://github.com/riandeoliveira/TodoList",
    websiteUrl: "https://todo-list-ruddy-six.vercel.app/",
    releaseDate: "Agosto de 2022",
  },
  {
    name: "MediCenter",
    description:
      "Página inicial de um website reponsivo e acessível para uma clínica médica fictícia.",
    imageUrl: "medicenter.png",
    skillList: ["js", "nextjs", "react", "sass", "ts"],
    gitHubUrl: "https://github.com/riandeoliveira/MediCenter",
    websiteUrl: "https://medicenter-beryl.vercel.app/",
    releaseDate: "Dezembro de 2021",
  },
  {
    name: "LinkedIn Clone",
    description: "Clone da página de perfil do LinkedIn.",
    imageUrl: "linkedin-clone.png",
    skillList: ["js", "nextjs", "react", "sass", "ts"],
    gitHubUrl: "https://github.com/riandeoliveira/LinkedInClone",
    websiteUrl: "https://linkedin-clone-zeta-three.vercel.app/",
    releaseDate: "Agosto de 2022",
  },
  {
    name: "OptimusTech",
    description: "Página completa de vagas da empresa fictícia OptimusTech.",
    imageUrl: "optimustech.png",
    skillList: ["js", "nextjs", "react", "sass", "ts"],
    gitHubUrl: "https://github.com/riandeoliveira/OptimusTech",
    websiteUrl: "https://optimus-tech-eta.vercel.app/",
    releaseDate: "Julho de 2022",
  },
];
