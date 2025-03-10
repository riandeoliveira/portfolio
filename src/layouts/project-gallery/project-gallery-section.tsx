import { useI18n } from "@/hooks/use-i18n";
import { useProject } from "@/hooks/use-project";
import type { SpringOptions } from "framer-motion";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { useRef } from "react";
import { ProjectGalleryCard } from "./project-gallery-card";

export const ProjectGallerySection = observer((): ReactElement => {
  const { getSortedProjectsBy } = useProject();
  const { t } = useI18n();

  const projectList = getSortedProjectsBy("presentation");

  const firstRow = projectList.slice(0, 5);
  const secondRow = projectList.slice(5, 10);
  const thirdRow = projectList.slice(10, 15);

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
      className="h-[300vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="max-w-7xl relative mx-auto py-40 px-4 left-0 top-0 w-full tablet-s:py-20">
        <h1 className="text-7xl font-bold tablet-s:text-4xl">
          {t("learn_more")} <br /> {t("about_my_work")}
        </h1>
        <p className="max-w-2xl text-xl mt-8 tablet-s:text-base">
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
});
