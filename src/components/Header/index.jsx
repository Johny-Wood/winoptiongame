import React from "react";
import "./index.scss";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
