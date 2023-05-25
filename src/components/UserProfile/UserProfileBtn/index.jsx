import React from "react";
import "./index.scss";
import UserProfileAvatar from "../UserProfileAvatar";

const UserProfileBtn = ({ avatar }) => {
  return (
    <button className="user-profile-btn">
      <UserProfileAvatar avatar={avatar} />
    </button>
  );
};

export default UserProfileBtn;
