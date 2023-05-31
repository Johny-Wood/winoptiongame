import React from "react";
import "./index.scss";
import dropdownIcon from "@/assets/dropdown.svg";
import clsx from "clsx";
import WalletInputButton from "./WalletInputButton";

const WalletInput = ({
  currency,
  dropdown,
  icon,
  placeholder,
  promo,
  orientation,
  info,
  handleInputChange,
  inputValue,
}) => {
  return (
    <div
      className={clsx(
        "wallet-input",
        orientation && "wallet-input--reverse",
        promo && "wallet-input--align-left"
      )}
    >
      {(currency || info || dropdown || promo) && (
        <span className="wallet-input__container">
          {currency && (
            <img src={icon} alt="" className="wallet-input__currency-icon" />
          )}
          {!promo && currency}
          {promo && <WalletInputButton />}
          {info && (
            <span className="wallet-input__info">
              <img
                src={info}
                alt="Info icon"
                className="wallet-input__info-icon"
              />
            </span>
          )}
          {dropdown && (
            <button className="wallet-input__dropdown-btn">
              <img src={dropdownIcon} alt="dropdownIcon" />
            </button>
          )}
        </span>
      )}
      <input
        className="wallet-input__input"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
};

export default WalletInput;
