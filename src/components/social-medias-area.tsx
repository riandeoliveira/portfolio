import { socialMediaStore } from "@/stores/social-media-store";
import _ from "lodash";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { SocialMediaLink } from "./social-media-link";

export const SocialMediasArea = observer((): ReactElement => {
  return (
    <div className="flex gap-2 justify-center mobile-l:gap-0">
      {socialMediaStore.list.map(({ title, iconName, url }) => (
        <SocialMediaLink
          title={title}
          iconName={iconName}
          url={url}
          key={_.uniqueId()}
        />
      ))}
    </div>
  );
});
