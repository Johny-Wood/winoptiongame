import React, { useState } from "react";
import "./index.scss";
import ExchangeIcon from "@/assets/exchange.svg";
import WalletInput from "./WalletInput";

const WalletInputRow = ({
  inputLeftCurrency,
  inputRightCurrency,
  inputLeftIcon,
  inputRightIcon,
  inputLeftDropdown,
  inputRightDropdown,
  inputLeftOrientation,
  inputRightOrientation,
  inputLeftPlaceholder,
  inputRightPlaceholder,
  inputLeftPromo,
  inputRightPromo,
  inputLeftInfoIcon,
  inputRightInfoIcon,
}) => {
  const [inputLeftValue, setInputLeftValue] = useState("");
  const [inputRightValue, setInputRightValue] = useState("");

  const handleInputChange = (value) => {
    setInputLeftValue(value);
    setInputRightValue(value);
  };

  return (
    <div className="wallet-input-row">
      <WalletInput
        currency={inputLeftCurrency}
        dropdown={inputLeftDropdown}
        orientation={inputLeftOrientation}
        icon={inputLeftIcon}
        placeholder={inputLeftPlaceholder}
        promo={inputLeftPromo}
        info={inputLeftInfoIcon}
        handleInputChange={handleInputChange}
        inputValue={inputLeftValue}
      />
      <img
        src={ExchangeIcon}
        alt="Exchange icon"
        className="wallet-input-row__icon"
      />
      <WalletInput
        currency={inputRightCurrency}
        dropdown={inputRightDropdown}
        icon={inputRightIcon}
        orientation={inputRightOrientation}
        placeholder={inputRightPlaceholder}
        promo={inputRightPromo}
        info={inputRightInfoIcon}
        handleInputChange={handleInputChange}
        inputValue={inputRightValue}
      />
    </div>
  );
};

export default WalletInputRow;
