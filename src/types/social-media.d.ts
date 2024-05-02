import type { IconComponentType } from "./skill";

export type SocialMediaNameType =
  | "github"
  | "instagram"
  | "linkedin"
  | "spotify"
  | "whatsapp"
  | "x";

interface ISocialMedia {
  name: SocialMediaNameType;
  title?: string;
  icon: IconComponentType;
  url: string;
}
