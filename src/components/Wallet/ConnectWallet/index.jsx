import React from "react";
import ConnectWalletBtn from "./ConnectWalletBtn";
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
      <ConnectWalletBtn handleConnect={handleConnect} />
    </>
  );
};

export default ConnectWallet;
