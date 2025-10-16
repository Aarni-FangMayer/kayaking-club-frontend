import React from "react";
import ProfileAvatar from "./ProfileAvatar";
import ProfileForm from "../forms/ProfileForm";
import "./profileEditor.css";

const ProfileEditor = ( { avatarImg } ) => {
  return (
    <div className="account__edit">
      <h3 className="account__edit-title">Edit profile</h3>
      <div className="account__edit-content">
        <ProfileAvatar avatarImg={avatarImg} btnText={"change avatar"} />
        <ProfileForm placeholderName={"Name Name"} placeholderEmail={"email@gmail.com"} placeholderPhone={"40 856 6545"} btnText={"Save"} />
      </div>
    </div>
  );
};

export default ProfileEditor;
