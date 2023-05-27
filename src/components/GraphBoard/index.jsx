import React, { useEffect } from "react";
import "./index.scss";
import GraphBoardInfo from "./GraphBoardInfo";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentInvest } from "../../store/slices/investSlice";

const GraphBoard = () => {
  const coefficientUp = useSelector((state) => state.gameSession.coefficientUp);
  const coefficientDown = useSelector(
    (state) => state.gameSession.coefficientDown
  );
  const invest = useSelector((state) => state.invest.current);

  const dispatch = useDispatch();

  // Test
  useEffect(() => {
    dispatch(setCurrentInvest(10));
  }, []);

  return (
    <div className="graph-board">
      <GraphBoardInfo
        coefficientUp={coefficientUp}
        coefficientDown={coefficientDown}
        invest={invest}
      />
    </div>
  );
};

export default GraphBoard;
