import React from "react";
import ConnectWalletBtn from "./ConnectWalletBtn";

const ConnectWallet = ({ handleConnect }) => {
  // Logic of connecting wallet

  return (
    <>
      <ConnectWalletBtn handleConnect={handleConnect} />
    </>
  );
};

export default ConnectWallet;
