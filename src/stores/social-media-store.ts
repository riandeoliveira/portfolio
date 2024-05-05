import { Icon } from "@/assets/icons";
import type { ISocialMedia } from "@/types/social-media";
import { makeAutoObservable } from "mobx";

const socialMediaList: ISocialMedia[] = [
  {
    name: "github",
    title: "GitHub",
    icon: Icon.Github,
    url: "https://github.com/riandeoliveira",
  },
  {
    name: "instagram",
    title: "Instagram",
    icon: Icon.Instagram,
    url: "https://www.instagram.com/rian.deoliveira",
  },
  {
    name: "linkedin",
    title: "LinkedIn",
    icon: Icon.LinkedIn,
    url: "https://www.linkedin.com/in/riandeoliveira",
  },
  {
    name: "spotify",
    title: "Spotify",
    icon: Icon.Spotify,
    url: "https://open.spotify.com/user/riandias2016",
  },
  {
    name: "whatsapp",
    title: "WhatsApp",
    icon: Icon.WhatsApp,
    url: "https://wa.me/5551991852873",
  },
  {
    name: "x",
    title: "X",
    icon: Icon.X,
    url: "https://twitter.com/_MrBachelor_",
  },
];

class SocialMediaStore {
  public list: ISocialMedia[] = socialMediaList;

  public constructor() {
    makeAutoObservable(this);
  }
}

export const socialMediaStore = new SocialMediaStore();
