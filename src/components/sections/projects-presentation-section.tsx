import { projectStore } from "@/stores/project-store";
import type { IProject } from "@/types/project";
import type { MotionValue, SpringOptions } from "framer-motion";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { useRef } from "react";
import { BackgroundGradient } from "../background-gradient";

export const ProjectsPresentationSection = observer((): ReactElement => {
  const projectList = projectStore.sortByPresentation();

  const firstRow = projectList.slice(0, 5);
  const secondRow = projectList.slice(5, 10);
  const thirdRow = projectList.slice(10, 15);

  const elementRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start start", "end start"],
  });

  const springOptions: SpringOptions = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springOptions);
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springOptions,
  );
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springOptions);

  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springOptions);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springOptions);

  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springOptions);

  return (
    <div
      ref={elementRef}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px]"
    >
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
        <h1 className="text-2xl md:text-7xl font-bold text-zinc-100">
          Conheça mais <br /> sobre meu trabalho
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 text-zinc-50">
          Ao longo da minha jornada, já desenvolvi uma variedade de produtos de alta qualidade
          utilizando as tecnologias mais recentes e requisitadas do mercado.
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
            <ParallaxCard project={project} translate={translateX} key={project.id} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((project) => (
            <ParallaxCard project={project} translate={translateXReverse} key={project.id} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {thirdRow.map((project) => (
            <ParallaxCard project={project} translate={translateX} key={project.id} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
});

interface ParallaxCardProps {
  project: IProject;
  translate: MotionValue<number>;
}

const ParallaxCard = ({ project, translate }: ParallaxCardProps): ReactElement => {
  return (
    <motion.div
      style={{
        x: translate,
        padding: "4px",
      }}
      whileHover={{
        y: -20,
      }}
      key={project.id}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 rounded-xl"
    >
      <a
        href={project.websiteUrl}
        target="_blank"
        rel="noreferrer"
        className="block group-hover/product:shadow-2xl rounded-xl"
      >
        <BackgroundGradient className="rounded-xl">
          <img
            src={project.thumbnail}
            alt={project.name}
            height="600"
            width="600"
            className="object-cover absolute h-full w-full inset-0 rounded-xl p-1"
          />
        </BackgroundGradient>
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-xl" />
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {project.name}
      </h2>
    </motion.div>
  );
};
