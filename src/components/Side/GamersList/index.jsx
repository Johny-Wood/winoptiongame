import React from "react";
import "./index.scss";
import Gamer from "../../Gamer";

const GamersList = ({ gamers }) => {
  return (
    <div className="gamers-list">
      {gamers.map((gamer) => (
        <Gamer
          avatar={gamer.userAvatar}
          country={gamer.country}
          boost={gamer.boost}
          award={gamer.award}
          bet={gamer.bet}
          key={gamer.userId}
        />
      ))}
    </div>
  );
};

export default GamersList;
