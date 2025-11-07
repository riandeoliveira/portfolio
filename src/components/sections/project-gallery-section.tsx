import type { MotionValue, SpringOptions } from "framer-motion";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { thumbnails } from "@/assets/images";
import { useI18n } from "@/hooks/use-i18n";
import { useProject } from "@/hooks/use-project";
import type { Project } from "@/types/project";
import { GradientBackground } from "../backgrounds/gradient-background";
import { Image } from "../shared/image";

export const ProjectGallerySection = () => {
  const { getSortedProjectsBy } = useProject();
  const { t } = useI18n();

  const projects = getSortedProjectsBy("presentation");

  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const thirdRow = projects.slice(10, 15);

  const elementRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start start", "end start"],
  });

  const springOptions: SpringOptions = {
    stiffness: 300,
    damping: 30,
    bounce: 100,
  };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springOptions,
  );

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springOptions,
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springOptions,
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springOptions,
  );

  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springOptions,
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springOptions,
  );

  return (
    <section
      ref={elementRef}
      className="h-640 overflow-hidden antialiased relative flex flex-col self-auto perspective-[600px] transform-3d max-s-600:h-600 text-zinc-50"
    >
      <div className="max-w-7xl relative mx-auto py-40 px-4 left-0 top-0 w-full max-s-600:py-20">
        <h1 className="text-7xl font-bold max-s-600:text-4xl">
          {t("learn_more")} <br /> {t("about_my_work")}
        </h1>
        <p className="max-w-2xl text-xl mt-8 max-s-600:text-base">
          {t("project_gallery_description")}
        </p>
      </div>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((project) => (
            <ProjectGalleryCard
              project={project}
              translate={translateX}
              key={project.id}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((project) => (
            <ProjectGalleryCard
              project={project}
              translate={translateXReverse}
              key={project.id}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {thirdRow.map((project) => (
            <ProjectGalleryCard
              project={project}
              translate={translateX}
              key={project.id}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

type ProjectGalleryCardProps = {
  project: Project;
  translate: MotionValue<number>;
};

const ProjectGalleryCard = ({
  project,
  translate,
}: ProjectGalleryCardProps) => {
  const { t, language } = useI18n();

  const langKey = language === "pt-BR" ? "ptBr" : "enUs";
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
      className="group/product w-120 h-96 relative shrink-0 rounded-xl"
    >
      <GradientBackground className="w-full h-full rounded-xl">
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={t("access_this_project_on_the_internet")}
          className="block group-hover/product:shadow-2xl rounded-xl"
        >
          <Image
            src={thumbnails[project.name]}
            alt={`${t("project_thumbnail")}: ${projectName}`}
            width={480}
            height={384}
            className="object-cover absolute h-full w-full inset-0 rounded-xl p-px"
          />
        </a>
      </GradientBackground>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-zinc-950 pointer-events-none rounded-xl" />
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100">
        {projectName}
      </h2>
    </motion.div>
  );
};
