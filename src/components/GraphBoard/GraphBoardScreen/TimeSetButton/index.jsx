import React from "react";
import "./index.scss";
import clsx from "clsx";
const TimeSetButton = ({ children, active }) => {
  return (
    <button
      className={clsx(
        "graph-board-time-set-btn",
        active && "graph-board-time-set-btn--active"
      )}
    >
      {children}
    </button>
  );
};

export default TimeSetButton;
