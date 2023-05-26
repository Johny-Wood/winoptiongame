import React from "react";
import "./index.scss";
import UserProfileAvatar from "../UserProfile/UserProfileAvatar";
import GamerAvatar from "./GamerAvatar";

const Gamer = ({ avatar, country, boost, award, bet }) => {
  return (
    <div className="gamer">
      <GamerAvatar country={country} boost={boost} award={award} />
      <UserProfileAvatar avatar={avatar} />
      <span className="gamer__bet-amount">{bet}</span>
    </div>
  );
};

export default Gamer;
