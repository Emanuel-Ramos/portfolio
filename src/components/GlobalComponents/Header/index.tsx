"use client";
import React from "react";
import "./header.scss";
import classNames from "classnames";
import Link from "next/link";

import Image from "next/image";

import gitHubIcon from "@/assets/svgs/github.svg";
import linkedinIcon from "@/assets/svgs/linkedin.svg";
import ThemeSelector from "./ThemeSelector";
import useScrollDirection from "@/hooks/useScrollDirection";

const Header = () => {
  // const scrollDirection = useScrollDirection();
  return (
    <header
      className={classNames(
        "container",
        "header"
        // scrollDirection
      )}
    >
      <h2 className={classNames("header-title")}>emanuelramos</h2>
      <div>
        <ul className={classNames("header-socials")}>
          <li className={classNames("header-socials-link")}>
            <Link href={"https://github.com/Emanuel-Ramos"}>
              <Image
                alt="Redirect to github"
                src={gitHubIcon}
                width={24}
                height={24}
              ></Image>
            </Link>
          </li>
          <li className={classNames("header-socials-link")}>
            <Link href={"https://www.linkedin.com/in/emanuel-ramos1/"}>
              <Image
                alt="Redirect to github"
                src={linkedinIcon}
                width={24}
                height={24}
              ></Image>
            </Link>
          </li>
          <li className={classNames("header-socials-link")}>
            <ThemeSelector />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
