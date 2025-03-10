import { image } from "@/assets/images";
import type { Project } from "@/types/project";
import { useEffect, useState } from "react";
import { useI18n } from "./use-i18n";

type UseProject = {
  getSortedProjectsBy: (order: "highlight" | "presentation") => Project[];
};

export const useProject = (): UseProject => {
  const { t } = useI18n();

  const [projects, setProjects] = useState<Project[]>([]);

  const getSortedProjectsBy = (
    order: "highlight" | "presentation",
  ): Project[] => {
    const projectsOrderKeyMap = {
      highlight: [7, 15, 11, 2, 3, 13, 4, 9, 10, 6, 14, 1, 12, 5, 8],
      presentation: [5, 10, 4, 15, 3, 6, 2, 7, 13, 9, 8, 12, 11, 14, 1],
    };

    const sortedIds = projectsOrderKeyMap[order];

    return projects.slice().sort((a, b) => {
      const indexA = sortedIds.indexOf(a.id);
      const indexB = sortedIds.indexOf(b.id);

      return indexA - indexB;
    });
  };

  useEffect(() => {
    setProjects([
      {
        id: 1,
        name: "Profile Card Component",
        description:
          "Cartão responsivo e estilizado com dados de perfil de um determinado usuário. Possui uma variedade de animações diferentes.",
        thumbnail: image.profileCardComponent,
        skillNames: ["js", "react", "styledcomponents", "ts"],
        repository: {
          url: "https://github.com/riandeoliveira/profile-card-component",
          isPrivate: false,
        },
        websiteUrl: "https://riandeoliveira.github.io/profile-card-component/",
      },
      {
        id: 2,
        name: "Filmes Populares",
        description:
          "Aplicação para pesquisar e favoritar filmes, fazendo uso da API do The Movie Database (TMDB). Os filmes são salvos no Local Storage do navegador.",
        thumbnail: image.popularMovies,
        skillNames: ["js", "pinia", "tailwind", "ts", "vue"],
        repository: {
          url: "https://github.com/riandeoliveira/PopularMovies",
          isPrivate: false,
        },
        websiteUrl: "https://popular-movies-six.vercel.app/",
      },
      {
        id: 3,
        name: "Lista de Tarefas",
        description:
          "Lista de Tarefas básica e funcional, com design agradável, diferentes opções de filtros e salvamento de dados no Local Storage do navegador.",
        thumbnail: image.todoList,
        skillNames: ["js", "nextjs", "react", "sass", "ts"],
        repository: {
          url: "https://github.com/riandeoliveira/TodoList",
          isPrivate: false,
        },
        websiteUrl: "https://todo-list-ruddy-six.vercel.app/",
      },
      {
        id: 4,
        name: "MediCenter",
        description:
          "Página inicial de um site responsivo e acessível para a clínica médica fictícia MediCenter. Inclui um design adaptável para tablets e smartphones.",
        thumbnail: image.medicenter,
        skillNames: ["js", "nextjs", "react", "sass", "ts"],
        repository: {
          url: "https://github.com/riandeoliveira/MediCenter",
          isPrivate: false,
        },
        websiteUrl: "https://medicenter-beryl.vercel.app/",
      },
      {
        id: 5,
        name: "Site do Android",
        description:
          "Site simples e informativo sobre a história do mascote do Android, suas diferentes versões, curiosidades, entre outros assuntos.",
        thumbnail: image.siteDoAndroid,
        skillNames: ["css", "html"],
        repository: {
          url: "https://github.com/riandeoliveira/site-do-android",
          isPrivate: false,
        },
        websiteUrl: "https://site-do-android.vercel.app/android.html",
      },
      {
        id: 6,
        name: "Casa Verde",
        description:
          "Página principal da loja online fictícia Casa Verde, especializada na venda de plantas. Possui um serviço de envio de e-mail integrado.",
        thumbnail: image.casaVerde,
        skillNames: ["js", "nextjs", "react", "styledcomponents", "ts"],
        repository: {
          url: "https://github.com/riandeoliveira/7-days-of-code",
          isPrivate: false,
        },
        websiteUrl: "https://riandeoliveira.github.io/7-days-of-code/",
      },
      {
        id: 7,
        name: t("urna_eletronica"),
        description: t("urna_eletronica_description"),
        thumbnail: image.urnaEletronica,
        skillNames: ["cypress", "nextjs", "react", "tailwind", "ts"],
        repository: {
          url: "https://github.com/riandeoliveira/UrnaEletronica",
          isPrivate: false,
        },
        websiteUrl: "https://urna-eletronica-three.vercel.app/",
      },
      {
        id: 8,
        name: "Gerador Aleatório de Entretenimento",
        description:
          "Site com a funcionalidade de sortear aleatoriamente uma série, anime ou filme para assistir, com centenas de resultados possíveis.",
        thumbnail: image.geradorAleatorioDeEntretenimento,
        skillNames: ["css", "html", "js"],
        repository: {
          url: "https://github.com/riandeoliveira/gerador-aleatorio-de-entretenimento",
          isPrivate: false,
        },
        websiteUrl: "https://gerador-aleatorio-de-entretenimento.vercel.app/",
      },
      {
        id: 9,
        name: "OptimusTech",
        description:
          "Página completa de vagas da empresa de tecnologia fictícia OptimusTech. Possui um design limpo, responsivo e profissional.",
        thumbnail: image.optimustech,
        skillNames: ["js", "nextjs", "react", "sass", "ts"],
        repository: {
          url: "https://github.com/riandeoliveira/OptimusTech",
          isPrivate: false,
        },
        websiteUrl: "https://optimus-tech-eta.vercel.app/",
      },
      {
        id: 10,
        name: "Metamorfose Digital",
        description:
          "Site do Metamorfose Digital, um projeto comunitário idealizado por universitários focado no descarte correto de lixo eletrônico.",
        thumbnail: image.metamorfoseDigital,
        skillNames: ["js", "nextjs", "react", "sass", "ts"],
        repository: {
          url: undefined,
          isPrivate: true,
        },
        websiteUrl: "https://metamorfose-digital.vercel.app/",
      },
      {
        id: 11,
        name: "Clone da Blaze",
        description:
          "Clone funcional do jogo Crash da plataforma de apostas Blaze, com um layout responsivo e adaptável para dispositivos móveis.",
        thumbnail: image.blazeClone,
        skillNames: ["react", "sass", "ts", "vite", "vitest"],
        repository: {
          url: "https://github.com/riandeoliveira/BlazeClone",
          isPrivate: false,
        },
        websiteUrl: "https://blaze-clone-alpha.vercel.app/games/crash",
      },
      {
        id: 12,
        name: "GoGreen",
        description:
          "Landing page desenvolvida para a conscientização sobre as mudanças climáticas e o 13º Objetivo de Desenvolvimento Sustentável da ONU.",
        thumbnail: image.goGreen,
        skillNames: ["css", "html", "js"],
        repository: {
          url: "https://github.com/riandeoliveira/ods-13-website",
          isPrivate: false,
        },
        websiteUrl: "https://ods-13-website.vercel.app/",
      },
      {
        id: 13,
        name: "Clone do LinkedIn",
        description:
          "Clone da página de perfil do LinkedIn com tema escuro. Possui um layout totalmente responsivo para inúmeros tamanhos de telas.",
        thumbnail: image.linkedinClone,
        skillNames: ["js", "nextjs", "react", "sass", "ts"],
        repository: {
          url: "https://github.com/riandeoliveira/LinkedInClone",
          isPrivate: false,
        },
        websiteUrl: "https://linkedin-clone-zeta-three.vercel.app/",
      },
      {
        id: 14,
        name: "PetMatch",
        description:
          "Landing page desenvolvida para a conscientização sobre o abandono de animais no Brasil, incentivando o download de um aplicativo para adoção de pets.",
        thumbnail: image.petmatch,
        skillNames: ["js", "react", "sass", "ts", "vite"],
        repository: {
          url: "https://github.com/riandeoliveira/petmatch-web",
          isPrivate: false,
        },
        websiteUrl: "https://petmatch-web.vercel.app/",
      },
      {
        id: 15,
        name: "Glossário de Libras",
        description:
          "Plataforma de aprendizado focada no ensino da Língua Brasileira de Sinais (Libras) para estudantes universitários de diversos cursos.",
        thumbnail: image.glossarioLibras,
        skillNames: ["bootstrap", "js", "react", "sass", "vite"],
        repository: {
          url: "https://github.com/riandeoliveira/GlossarioLibras",
          isPrivate: false,
        },
        websiteUrl: "https://glossario-libras.vercel.app/aprender",
      },
    ]);
  }, [t]);

  return {
    getSortedProjectsBy,
  };
};
