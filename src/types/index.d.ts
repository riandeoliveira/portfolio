export type SectionType =
  | "about_me"
  | "education"
  | "experience"
  | "projects"
  | "hard_skills"
  | "soft_skills";

export type TechnologyType = {
  id: number;
  name: string;
  icon: any;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
  authenticated: boolean;
};
