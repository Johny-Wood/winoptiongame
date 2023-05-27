import React from "react";
import "./index.scss";
import crown from "@/assets/award-crown.svg";
import award from "@/assets/award-star.svg";
import TimeSetButton from "./TimeSetButton";
import GamesResultLink from "./GamesResultLink";
import Timer from "./Timer";

const GraphBoardScreen = () => {
  return (
    <div className="graph-board-screen">
      <div className="graph-board-screen__header">
        <div className="graph-board-screen__graph-time-set">
          <TimeSetButton>1м</TimeSetButton>
          <TimeSetButton>1ч</TimeSetButton>
          <TimeSetButton active={true}>2ч</TimeSetButton>
        </div>

        <div className="graph-board-screen__timer">
          <Timer />
        </div>

        <div className="graph-board-screen__results-links">
          <GamesResultLink icon={crown}>Best of the week</GamesResultLink>
          <GamesResultLink icon={award}>Best of the month</GamesResultLink>
        </div>
      </div>
    </div>
  );
};

export default GraphBoardScreen;
