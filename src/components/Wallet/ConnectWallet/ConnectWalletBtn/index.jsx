import React, { useState } from "react";
import "./index.scss";

const ConnectWalletBtn = ({ handleConnect }) => {
  const handler = () => {
    handleConnect(true);
  };
  return (
    <button className="connect-wallet-btn" onClick={handler}>
      <span className="connect-wallet-btn__inside">Connect wallet</span>
    </button>
  );
};

export default ConnectWalletBtn;
