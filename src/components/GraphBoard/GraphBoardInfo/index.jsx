import React from "react";
import "./index.scss";

const GraphBoardInfo = ({ invest, coefficientUp, coefficientDown }) => {
  return (
    <div className="graph-board-info">
      <div className="graph-board-info__container">
        <div className="graph-board-info__invests graph-board-info__content">
          <span className="graph-board-info__title">Ваше вложение</span>
          <span className="graph-board-info__amount">{invest}</span>
        </div>

        <div className="graph-board-info__potential-profit graph-board-info__content">
          <span className="graph-board-info__title">Потенциальный доход</span>
          <span className="graph-board-info__amount graph-board-info__amount--green">
            {invest && invest * coefficientUp}
          </span>
        </div>
      </div>

      <div className="graph-board-info__container">
        <div className="graph-board-info__invests graph-board-info__content">
          <span className="graph-board-info__title">Ваше вложение</span>
          <span className="graph-board-info__amount">{invest}</span>
        </div>

        <div className="graph-board-info__potential-profit graph-board-info__content">
          <span className="graph-board-info__title">Потенциальный доход</span>
          <span className="graph-board-info__amount graph-board-info__amount--red">
            {invest && invest * coefficientDown}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GraphBoardInfo;
