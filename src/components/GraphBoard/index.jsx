import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentInvest } from "../../store/slices/investSlice";
import GraphBoardInfo from "./GraphBoardInfo";
import GraphBoardShape from "./GraphBoardShape";
import GraphBoardScreen from "./GraphBoardScreen";

const GraphBoard = () => {
  const wallet = useSelector((state) => state.user.wallet);
  const coefficientUp = useSelector((state) => state.gameSession.coefficientUp);
  const coefficientDown = useSelector(
    (state) => state.gameSession.coefficientDown
  );
  const invest = useSelector((state) => state.invest.current);

  return (
    <div className="graph-board">
      <div className="graph-board__header">
        <GraphBoardInfo
          coefficientUp={coefficientUp}
          coefficientDown={coefficientDown}
          invest={invest}
        />
      </div>
      <div className="graph-board__shape">
        <GraphBoardShape />
      </div>
      <div className="graph-board__screen">
        <GraphBoardScreen />
      </div>
      {!wallet?.number && (
        <p className="graph-board__warning">
          Подключите кошелек что бы принять участие
        </p>
      )}
    </div>
  );
};

export default GraphBoard;
