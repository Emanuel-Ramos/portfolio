import classNames from "classnames";
import React from "react";

import { projectsCardsMock } from "@/app/mock/cards";
import ProjectCard from "./ProjectCard";
import ContactMe from "@/atoms/ContactMe";
import FloatingImgs from "@/atoms/FloatingImgs";

import Circles from "@/assets/svgs/Circles.svg";
import { EnumAnimation } from "@/typings/floatingImgs";

const Projects = () => {
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

        <ul className={classNames("projects-list")}>
          {projectsCardsMock.map((card) => {
            return (
              <ProjectCard
                img={card.img}
                title={card.title}
                tecnologies={card.tecnologies}
                link={card.link}
                key={card.title}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Projects;
