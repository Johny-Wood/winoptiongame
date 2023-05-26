import React from "react";
import "./index.scss";
import clsx from "clsx";

const PulPayout = ({ payout, direction }) => {
  return (
    <div
      className={clsx(
        "pul-payout",
        direction === "up" ? "pul-payout--up" : "pul-payout--down"
      )}
    >
      <span className="pul-payout__title">UP pool payout</span>
      <span className="pul-payout__percentage">9999%</span>
    </div>
  );
};

export default PulPayout;
