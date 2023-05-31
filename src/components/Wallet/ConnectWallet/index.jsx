import React from "react";
import WalletBtnBig from "./WalletBtnBig";
import { useDispatch } from "react-redux";
import { setWallet } from "../../../store/slices/userSlice";
import getWallet from "../../../api/handlers/getWallet";

const ConnectWallet = () => {
  // Logic of connecting wallet
  const dispatch = useDispatch();

  const handleConnect = () => {
    const requestWalletConnection = (async () => {
      const response = await getWallet();

      dispatch(setWallet(response));
    })();
  };

  return (
    <>
      <WalletBtnBig handler={handleConnect}>Connect Wallet</WalletBtnBig>
    </>
  );
};

export default ConnectWallet;
