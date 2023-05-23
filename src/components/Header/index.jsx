import React from "react";
import "./index.scss";
import Logo from "../Logo";
import LanguageChanger from "../LanguageChanger";
import BurgerMenu from "../Navigation/BurgerMenu";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
