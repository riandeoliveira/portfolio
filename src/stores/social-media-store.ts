import { socialMedias } from "@/data/social-medias";
import type { SocialMedia } from "@/types/social-media";
import { makeAutoObservable } from "mobx";

class SocialMediaStore {
  public list: SocialMedia[] = socialMedias;

  public constructor() {
    makeAutoObservable(this);
  }
}

export const socialMediaStore = new SocialMediaStore();
