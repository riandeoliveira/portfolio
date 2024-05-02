import { socialMediaStore } from "@/stores/social-media-store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { SocialMediaLink } from "./social-media-link";

export const SocialMediasArea = observer((): ReactElement => {
  return (
    <div className="grid grid-cols-6 gap-4 justify-center mobile-l:grid-cols-3">
      {socialMediaStore.list.map(({ icon, title, url, name }) => (
        <SocialMediaLink icon={icon} title={title} url={url} key={name} />
      ))}
    </div>
  );
});
