import React from "react";
import "./index.scss";
import UserProfileAvatar from "../UserProfile/UserProfileAvatar";
import GamerAvatar from "./GamerAvatar";

const Gamer = ({ avatar, countryIcon, boostIcon, awardIcon }) => {
  return (
    <div className="gamer">
      <GamerAvatar
        countryIcon={countryIcon}
        boostIcon={boostIcon}
        awardIcon={awardIcon}
      />
      <UserProfileAvatar avatar={avatar} />
    </div>
  );
};

export default Gamer;
