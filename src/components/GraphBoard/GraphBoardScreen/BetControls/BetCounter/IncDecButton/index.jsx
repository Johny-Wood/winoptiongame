import React from "react";
import "./index.scss";
import clsx from "clsx";

const IncDecButton = ({ handler, dark, children }) => {
  return (
    <button
      onClick={() => (dark ? handler("inc") : handler("dec"))}
      className={clsx("inc-dec-button", dark && "inc-dec-button--dark")}
    >
      {children}
    </button>
  );
};

export default IncDecButton;
