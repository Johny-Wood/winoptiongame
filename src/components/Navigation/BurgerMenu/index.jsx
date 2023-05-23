import React from "react";
import BurgerBtn from "./BurgerBtn";
import "./index.scss";

const BurgerMenu = () => {
  return (
    <div className="burger-menu">
      <BurgerBtn />

      <ul className="burger-menu__list"></ul>
    </div>
  );
};

export default BurgerMenu;
