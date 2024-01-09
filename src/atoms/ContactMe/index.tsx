import classNames from "classnames";
import Link from "next/link";
import React from "react";

import "./contact-me.scss";

const ContactMe = () => {
  return (
    <Link href={"#contact"} className={classNames("contact-me-btn")}>
      CONTACT ME
    </Link>
  );
};

export default ContactMe;
