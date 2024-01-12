import React from "react";

import "./bottom.scss";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import linkedinIcon from "@/assets/svgs/linkedin.svg";
const Bottom = () => {
  return (
    <div className={classNames("bottom", "container")}>
      <h2 className={classNames("bottom-title")}>emanuelramos</h2>

      <Link href={"https://www.linkedin.com/in/emanuel-ramos1/"}>
        <Image
          alt="Redirect to linkedin footer"
          src={linkedinIcon}
          width={24}
          height={24}
        ></Image>
      </Link>
    </div>
  );
};

export default Bottom;
