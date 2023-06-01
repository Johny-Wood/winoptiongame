import React from "react";
import "./index.scss";
import BetCounter from "./BetCounter";
import EdgeValueButton from "./BetCounter/EdgeValueButton";
import { useDispatch, useSelector } from "react-redux";
import {
  decCurrentInvest,
  incCurrentInvest,
  setCurrentInvest,
} from "../../../../store/slices/investSlice";

const BetControls = () => {
  const currentInvest = useSelector((state) => state.invest.current);
  const dispatch = useDispatch();

  const step = 10;

  const handleSetInvest = (invest) => {
    dispatch(setCurrentInvest(invest));
  };

  const handleInvestChange = (type) => {
    if (type === "inc") dispatch(incCurrentInvest(step));
    if (type === "dec") dispatch(decCurrentInvest(step));
  };

  return (
    <div className="bet-controls">
      <EdgeValueButton
        edge={10}
        dark={true}
        handleInvestChange={handleSetInvest}
      >
        MIN
      </EdgeValueButton>
      <BetCounter value={currentInvest} handler={handleInvestChange} />
      <EdgeValueButton edge={100} handleInvestChange={handleSetInvest}>
        MAX
      </EdgeValueButton>
    </div>
  );
};

export default BetControls;
