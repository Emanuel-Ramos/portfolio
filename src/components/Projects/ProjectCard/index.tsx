import React from "react";

import "../projects.scss";
import classNames from "classnames";
import Image from "next/image";
import { IProjectCard } from "@/typings/projectCard";
import Link from "next/link";

const ProjectCard = ({ img, title, tecnologies, link }: IProjectCard) => {
  return (
    <li className={classNames("projects-list-card")}>
      <Link
        href={link}
        className={classNames("projects-list-card-link")}
        target="_blank"
      >
        <div className={classNames("projects-list-card-img-wrapper")}>
          <Image
            className={classNames("projects-list-card-img")}
            src={img}
            alt={"Project Card image"}
          />
        </div>

        <h3 className={classNames("projects-list-card-title")}>{title}</h3>
        <ul className={classNames("projects-list-card-tecnologies")}>
          {tecnologies.map((tecnology) => {
            return (
              <li
                key={tecnology}
                className={classNames("projects-list-card-tecnologies-item")}
              >
                {tecnology}
              </li>
            );
          })}
        </ul>
      </Link>
    </li>
  );
};

export default ProjectCard;
