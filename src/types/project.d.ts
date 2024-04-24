import type { SkillType } from "./skill";

export interface IProject {
  description: string;
  gitHubUrl: string;
  imageUrl: string;
  name: string;
  releaseDate: string;
  skillList: SkillType[];
  websiteUrl: string;
}
