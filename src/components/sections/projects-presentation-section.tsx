import { projectStore } from "@/stores/project-store";
import type { IProject } from "@/types/project";
import type { MotionValue, SpringOptions } from "framer-motion";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { useRef } from "react";
import { Image } from "../image";
import { NeonBackground } from "../neon-background";

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
    <section
      ref={elementRef}
      className="h-[300vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="max-w-7xl relative mx-auto py-40 px-4 left-0 top-0 w-full tablet-s:py-20">
        <h1 className="text-7xl font-bold text-zinc-100 tablet-s:text-4xl">
          Conheça mais <br /> sobre meu trabalho
        </h1>
        <p className="max-w-2xl text-xl mt-8 text-zinc-50 tablet-s:text-base">
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
    </section>
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
      }}
      whileHover={{
        y: -20,
      }}
      key={project.id}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 rounded-xl"
    >
      <NeonBackground className="w-full h-full">
        <a
          href={project.websiteUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Acesse o(a) ${project.name} na internet`}
          className="block group-hover/product:shadow-2xl rounded-xl"
        >
          <Image
            src={project.thumbnail}
            alt={project.name}
            height={600}
            width={600}
            className="object-cover absolute h-full w-full inset-0 rounded-xl p-0.5"
          />
        </a>
      </NeonBackground>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-zinc-950 pointer-events-none rounded-xl" />
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-zinc-50">
        {project.name}
      </h2>
    </motion.div>
  );
};
