import React from "react";
import "./index.scss";
import Logo from "../Logo";
import Navigation from "../Navigation";
import Wallet from "../Wallet";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__wallet">
        <Wallet />
      </div>
      <div className="header__navigation">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
