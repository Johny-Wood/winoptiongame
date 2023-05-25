import React from "react";
import "./index.scss";
import LanguageChanger from "../LanguageChanger";
import BurgerMenu from "./BurgerMenu";
import UserProfile from "../UserProfile";

const Navigation = () => {
  return (
    <nav className="navigation">
      <LanguageChanger />
      <div className="navigation__menu">
        <BurgerMenu />
        <UserProfile />
      </div>
    </nav>
  );
};

export default Navigation;
