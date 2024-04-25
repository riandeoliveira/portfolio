import externalLinkIcon from "@/assets/icons/common/external-link.svg";
import gitHubIcon from "@/assets/icons/common/github.svg";
import type { IProject } from "@/types/project";
import type { ReactElement } from "react";
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { SkillIcon } from "./skill-icon";
import { Tooltip } from "./tooltip";

interface ProjectCardProps extends IProject {}

export const ProjectCard = ({
  description,
  gitHubUrl,
  imageUrl,
  name,
  releaseDate,
  skillList,
  websiteUrl,
}: ProjectCardProps): ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();

    const x = (event.clientX - left - width / 2) / 25;
    const y = (event.clientY - top - height / 2) / 25;

    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (): void => {
    setIsMouseEntered(true);

    if (!containerRef.current) return;
  };

  const handleMouseLeave = (): void => {
    if (!containerRef.current) return;

    setIsMouseEntered(false);

    containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  const handleAnimations = (): void => {
    if (!ref.current) return;

    if (isMouseEntered) {
      const styles = `
        rotateX(0deg)
        rotateY(0deg)
        rotateZ(0deg)
        translateX(0px)
        translateY(0px)
        translateZ(100px)
      `;

      ref.current.style.transform = styles;

      return;
    }

    if (!isMouseEntered) {
      const styles = `
        translateX(0px)
        translateY(0px)
        translateZ(0px)
        rotateX(0deg)
        rotateY(0deg)
        rotateZ(0deg)
      `;

      ref.current.style.transform = styles;

      return;
    }
  };

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  return (
    <div
      className="flex items-center justify-center"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex items-center justify-center relative transition-all duration-200 ease-linear"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="w-fit transition duration-200 ease-linear" ref={ref}>
          <div
            className={`flex flex-col justify-between z-10 bg-transparent absolute h-full w-full p-6 text-white transition-opacity ${isMouseEntered ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex flex-col gap-6">
              <h1 className="text-center text-2xl font-semibold">{name}</h1>
              <p>{description}</p>
              <ul className="flex gap-4">
                {skillList.map((skillName) => (
                  <li key={uuid()}>
                    <SkillIcon name={skillName} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="flex gap-12">
                <Tooltip
                  id={1}
                  label="Acessar o repositório"
                  linkUrl={gitHubUrl}
                  iconUrl={gitHubIcon}
                />
                <Tooltip
                  id={2}
                  label="Acessar o projeto"
                  linkUrl={websiteUrl}
                  iconUrl={externalLinkIcon}
                />
              </div>
              <span>Lançado em {releaseDate}</span>
            </div>
          </div>
          <img
            src={imageUrl}
            height="1000"
            width="1000"
            alt="thumbnail"
            className={`object-cover rounded-xl group-hover/card:shadow-xl w-[574px] h-[320px] ${isMouseEntered ? "blur-sm brightness-50" : ""}`}
          />
          {/* 860px | 480px */}
        </div>
      </div>
    </div>
  );
};
