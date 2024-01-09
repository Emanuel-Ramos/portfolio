import Image from "next/image";
import React from "react";
import classNames from "classnames";

import "./floatingsImgs.scss";
import { FloatingImgsProps } from "@/typings/floatingImgs";

const FloatingImgs = ({
  right,
  left,
  top,
  bottom,
  img,
  width,
  height,
  animation,
  zIndex,
  overflow,
}: FloatingImgsProps) => {
  const position = {
    right: right ? `${right}px` : "auto",
    left: left ? `${left}px` : "auto",
    top: top ? `${top}px` : "auto",
    bottom: bottom ? `${bottom}px` : "auto",
    maxHeight: height,
    maxWidth: width,
    animation: animation ? `0.7s ease-out 0s 1 ${animation}` : "none",
    zIndex: zIndex ? zIndex : "0",
    overflow: overflow ? overflow : "auto",
  };

  return (
    <Image
      className={classNames("floating-img")}
      style={position}
      src={img}
      alt={`Float image ${img}`}
      width={width}
      height={height}
    />
  );
};

export default FloatingImgs;
