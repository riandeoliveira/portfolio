import type { SkillType } from "./skill";

export interface IProject {
  description: string;
  gitHubUrl: string;
  thumbnail: string;
  name: string;
  releaseDate: string;
  skillList: SkillType[];
  websiteUrl: string;
}
