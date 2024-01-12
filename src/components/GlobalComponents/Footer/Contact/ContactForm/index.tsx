import React from "react";
import classNames from "classnames";

import "../contact.scss";

const ContactForm = () => {
  return (
    <form className={classNames("contact-form")}>
      <input className={classNames("contact-form-input")} placeholder="Name" />
      <input
        className={classNames("contact-form-input")}
        placeholder="E-mail"
      />
      <input
        className={classNames("contact-form-input-text")}
        placeholder="MESSAGE"
      />
      <button type="submit" className={classNames("contact-form-submit")}>
        SEND MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;
