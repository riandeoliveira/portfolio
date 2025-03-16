import type { IconName } from "./icon";

export type Project = {
  id: number;
  name: string;
  version: string;
  stack: IconName[];
  thumbnailUrl: string;
  repositoryUrl: string;
  projectUrl: string;
  isPrivate: boolean;
  isNew: boolean;
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
