import React from "react";
import "./index.scss";

const GamerAvatar = ({ country, boost, award }) => {
  return (
    <>
      {country.title && (
        <span className="country">
          <img
            src={country.icon}
            alt={country.title}
            width={17}
            height={10}
            className="country__icon"
          />
        </span>
      )}

      {boost?.value && (
        <span className="boost">
          <img
            src={boost && boost.icon}
            alt={award && boost.value}
            className="boost__icon"
          />
        </span>
      )}

      {award?.value && (
        <span className="award">
          <img src={award.icon} alt={award.value} className="award__img" />
        </span>
      )}
    </>
  );
};

export default GamerAvatar;
