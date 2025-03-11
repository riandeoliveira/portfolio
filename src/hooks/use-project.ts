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
        version: "v0.1.0",
        skillNames: ["js", "react", "styledcomponents", "ts"],
        repositoryUrl:
          "https://github.com/riandeoliveira/profile-card-component",
        websiteUrl: "https://riandeoliveira.github.io/profile-card-component/",
        isPrivate: false,
        isNew: false,
      },
      {
        id: 2,
        name: t("popular_movies"),
        description: t("popular_movies_description"),
        thumbnail: image.popularMovies,
        version: "v2.0.9",
        skillNames: ["js", "pinia", "tailwind", "ts", "vue"],
        repositoryUrl: "https://github.com/riandeoliveira/PopularMovies",
        websiteUrl: "https://popular-movies-six.vercel.app/",
        isPrivate: false,
        isNew: false,
      },
      {
        id: 3,
        name: t("todo_list"),
        description: t("todo_list_description"),
        thumbnail: image.todoList,
        version: "v1.0.0",
        skillNames: ["js", "nextjs", "react", "sass", "ts"],
        repositoryUrl: "https://github.com/riandeoliveira/TodoList",
        websiteUrl: "https://todo-list-ruddy-six.vercel.app/",
        isPrivate: false,
        isNew: false,
      },
      {
        id: 4,
        name: t("medicenter"),
        description: t("medicenter_description"),
        thumbnail: image.mediCenter,
        version: "v2.0.0",
        skillNames: ["js", "nextjs", "react", "sass", "ts"],
        repositoryUrl: "https://github.com/riandeoliveira/MediCenter",
        websiteUrl: "https://medicenter-beryl.vercel.app/",
        isPrivate: false,
        isNew: false,
      },
      {
        id: 6,
        name: t("casa_verde"),
        description: t("casa_verde_description"),
        thumbnail: image.casaVerde,
        version: "v0.1.0",
        skillNames: ["js", "nextjs", "react", "styledcomponents", "ts"],
        repositoryUrl: "https://github.com/riandeoliveira/7-days-of-code",
        websiteUrl: "https://riandeoliveira.github.io/7-days-of-code/",
        isPrivate: false,
        isNew: false,
      },
      {
        id: 7,
        name: t("urna_eletronica"),
        description: t("urna_eletronica_description"),
        thumbnail: image.urnaEletronica,
        version: "v1.2.0",
        skillNames: ["cypress", "nextjs", "react", "tailwind", "ts"],
        repositoryUrl: "https://github.com/riandeoliveira/UrnaEletronica",
        websiteUrl: "https://urna-eletronica-three.vercel.app/",
        isPrivate: false,
        isNew: false,
      },
      {
        id: 9,
        name: t("optimustech"),
        description: t("optimustech_description"),
        thumbnail: image.optimusTech,
        version: "v1.0.0",
        skillNames: ["js", "nextjs", "react", "sass", "ts"],
        repositoryUrl: "https://github.com/riandeoliveira/OptimusTech",
        websiteUrl: "https://optimus-tech-eta.vercel.app/",
        isPrivate: false,
        isNew: false,
      },
      {
        id: 10,
        name: t("metamorfose_digital"),
        description: t("metamorfose_digital_description"),
        thumbnail: image.metamorfoseDigital,
        version: "v0.1.0",
        skillNames: ["js", "nextjs", "react", "sass", "ts"],
        repositoryUrl: undefined,
        websiteUrl: "https://metamorfose-digital.vercel.app/",
        isPrivate: true,
        isNew: false,
      },
      {
        id: 11,
        name: t("blaze_clone"),
        description: t("blaze_clone_description"),
        thumbnail: image.blazeClone,
        version: "v0.4.0",
        skillNames: ["react", "sass", "ts", "vite", "vitest"],
        repositoryUrl: "https://github.com/riandeoliveira/BlazeClone",
        websiteUrl: "https://blaze-clone-alpha.vercel.app/games/crash",
        isPrivate: false,
        isNew: false,
      },
      {
        id: 12,
        name: t("gogreen"),
        description: t("gogreen_description"),
        thumbnail: image.goGreen,
        version: "v1.0.0",
        skillNames: ["css", "html", "js"],
        repositoryUrl: "https://github.com/riandeoliveira/ods-13-website",
        websiteUrl: "https://ods-13-website.vercel.app/",
        isPrivate: false,
        isNew: false,
      },
      {
        id: 13,
        name: t("linkedin_clone"),
        description: t("linkedin_clone_description"),
        thumbnail: image.linkedinClone,
        version: "v1.0.0",
        skillNames: ["js", "nextjs", "react", "sass", "ts"],
        repositoryUrl: "https://github.com/riandeoliveira/LinkedInClone",
        websiteUrl: "https://linkedin-clone-zeta-three.vercel.app/",
        isPrivate: false,
        isNew: false,
      },
      {
        id: 14,
        name: t("petmatch"),
        description: t("petmatch_description"),
        thumbnail: image.petMatch,
        version: "v0.1.0",
        skillNames: ["js", "react", "sass", "ts", "vite"],
        repositoryUrl: "https://github.com/riandeoliveira/petmatch-web",
        websiteUrl: "https://petmatch-web.vercel.app/",
        isPrivate: false,
        isNew: false,
      },
      {
        id: 15,
        name: t("glossario_libras"),
        description: t("glossario_libras_description"),
        thumbnail: image.glossarioLibras,
        version: "v0.1.0",
        skillNames: ["bootstrap", "js", "react", "sass", "vite"],
        repositoryUrl: "https://github.com/riandeoliveira/GlossarioLibras",
        websiteUrl: "https://glossario-libras.vercel.app/aprender",
        isPrivate: false,
        isNew: false,
      },
    ]);
  }, [t]);

  return {
    getSortedProjectsBy,
  };
};
