import React from "react";
import "./index.scss";
import LanguageChanger from "../LanguageChanger";
import BurgerMenu from "./BurgerMenu";
import UserProfileBtn from "../UserProfile/UserProfileBtn";

const Navigation = () => {
  return (
    <nav className="navigation">
      <LanguageChanger />
      <div className="navigation__menu">
        <BurgerMenu />
        <UserProfileBtn />
      </div>
    </nav>
  );
};

export default Navigation;
