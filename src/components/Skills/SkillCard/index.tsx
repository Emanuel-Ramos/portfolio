import React from "react";

import "../skills.scss";
import classNames from "classnames";

const SkillCard = ({ title, subtitle }: ISkillCard) => {
  return (
    <li className={classNames("skills-list-card")}>
      <h2 className={classNames("skills-list-card-title")}>{title}</h2>
      <p className={classNames("skills-list-card-subtitle")}>{subtitle}</p>
    </li>
  );
};

export default SkillCard;
