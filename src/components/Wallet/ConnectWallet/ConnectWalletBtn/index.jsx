import React from "react";
import "./index.scss";

const ConnectWalletBtn = ({ handleConnect }) => {
  return (
    <button className="connect-wallet-btn" onClick={handleConnect}>
      <span className="connect-wallet-btn__inside">Connect wallet</span>
    </button>
  );
};

export default ConnectWalletBtn;
