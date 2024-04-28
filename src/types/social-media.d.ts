import type { IconComponentType } from "./skill";

export type SocialMediaNameType =
  | "facebook"
  | "github"
  | "gmail"
  | "instagram"
  | "linkedin"
  | "spotify"
  | "x";

interface ISocialMedia {
  name: SocialMediaNameType;
  title?: string;
  icon: IconComponentType;
  color: string;
}
