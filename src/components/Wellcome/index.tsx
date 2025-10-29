import Image from "next/image";
import React from "react";

import wellcomeImage from "@/assets/imgs/wellcome.jpg";
import classNames from "classnames";

import "./wellcome.scss";
import ContactMe from "@/atoms/ContactMe";
import FloatingImgs from "@/atoms/FloatingImgs";

import Circles from "@/assets/svgs/Circles.svg";
import Rectangle from "@/assets/svgs/Rectangle.svg";
import Oval from "@/assets/svgs/Oval.svg";

import { EnumAnimation } from "@/typings/floatingImgs";

const Wellcome = () => {
  return (
    <>
      <FloatingImgs
        left={"0"}
        top={"135"}
        img={Circles}
        width={530}
        height={129}
        animation={EnumAnimation.slideInFromLeft}
        overflow="hidden"
      />
      <section className={classNames("container", "wellcome")}>
        <div className={classNames("wellcome-text")}>
          <h1 className={classNames("wellcome-text-title")}>
            Nice to meet you! I&apos;m <span>Emanuel Ramos</span>
          </h1>
          <p className={classNames("wellcome-text-subtitle")}>
            Hi, how are you? I&apos;m a tech lead and full stack developer, more
            passionate about the front end. I have studied programming for 6
            years and have been working in the area for 5 years. Below this page
            there is more information about the technologies and projects I have
            worked on. Welcome!
          </p>
          <ContactMe />
        </div>
        <div className={classNames("wellcome-image")}>
          <FloatingImgs
            right={"-65"}
            top={"160"}
            img={Rectangle}
            width={129}
            height={129}
            zIndex={2}
          />
          <FloatingImgs
            left={"-65"}
            bottom={"105"}
            img={Oval}
            width={129}
            height={129}
            zIndex={2}
          />
          <Image
            className={classNames("wellcome-image-profile")}
            src={wellcomeImage}
            alt="Profile image"
          />
        </div>
      </section>
    </>
  );
};

export default Wellcome;
