import React, { useState } from "react";
import ConnectWallet from "./ConnectWallet";
import WalletBalance from "./WalletBalance";

const Wallet = () => {
  const [walletConnected, setWalletConnected] = useState(false);

  const handleConnectWallet = (value) => {
    setWalletConnected(value);
  };

  return (
    <>
      {walletConnected ? (
        <WalletBalance />
      ) : (
        <ConnectWallet handleConnect={handleConnectWallet} />
      )}
    </>
  );
};

export default Wallet;
