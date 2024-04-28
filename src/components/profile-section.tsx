import avatar from "@/assets/images/avatar.png";
import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { BackgroundGradient } from "./background-gradient";
import { HeroHighlight, Highlight } from "./hero-highlight";
import { SocialMediasArea } from "./social-medias-area";

export const ProfileSection = observer((): ReactElement => {
  return (
    <section>
      <HeroHighlight>
        <div className="flex flex-col justify-between">
          <motion.h1 className="text-5xl font-bold text-white leading-snug">
            Olá, eu sou Rian Oliveira!
            <br />
            <Highlight className="text-white">Desenvolvedor Front-End</Highlight>
          </motion.h1>
          <SocialMediasArea />
        </div>
        <div className="[transform-style:preserve-3d] p-1">
          <BackgroundGradient className="rounded-full">
            <img src={avatar} alt="" width={256} height={256} className="rounded-full" />
          </BackgroundGradient>
        </div>
      </HeroHighlight>
    </section>
  );
});
