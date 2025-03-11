import type { IconName } from "./icon";

export type Project = {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  version: string;
  skillNames: IconName[];
  websiteUrl: string;
  repositoryUrl?: string;
  isPrivate: boolean;
  isNew: boolean;
};
