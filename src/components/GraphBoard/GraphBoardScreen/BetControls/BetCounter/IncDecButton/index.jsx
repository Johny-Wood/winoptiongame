import React from "react";
import "./index.scss";
import clsx from "clsx";

const IncDecButton = ({ dark, children }) => {
  return (
    <button className={clsx("inc-dec-button", dark && "inc-dec-button--dark")}>
      {children}
    </button>
  );
};

export default IncDecButton;
