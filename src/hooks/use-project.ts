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
        name: t("profile_card_component"),
        description: t("profile_card_component_description"),
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
        name: t("popular_movies"),
        description: t("popular_movies_description"),
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
        name: t("todo_list"),
        description: t("todo_list_description"),
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
        name: t("medicenter"),
        description: t("medicenter_description"),
        thumbnail: image.mediCenter,
        skillNames: ["js", "nextjs", "react", "sass", "ts"],
        repository: {
          url: "https://github.com/riandeoliveira/MediCenter",
          isPrivate: false,
        },
        websiteUrl: "https://medicenter-beryl.vercel.app/",
      },
      {
        id: 6,
        name: t("casa_verde"),
        description: t("casa_verde_description"),
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
        id: 9,
        name: t("optimustech"),
        description: t("optimustech_description"),
        thumbnail: image.optimusTech,
        skillNames: ["js", "nextjs", "react", "sass", "ts"],
        repository: {
          url: "https://github.com/riandeoliveira/OptimusTech",
          isPrivate: false,
        },
        websiteUrl: "https://optimus-tech-eta.vercel.app/",
      },
      {
        id: 10,
        name: t("metamorfose_digital"),
        description: t("metamorfose_digital_description"),
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
        name: t("blaze_clone"),
        description: t("blaze_clone_description"),
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
        name: t("gogreen"),
        description: t("gogreen_description"),
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
        name: t("linkedin_clone"),
        description: t("linkedin_clone_description"),
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
        name: t("petmatch"),
        description: t("petmatch_description"),
        thumbnail: image.petMatch,
        skillNames: ["js", "react", "sass", "ts", "vite"],
        repository: {
          url: "https://github.com/riandeoliveira/petmatch-web",
          isPrivate: false,
        },
        websiteUrl: "https://petmatch-web.vercel.app/",
      },
      {
        id: 15,
        name: t("glossario_libras"),
        description: t("glossario_libras_description"),
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
