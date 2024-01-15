import React from "react";
import classNames from "classnames";

import "../contact.scss";

const ContactForm = () => {
  return (
    <form
      className={classNames("contact-form")}
      action="mailto:emanuel.ramos115@hotmail.com"
      method="post"
    >
      <input
        className={classNames("contact-form-input")}
        placeholder="Name"
        name="Name"
      />
      <input
        className={classNames("contact-form-input")}
        placeholder="E-mail"
        name="Email"
      />
      <input
        className={classNames("contact-form-input-text")}
        placeholder="MESSAGE"
        name="Message"
      />
      <button type="submit" className={classNames("contact-form-submit")}>
        SEND MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;
