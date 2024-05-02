import type { ISocialMedia } from "@/types/social-media";
import type { ReactElement } from "react";
import { NeonBackground } from "./neon-background";
import { Tooltip } from "./tooltip";

interface SocialMediaLinkProps extends Omit<ISocialMedia, "name"> {}

export const SocialMediaLink = ({ icon: Icon, title, url }: SocialMediaLinkProps): ReactElement => {
  return (
    <Tooltip title={title}>
      <div className="[transform-style:preserve-3d] p-0.5 group hover:scale-125 transition-transform">
        <NeonBackground className="rounded-xl">
          <a href={url} target="_blank" rel="noreferrer">
            <Icon className="scale-100" />
          </a>
        </NeonBackground>
      </div>
    </Tooltip>
  );
};
