import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { SocialMediasArea } from "./social-medias-area";

export const ProfileSection = observer((): ReactElement => {
  return (
    <section className="p-32">
      <SocialMediasArea />
    </section>
  );
});
