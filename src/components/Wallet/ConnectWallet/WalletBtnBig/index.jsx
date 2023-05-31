import React from "react";
import "./index.scss";
// childre
const WalletBtnBig = ({ handler, children }) => {
  return (
    <button className="connect-wallet-btn" onClick={handler}>
      <span className="connect-wallet-btn__inside">{children}</span>
    </button>
  );
};

export default WalletBtnBig;
