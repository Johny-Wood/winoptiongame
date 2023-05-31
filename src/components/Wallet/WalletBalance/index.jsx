import React, { useEffect, useState } from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import TCurrency from "@/assets/T-currency.svg";
import WTCurrency from "@/assets/WT-currency.svg";
import WGBTCurrency from "@/assets/WGBT-currency.svg";
import infoIcon from "@/assets/info.svg";
import WalletButton from "../WalletButton";
import WalletInputRow from "./WalletInputRow";
import WalletBtnBig from "../ConnectWallet/WalletBtnBig";
import clsx from "clsx";

const WalletBalance = () => {
  const wallet = useSelector((state) => state.user.wallet);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

  const handleShowDeposit = () => {
    setShowWithdraw(false);
    setShowDeposit((showDeposit) => !showDeposit);
  };

  const handleShowWithdraw = () => {
    setShowDeposit(false);
    setShowWithdraw((showWithdraw) => !showWithdraw);
  };
  return (
    <div
      className={clsx(
        "wallet-balance",
        (showDeposit || showWithdraw) && "wallet-balance--deposit"
      )}
    >
      <div className="wallet-balance__item">
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
            <WalletButton
              dark={true}
              active={showWithdraw}
              handler={handleShowWithdraw}
            >
              Вывести
            </WalletButton>
            <WalletButton
              iconOnRight={true}
              active={showDeposit}
              handler={handleShowDeposit}
            >
              Пополнить
            </WalletButton>
          </div>
        </div>
        <div className="wallet-balance__container">
          <span className="wallet-balance__WT-balance">WINGT balance</span>{" "}
          <div className="wallet-balance__balance">
            <img
              src={WTCurrency}
              alt=""
              className="wallet-balance__WT-currency-icon"
            />
            <span className="wallet-balance__WT-currency-balance wallet-balance__currency">
              {wallet.WINGTCurrencyBalance}
            </span>
          </div>
        </div>
      </div>

      {showDeposit && (
        <>
          <div className="wallet-balance__item">
            <div className="wallet-balance__container wallet-balance__container--full">
              <WalletInputRow
                inputLeftCurrency="USDT"
                inputLeftDropdown={true}
                inputLeftIcon={TCurrency}
                inputRightIcon={WTCurrency}
                inputRightCurrency="WINGT"
                inputRightOrientation="right"
              />
              <WalletInputRow
                inputLeftPlaceholder="Промокод"
                inputLeftPromo={true}
                inputRightOrientation="right"
                inputRightCurrency="WINGBT"
                inputRightIcon={WGBTCurrency}
                inputRightInfoIcon={infoIcon}
              />
            </div>
          </div>
          <div className="wallet-balance__item wallet-balance__item--center">
            <WalletBtnBig>Обменять</WalletBtnBig>
          </div>
        </>
      )}

      {showWithdraw && (
        <>
          <div className="wallet-balance__item">
            <div className="wallet-balance__container wallet-balance__container--full">
              <WalletInputRow
                inputLeftCurrency="WINGT"
                inputLeftDropdown={true}
                inputLeftIcon={WTCurrency}
                inputRightIcon={TCurrency}
                inputRightCurrency="USDT"
                inputRightOrientation="right"
              />
            </div>
          </div>
          <div className="wallet-balance__item wallet-balance__item--center">
            <WalletBtnBig>Обменять</WalletBtnBig>
          </div>
        </>
      )}
    </div>
  );
};

export default WalletBalance;
