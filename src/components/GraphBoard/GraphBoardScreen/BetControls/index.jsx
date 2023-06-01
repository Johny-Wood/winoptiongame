import React from "react";
import "./index.scss";
import BetCounter from "./BetCounter";
import EdgeValueButton from "./BetCounter/EdgeValueButton";

const BetControls = () => {
  return (
    <div className="bet-controls">
      <EdgeValueButton dark={true}>MIN</EdgeValueButton>
      <BetCounter />
      <EdgeValueButton>MAX</EdgeValueButton>
    </div>
  );
};

export default BetControls;
