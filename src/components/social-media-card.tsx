import type { ISocialMedia } from "@/types/social-media";
import type { ReactElement } from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";

interface SocialMediaProps extends Omit<ISocialMedia, "name" | "title"> {}

export const SocialMediaCard = ({ color, icon: Icon }: SocialMediaProps): ReactElement => {
  return (
    <CardContainer>
      <CardBody className="bg-zinc-900 p-0.5 relative group/card w-full h-full rounded-xl">
        <div className="w-12 h-12 flex items-center justify-center">
          <CardItem translateZ={288}>
            <a href="/">
              <Icon color={color} />
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
