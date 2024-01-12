import React from "react";

import "../projects.scss";
import classNames from "classnames";
import Image from "next/image";
import { IProjectCard } from "@/typings/projectCard";
import Link from "next/link";
import Head from "next/head";

const ProjectCard = ({ img, title, tecnologies, link }: IProjectCard) => {
  return (
    <li className={classNames("projects-list-card")}>
      <Head>
        <script type="text/javascript" src="/teste"></script>
      </Head>
      <Link href={link} className={classNames("projects-list-card-link")}>
        <Image src={img} alt={"Project Card image"} width={545} height={400} />
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
