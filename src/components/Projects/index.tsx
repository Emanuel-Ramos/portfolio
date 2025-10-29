import classNames from "classnames";
import React from "react";

import { projectsCardsMock } from "@/app/mock/cards";
import ProjectCard from "./ProjectCard";
import ContactMe from "@/atoms/ContactMe";
import FloatingImgs from "@/atoms/FloatingImgs";

import Circles from "@/assets/svgs/Circles.svg";
import { EnumAnimation } from "@/typings/floatingImgs";

const Projects = () => {
  // Duplicar os cards para criar o efeito infinito
  const duplicatedCards = [...projectsCardsMock, ...projectsCardsMock];

  return (
    <>
      {/* <FloatingImgs
        left={"0"}
        top={"135"}
        img={Circles}
        width={530}
        height={129}
        animation={EnumAnimation.slideInFromRight}
        overflow="hidden"
      /> */}
      <section className={classNames("container", "projects")}>
        <div className={classNames("projects-head")}>
          <h2 className={classNames("projects-head-title")}>Projects</h2>
          <ContactMe />
        </div>

        <div className={classNames("projects-slider-wrapper")}>
          <ul className={classNames("projects-list", "projects-list-slider")}>
            {duplicatedCards.map((card, index) => {
              return (
                <ProjectCard
                  img={card.img}
                  title={card.title}
                  tecnologies={card.tecnologies}
                  link={card.link}
                  key={`${card.title}-${index}`}
                />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Projects;
