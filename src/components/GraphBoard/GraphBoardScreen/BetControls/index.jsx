import React from "react";
import "./index.scss";
import BetCounter from "./BetCounter";

const BetControls = () => {
  return (
    <div className="bet-controls">
      {/* MINbutton */}
      <BetCounter />
      {/* MAXbutton */}
    </div>
  );
};

export default BetControls;
