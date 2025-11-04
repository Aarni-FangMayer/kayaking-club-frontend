import React from "react";
import ArrowBlueButton from "../buttons/arrow_blue/ArrowBlueButton";
import "./contactForm.css";

const ContactForm = ({ title, className  }) => {
  return (
      <div className={`contacts__form ${className || ""}`}>
        <h3 className="contacts__form-title">{title}</h3>
        <form action="" className="contacts__form">
          <input
            type="text"
            placeholder="name"
            className="contacts__form-field"
          />
          <input
            type="email"
            placeholder="email"
            className="contacts__form-field"
          />
          <input
            type="text"
            placeholder="message"
            className="contacts__form-field"
          />
          <ArrowBlueButton text={"Send"} />
        </form>
      </div>
  );
};

export default ContactForm;
