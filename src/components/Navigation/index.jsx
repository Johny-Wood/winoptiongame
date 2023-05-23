import React from "react";
import "./index.scss";
import LanguageChanger from "../LanguageChanger";
import BurgerMenu from "./BurgerMenu";

const Navigation = () => {
  return (
    <nav className="navigation">
      <LanguageChanger />
      <BurgerMenu />
    </nav>
  );
};

export default Navigation;
