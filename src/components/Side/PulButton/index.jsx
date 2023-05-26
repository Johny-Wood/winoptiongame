import React from "react";
import "./index.scss";
import clsx from "clsx";

const PulButton = ({ direction }) => {
  return (
    <button
      className={clsx(
        "pul-button",
        direction === "down" ? "pul-button--down" : "pul-button--up"
      )}
    >
      <svg
        className="pul-button__icon"
        width="32"
        height="26"
        viewBox="0 0 32 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.0341 0.261475L31.9566 25.0115H0.111655L16.0341 0.261475Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default PulButton;
