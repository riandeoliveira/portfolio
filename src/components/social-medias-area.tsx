import { socialMedias } from "@/data/social-medias";
import type { ReactElement } from "react";
import { SocialMediaLink } from "./social-media-link";

export const SocialMediasArea = (): ReactElement => {
  return (
    <div className="flex gap-2 justify-center max-mobile-l:gap-0">
      {socialMedias.map(({ title, iconName, url, id }) => (
        <SocialMediaLink title={title} iconName={iconName} url={url} key={id} />
      ))}
    </div>
  );
};
