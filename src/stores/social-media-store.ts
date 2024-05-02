import { ReactComponent as Github } from "@/assets/icons/social-medias/github.svg";
import { ReactComponent as WhatsApp } from "@/assets/icons/social-medias/whatsapp.svg";
import { ReactComponent as Instagram } from "@/assets/icons/social-medias/instagram.svg";
import { ReactComponent as LinkedIn } from "@/assets/icons/social-medias/linkedin.svg";
import { ReactComponent as Spotify } from "@/assets/icons/social-medias/spotify.svg";
import { ReactComponent as X } from "@/assets/icons/social-medias/x.svg";
import type { ISocialMedia } from "@/types/social-media";
import { makeAutoObservable } from "mobx";

const socialMediaList: ISocialMedia[] = [
  {
    name: "github",
    title: "GitHub",
    icon: Github,
    url: "https://github.com/riandeoliveira",
  },
  {
    name: "instagram",
    title: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/rian.deoliveira",
  },
  {
    name: "linkedin",
    title: "LinkedIn",
    icon: LinkedIn,
    url: "https://www.linkedin.com/in/riandeoliveira",
  },
  {
    name: "spotify",
    title: "Spotify",
    icon: Spotify,
    url: "https://open.spotify.com/user/riandias2016",
  },
  {
    name: "whatsapp",
    title: "WhatsApp",
    icon: WhatsApp,
    url: "https://wa.me/5551991852873"
  },
  {
    name: "x",
    title: "X",
    icon: X,
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
