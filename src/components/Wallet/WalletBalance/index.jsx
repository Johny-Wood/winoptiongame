import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import TCurrency from "@/assets/T-currency.svg";
import WTCurency from "@/assets/WT-currency.svg";
import WalletButton from "../WalletButton";

const WalletBalance = () => {
  const wallet = useSelector((state) => state.user.wallet);

  return (
    <div className="wallet-balance">
      <div className="wallet-balance__container">
        <span className="wallet-balance__acc-number">{wallet.number}</span>
        <div className="wallet-balance__balance">
          <img
            src={TCurrency}
            alt=""
            className="wallet-balance__T-currency-icon"
          />
          <span className="wallet-balance__T-currency-balance wallet-balance__currency">
            {wallet.TCurrencyBalance}
          </span>
        </div>
      </div>
      <div className="wallet-balance__container wallet-balance__container--center">
        <span className="wallet-balance__currency-equivalent">
          1USDT=1WINGT
        </span>
        <div className="wallet-balance__controls">
          <WalletButton dark={true}>Вывести</WalletButton>
          <WalletButton iconOnRight={true}>Пополнить</WalletButton>
        </div>
      </div>
      <div className="wallet-balance__container">
        <span className="wallet-balance__WT-balance">WINGT balance</span>{" "}
        <div className="wallet-balance__balance">
          <img
            src={WTCurency}
            alt=""
            className="wallet-balance__WT-currency-icon"
          />
          <span className="wallet-balance__WT-currency-balance wallet-balance__currency">
            {wallet.WINGTCurrencyBalance}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WalletBalance;
