import classNames from "classnames";
import React from "react";

import "./skills.scss";

import { cardsMock } from "@/app/mock/cards";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section className={classNames("container", "skills")}>
      <ul className={classNames("container", "skills-list")}>
        {cardsMock.map((card) => {
          return (
            <SkillCard
              title={card.title}
              subtitle={card.subTitle}
              key={card.title}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
