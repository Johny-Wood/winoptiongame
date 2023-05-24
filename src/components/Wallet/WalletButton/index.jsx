import React from "react";
import "./index.scss";
import clsx from "clsx";
import arrow from "@/assets/arrow-right.svg";

const WalletButton = ({ dark, iconOnRight, children }) => {
  return (
    <button
      className={clsx(
        "wallet-button",
        dark && "wallet-button--dark",
        iconOnRight ? "wallet-button--icon-right" : "wallet-button--icon-left"
      )}
    >
      <img src={arrow} alt="" className="wallet-button__icon" />
      {children}
    </button>
  );
};

export default WalletButton;
