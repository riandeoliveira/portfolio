import type { SocialMedia } from "@/data/social-medias";
import type { ReactElement } from "react";
import { BaseIcon } from "./base-icon";
import { NeonBackground } from "./neon-background";
import { Tooltip } from "./tooltip";

type SocialMediaLinkProps = Omit<SocialMedia, "id">;

export const SocialMediaLink = ({
  iconName,
  title,
  url,
}: SocialMediaLinkProps): ReactElement => {
  return (
    <Tooltip title={title}>
      <div className="hover:scale-125 transition-transform mobile-l:scale-[0.8]">
        <NeonBackground>
          <a href={url} target="_blank" rel="noreferrer" aria-label={title}>
            <BaseIcon name={iconName} className="scale-100" />
          </a>
        </NeonBackground>
      </div>
    </Tooltip>
  );
};
