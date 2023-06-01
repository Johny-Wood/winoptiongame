import React from "react";
import "./index.scss";
import clsx from "clsx";

const EdgeValueButton = ({ edge, handleInvestChange, dark, children }) => {
  return (
    <button
      className={clsx("edge-value-button", dark && "edge-value-button--dark")}
      onClick={() => handleInvestChange(edge)}
    >
      <span className="edge-value-button__inner">{children}</span>
    </button>
  );
};

export default EdgeValueButton;
