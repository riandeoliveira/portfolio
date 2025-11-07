import type { ProjectName } from "@/assets/images";

export type Project = {
  id: number;
  name: ProjectName;
  version: string;
  url: string;
  repositoryUrl: string | null;
  isPrivate: boolean;
  isNew: boolean;
  stack: string[];
  info: {
    enUs: {
      fullName: string;
      description: string;
    };
    ptBr: {
      fullName: string;
      description: string;
    };
  };
};
