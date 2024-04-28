import { ReactComponent as Facebook } from "@/assets/icons/social-medias/facebook.svg";
import { ReactComponent as Github } from "@/assets/icons/social-medias/github.svg";
import { ReactComponent as Gmail } from "@/assets/icons/social-medias/gmail.svg";
import { ReactComponent as Instagram } from "@/assets/icons/social-medias/instagram.svg";
import { ReactComponent as LinkedIn } from "@/assets/icons/social-medias/linkedin.svg";
import { ReactComponent as Spotify } from "@/assets/icons/social-medias/spotify.svg";
import { ReactComponent as X } from "@/assets/icons/social-medias/x.svg";
import type { ISocialMedia } from "@/types/social-media";
import { makeAutoObservable } from "mobx";

const socialMediaList: ISocialMedia[] = [
  {
    name: "facebook",
    title: "Facebook",
    icon: Facebook,
    color: "#1877F2",
  },
  {
    name: "github",
    title: "GitHub",
    icon: Github,
    color: "#fff",
  },
  {
    name: "gmail",
    title: "Gmail",
    icon: Gmail,
    color: "#fff",
  },
  {
    name: "instagram",
    title: "Instagram",
    icon: Instagram,
    color: "#fff",
  },
  {
    name: "linkedin",
    title: "LinkedIn",
    icon: LinkedIn,
    color: "#0A66C2",
  },
  {
    name: "spotify",
    title: "Spotify",
    icon: Spotify,
    color: "#1ED760",
  },
  {
    name: "x",
    title: "X",
    icon: X,
    color: "#1ED760",
  },
];

class SocialMediaStore {
  public list: ISocialMedia[] = socialMediaList;

  public constructor() {
    makeAutoObservable(this);
  }
}

export const socialMediaStore = new SocialMediaStore();
