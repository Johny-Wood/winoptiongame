import React from "react";
import "./index.scss";
import IncDecButton from "./IncDecButton";
import { useSelector } from "react-redux";

const BetCounter = ({ value, handler }) => {
  return (
    <div className="bet-counter">
      <IncDecButton handler={handler}>-</IncDecButton>
      {value}
      <IncDecButton handler={handler} dark={true}>
        +
      </IncDecButton>
    </div>
  );
};

export default BetCounter;
