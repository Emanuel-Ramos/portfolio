import React from "react";
import "./footer.scss";
import classNames from "classnames";
import Contact from "./Contact";
import Bottom from "./Bottom";

const Footer = () => {
  return (
    <footer className={classNames("footer")}>
      <section className={classNames("container")}>
        <Contact />
        <Bottom />
      </section>
    </footer>
  );
};

export default Footer;
