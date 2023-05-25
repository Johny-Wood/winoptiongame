import React from "react";
import "./index.scss";

const GamerAvatar = ({ countryIcon, boostIcon, awardIcon }) => {
  return (
    <>
      <span className="country">
        <img
          src={countryIcon}
          alt="Country icon"
          width={17}
          height={10}
          className="country__icon"
        />
      </span>

      <span className="boost">
        <img src={boostIcon} alt="Boost icon" className="boost__icon" />
      </span>

      <span className="award">
        <img src={awardIcon} alt="Award" className="award__img" />
      </span>
    </>
  );
};

export default GamerAvatar;
