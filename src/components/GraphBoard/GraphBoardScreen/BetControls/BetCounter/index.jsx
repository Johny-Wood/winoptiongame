import React from "react";
import "./index.scss";
import IncDecButton from "./IncDecButton";

const BetCounter = () => {
  return (
    <div className="bet-counter">
      <IncDecButton>-</IncDecButton>0<IncDecButton dark={true}>+</IncDecButton>
    </div>
  );
};

export default BetCounter;
