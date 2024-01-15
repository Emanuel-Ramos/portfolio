"use client";
import useThemes from "@/hooks/useThemes";
import React, { useState } from "react";

import "../header.scss";
import lightToggle from "../../../../assets/imgs/dark-mode-toggle-icon.png";
import darkToggle from "../../../../assets/imgs/light-mode-toggle-icon.png";
import Image from "next/image";
import classNames from "classnames";

const ThemeSelector = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const HandleChangeTheme = (theme: string) => {
    setDarkTheme(!darkTheme);
    useThemes(theme);
  };
  return (
    <button
      onClick={() => HandleChangeTheme(darkTheme ? "light" : "dark")}
      className={classNames("header-theme-toggle")}
    >
      <Image
        src={darkTheme ? darkToggle : lightToggle}
        alt="Theme toggle"
        width={24}
        height={24}
      />
    </button>
  );
};

export default ThemeSelector;
