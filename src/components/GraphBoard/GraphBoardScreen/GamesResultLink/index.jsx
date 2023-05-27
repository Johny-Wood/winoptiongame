import React from "react";
import "./index.scss";

const GamesResultLink = ({ icon, children }) => {
  return (
    <a className="games-result-link" href="#">
      <img src={icon} alt="Icon" className="games-result-link__img" />
      {children}
    </a>
  );
};

export default GamesResultLink;
