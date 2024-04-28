import { socialMediaStore } from "@/stores/social-media-store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { SocialMediaCard } from "./social-media-card";

export const SocialMediasArea = observer((): ReactElement => {
  return (
    <div className="flex gap-4">
      {socialMediaStore.list.map(({ icon, color, name }) => (
        <SocialMediaCard icon={icon} color={color} key={name} />
      ))}
    </div>
  );
});
