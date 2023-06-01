import React from "react";
import "./index.scss";
import clsx from "clsx";

const EdgeValueButton = ({ dark, children }) => {
  return (
    <button
      className={clsx("edge-value-button", dark && "edge-value-button--dark")}
    >
      <span className="edge-value-button__inner">{children}</span>
    </button>
  );
};

export default EdgeValueButton;
