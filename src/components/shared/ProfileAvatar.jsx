import React from "react";
import "./profileAvatar.css";

const ProfileAvatar = ( {avatarImg, btnText } ) => {
  return (
    <div className="account__avatar">
      <img src={avatarImg} alt="User avatar" className="account__avatar-image" />
      <button className="account__avatar-button">{btnText}</button>
    </div>
  );
};

export default ProfileAvatar;
