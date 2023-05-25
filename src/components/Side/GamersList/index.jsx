import React from "react";
import "./index.scss";
import userAvatar from "@/assets/avatar.png";
import franceIcon from "@/assets/france.jpg";
import boostX5 from "@/assets/boost-x5.svg";
import awardStar from "@/assets/award-star.svg";
import Gamer from "../../Gamer";

const GamersList = () => {
  return (
    <div className="gamers-list">
      <Gamer
        avatar={userAvatar}
        countryIcon={franceIcon}
        boostIcon={boostX5}
        awardIcon={awardStar}
      />
    </div>
  );
};

export default GamersList;
