import type { IProject } from "@/types/project";

export const projects: IProject[] = [
  {
    name: "Urna Eletrônica",
    description:
      "Simulador web totalmente funcional da Nova Urna Eletrônica que foi utilizada pela primeira vez nas Eleições Brasileiras de 2022.",
    thumbnail: "https://i.imgur.com/AS2DTdI.png",
    skillList: ["js", "nextjs", "react", "tailwind", "ts"],
    gitHubUrl: "https://github.com/riandeoliveira/UrnaEletronica",
    websiteUrl: "https://urna-eletronica-three.vercel.app/",
    releaseDate: "Janeiro de 2023",
  },
  {
    name: "Popular Movies",
    description:
      "Aplicação para pesquisar e favoritar filmes no Local Storage do navegador, fazendo uso da API do The Movie Database (TMDB).",
    thumbnail: "https://i.imgur.com/mwziBDU.png",
    skillList: ["js", "nextjs", "react", "tailwind", "ts"],
    gitHubUrl: "https://github.com/riandeoliveira/PopularMovies",
    websiteUrl: "https://popular-movies-six.vercel.app/",
    releaseDate: "Janeiro de 2023",
  },
  {
    name: "Todo List",
    description:
      "Lista de Tarefas básica e funcional, com salvamento de dados no Local Storage do navegador.",
    thumbnail: "https://i.imgur.com/1D1ECA2.png",
    skillList: ["js", "nextjs", "react", "sass", "ts"],
    gitHubUrl: "https://github.com/riandeoliveira/TodoList",
    websiteUrl: "https://todo-list-ruddy-six.vercel.app/",
    releaseDate: "Agosto de 2022",
  },
  {
    name: "MediCenter",
    description:
      "Página inicial de um website reponsivo e acessível para uma clínica médica fictícia.",
    thumbnail: "https://i.imgur.com/iKhpXGm.png",
    skillList: ["js", "nextjs", "react", "sass", "ts"],
    gitHubUrl: "https://github.com/riandeoliveira/MediCenter",
    websiteUrl: "https://medicenter-beryl.vercel.app/",
    releaseDate: "Dezembro de 2021",
  },
  {
    name: "LinkedIn Clone",
    description: "Clone da página de perfil do LinkedIn.",
    thumbnail: "https://i.imgur.com/MmtGIEl.png",
    skillList: ["js", "nextjs", "react", "sass", "ts"],
    gitHubUrl: "https://github.com/riandeoliveira/LinkedInClone",
    websiteUrl: "https://linkedin-clone-zeta-three.vercel.app/",
    releaseDate: "Agosto de 2022",
  },
  {
    name: "OptimusTech",
    description: "Página completa de vagas da empresa fictícia OptimusTech.",
    thumbnail: "https://i.imgur.com/nVC9Qmv.png",
    skillList: ["js", "nextjs", "react", "sass", "ts"],
    gitHubUrl: "https://github.com/riandeoliveira/OptimusTech",
    websiteUrl: "https://optimus-tech-eta.vercel.app/",
    releaseDate: "Julho de 2022",
  },
];
