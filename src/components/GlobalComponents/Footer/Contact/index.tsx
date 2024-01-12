import React from "react";

import "./contact.scss";
import ContactForm from "./ContactForm";
import classNames from "classnames";

const Contact = () => {
  return (
    <div className={classNames("contact")} id="contact">
      <div className={classNames("contact-text")}>
        <h2 className={classNames("contact-text-title")}>Contact</h2>
        <p className={classNames("contact-text-subtitle")}>
          I would love to hear about your project and how I can help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
