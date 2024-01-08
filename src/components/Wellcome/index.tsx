import Image from "next/image";
import React from "react";

import wellcomeImage from "../../assets/imgs/wellcome.jpg";
import classNames from "classnames";

import "./wellcome.scss";

const Wellcome = () => {
  return (
    <section className={classNames("container", "wellcome")}>
      <div>Hello</div>
      <Image
        src={wellcomeImage}
        alt="Profile image"
        className={classNames("wellcome-image")}
      />
    </section>
  );
};

export default Wellcome;
