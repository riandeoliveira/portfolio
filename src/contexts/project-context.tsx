import type { Project } from "@/types/project";
import {
  type Dispatch,
  type ReactElement,
  type ReactNode,
  type SetStateAction,
  createContext,
  useState,
} from "react";

type ProjectContextType = {
  projects: Project[];
  setProjects: Dispatch<SetStateAction<Project[]>>;
};

export const ProjectContext = createContext<ProjectContextType | undefined>(
  undefined,
);

type ProjectContextProviderProps = {
  children: ReactNode;
};

export const ProjectContextProvider = ({
  children,
}: ProjectContextProviderProps): ReactElement => {
  const [projects, setProjects] = useState<Project[]>([]);

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};
