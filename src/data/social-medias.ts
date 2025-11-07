import { Icon } from "@/assets/icons";
import type { IconType } from "@/types/icon";

export type SocialMedia = {
  id: string;
  name: string;
  icon: IconType;
  url: string;
};

export const socialMedias: SocialMedia[] = [
  {
    id: "github",
    name: "GitHub",
    icon: Icon.GitHub,
    url: "https://github.com/riandeoliveira",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: Icon.Instagram,
    url: "https://www.instagram.com/rian.deoliveira",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: Icon.LinkedIn,
    url: "https://www.linkedin.com/in/riandeoliveira",
  },
  {
    id: "spotify",
    name: "Spotify",
    icon: Icon.Spotify,
    url: "https://open.spotify.com/user/riandias2016",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: Icon.WhatsApp,
    url: "https://wa.me/5551991852873",
  },
];
