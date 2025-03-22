import { api } from "@/api";
import type { Project } from "@/types/project";
import type { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";

type UseProject = {
  getSortedProjectsBy: (order: "highlight" | "presentation") => Project[];
};

export const useProject = (): UseProject => {
  const [projects, setProjects] = useState<Project[]>([]);

  const getSortedProjectsBy = (
    order: "highlight" | "presentation",
  ): Project[] => {
    const projectsOrderMap = {
      highlight: [10, 2, 1, 6, 9, 4, 5, 8, 7, 3],
      presentation: [9, 2, 5, 6, 10, 4, 8, 7, 1, 3],
    };

    const sortedIds = projectsOrderMap[order];

    return projects.slice().sort((a, b) => {
      const indexA = sortedIds.indexOf(a.id);
      const indexB = sortedIds.indexOf(b.id);

      return indexA - indexB;
    });
  };

  const fetchProjects = useCallback(async () => {
    const response: AxiosResponse<Project[]> = await api.get("/projects");

    if (response.status === 200) setProjects(response.data);
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return {
    getSortedProjectsBy,
  };
};
