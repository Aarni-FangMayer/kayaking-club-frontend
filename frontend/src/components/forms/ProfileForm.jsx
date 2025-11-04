import React from "react";
import ArrowBlueButton from "../buttons/arrow_blue/ArrowBlueButton";
import "./profileForm.css";

const ProfileForm = ({ placeholderName, placeholderEmail, placeholderPhone, btnText }) => {
  return (
    <div className="account__form">
      <form className="account__form-fields">
        <input type="text" placeholder={placeholderName} className="account__input" />
        <input
          type="email"
          placeholder={placeholderEmail}
          className="account__input"
        />
        <input
          type="phone"
          placeholder={placeholderPhone}
          className="account__input"
        />
      </form>
      <div className="account__submit-button">
        <ArrowBlueButton text={btnText} />
      </div>
    </div>
  );
};

export default ProfileForm;
