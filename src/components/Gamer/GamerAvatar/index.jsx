import React from "react";
import "./index.scss";

const GamerAvatar = ({ country, boost, award }) => {
  return (
    <>
      <span className="country">
        <img
          src={country.icon}
          alt={country.title}
          width={17}
          height={10}
          className="country__icon"
        />
      </span>

      <span className="boost">
        <img
          src={boost && boost.icon}
          alt={award && boost.value}
          className="boost__icon"
        />
      </span>

      <span className="award">
        <img
          src={award && award.icon}
          alt={award && award.value}
          className="award__img"
        />
      </span>
    </>
  );
};

export default GamerAvatar;
