import React, { useEffect, useState } from "react";
import "./index.scss";
import getUser from "../../../api/handlers/getUser";

const UserProfileAvatar = () => {
  const [avatarImgSrc, setAvatarImgSrc] = useState(null);

  useEffect(() => {
    const getAvatar = (async () => {
      const response = await getUser();

      console.log("asd");
      setAvatarImgSrc(response.userAvatar);
    })();
  }, []);

  return (
    <span className="user-profile-avatar">
      <img
        src={avatarImgSrc}
        alt="Avatar"
        className="user-profile-avatar__img"
      />
    </span>
  );
};

export default UserProfileAvatar;
