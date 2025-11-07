import { useProjectStore } from "@/stores/project-store";
import type { Project } from "@/types/project";
import { useHttp } from "./use-http";
import { useI18n } from "./use-i18n";
import { useToast } from "./use-toast";

export const useProject = () => {
  const toast = useToast();
  const projectStore = useProjectStore();

  const { t } = useI18n();
  const { request } = useHttp();

  const getSortedProjectsBy = (
    order: "highlight" | "presentation",
  ): Project[] => {
    const projectsOrderMap = {
      highlight: [7, 15, 1, 13, 10, 4, 8, 6, 11, 2, 12, 9, 14, 5, 3],
      presentation: [11, 9, 2, 4, 7, 14, 12, 13, 15, 5, 3, 6, 10, 8, 1],
    };

    const sortedIds = projectsOrderMap[order];

    return projectStore.projects.slice().sort((a, b) => {
      const indexA = sortedIds.indexOf(a.id);
      const indexB = sortedIds.indexOf(b.id);

      return indexA - indexB;
    });
  };

  const getProjects = async () => {
    await request<null, Project[]>("GET", "/projects", {
      onSuccess: (data) => {
        projectStore.setProjects(data);
      },
      onError: () => {
        toast.error(t("get_projects_error"));
      },
    });
  };

  return {
    getProjects,
    getSortedProjectsBy,
  };
};
