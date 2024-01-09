import React from "react";

import "../skills.scss";
import classNames from "classnames";

const SkillCard = ({ title, subtitle }: ICard) => {
  return (
    <li className={classNames("skills-list-card")}>
      <h3 className={classNames("skills-list-card-title")}>{title}</h3>
      <h4 className={classNames("skills-list-card-subtitle")}>{subtitle}</h4>
    </li>
  );
};

export default SkillCard;
