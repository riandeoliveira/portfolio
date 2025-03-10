import { projects } from "@/data/projects";
import type { Project } from "@/types/project";
import { makeAutoObservable } from "mobx";

class ProjectStore {
  public list: Project[] = projects;

  public constructor() {
    makeAutoObservable(this);
  }

  public sortByHighlight(): Project[] {
    const orderedIdsList = [7, 15, 11, 2, 3, 13, 4, 9, 10, 6, 14, 1, 12, 5, 8];

    return this.list.slice().sort((a, b) => {
      const indexA = orderedIdsList.indexOf(a.id);
      const indexB = orderedIdsList.indexOf(b.id);

      return indexA - indexB;
    });
  }

  public sortByPresentation(): Project[] {
    const orderedIdsList = [5, 10, 4, 15, 3, 6, 2, 7, 13, 9, 8, 12, 11, 14, 1];

    return this.list.slice().sort((a, b) => {
      const indexA = orderedIdsList.indexOf(a.id);
      const indexB = orderedIdsList.indexOf(b.id);

      return indexA - indexB;
    });
  }
}

export const projectStore = new ProjectStore();
