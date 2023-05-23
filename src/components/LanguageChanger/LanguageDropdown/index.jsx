import React, { useState } from "react";
import "./index.scss";
import engImg from "@/assets/eng.jpg";

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="language-dropdown">
      <div className="language-dropdown__selected">
        <img
          className="language-dropdown__lang-img"
          src={engImg}
          width={28}
          height={19}
          alt="Language"
        />
      </div>
      <button className="language-dropdown__btn" onClick={() => setOpen(!open)}>
        <svg
          width="14"
          height="11"
          viewBox="0 0 14 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.16842 9.78854C7.57176 10.6479 6.30078 10.6479 5.70413 9.78855L1.196 3.29541C0.505409 2.30073 1.21724 0.939941 2.42815 0.939941L11.4444 0.939941C12.6553 0.939941 13.3671 2.30073 12.6765 3.29541L8.16842 9.78854Z"
            fill="white"
            stroke="black"
          />
        </svg>
      </button>

      <ul
        className={
          open
            ? "language-dropdown__list language-dropdown__list--active"
            : "language-dropdown__list"
        }
      >
        <li className="language-dropdown__item"></li>
      </ul>
    </div>
  );
};

export default LanguageDropdown;
