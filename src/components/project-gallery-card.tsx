import { Image } from "@/components/image";
import { NeonBackground } from "@/components/neon-background";
import { useI18n } from "@/hooks/use-i18n";
import type { Project } from "@/types/project";
import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import type { ReactElement } from "react";

type ProjectGalleryCardProps = {
  project: Project;
  translate: MotionValue<number>;
};

export const ProjectGalleryCard = ({
  project,
  translate,
}: ProjectGalleryCardProps): ReactElement => {
  const { t, langKey } = useI18n();

  const projectName = project.info[langKey].fullName;

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={project.id}
      className="group/product w-[30rem] h-96 relative flex-shrink-0 rounded-xl"
    >
      <NeonBackground className="w-full h-full">
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={t("access_this_project_on_the_internet")}
          className="block group-hover/product:shadow-2xl rounded-xl"
        >
          <Image
            src={project.thumbnailUrl}
            alt={`${t("project_thumbnail")}: ${projectName}`}
            width={480}
            height={384}
            className="object-cover absolute h-full w-full inset-0 rounded-xl p-0.5"
          />
        </a>
      </NeonBackground>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-zinc-950 pointer-events-none rounded-xl" />
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100">
        {projectName}
      </h2>
    </motion.div>
  );
};
