import type { IconName } from "./icon";

export type Project = {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  skillNames: IconName[];
  websiteUrl: string;
  repository: {
    url?: string;
    isPrivate: boolean;
  };
};
