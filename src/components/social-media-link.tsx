import type { ISocialMedia } from "@/types/social-media";
import type { ReactElement } from "react";
import { NeonBackground } from "./neon-background";
import { Tooltip } from "./tooltip";

interface SocialMediaLinkProps extends Omit<ISocialMedia, "name"> {}

export const SocialMediaLink = ({ icon: Icon, title, url }: SocialMediaLinkProps): ReactElement => {
  return (
    <Tooltip title={title}>
      <div className="hover:scale-125 transition-transform">
        <NeonBackground>
          <a href={url} target="_blank" rel="noreferrer" aria-label={title}>
            <Icon className="scale-100" />
          </a>
        </NeonBackground>
      </div>
    </Tooltip>
  );
};
