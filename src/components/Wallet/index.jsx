import React from "react";
import { useSelector } from "react-redux";
import ConnectWallet from "./ConnectWallet";
import WalletBalance from "./WalletBalance";

const Wallet = () => {
  const walletConnected = useSelector((state) => state.user.wallet);
  console.group(walletConnected);

  return <>{walletConnected?.number ? <WalletBalance /> : <ConnectWallet />}</>;
};

export default Wallet;
