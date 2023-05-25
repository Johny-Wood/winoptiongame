import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./index.scss";

const UserProfileAvatar = () => {
  const user = useSelector((state) => state.user);

  return (
    <span className="user-profile-avatar">
      <img
        src={user.userAvatar}
        alt="Avatar"
        className="user-profile-avatar__img"
      />
    </span>
  );
};

export default UserProfileAvatar;
