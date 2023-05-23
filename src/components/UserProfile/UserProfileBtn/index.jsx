import React from "react";
import "./index.scss";
import UserProfileAvatar from "../UserProfileAvatar";

const UserProfileBtn = () => {
  return (
    <button className="user-profile-btn">
      <UserProfileAvatar />
    </button>
  );
};

export default UserProfileBtn;
