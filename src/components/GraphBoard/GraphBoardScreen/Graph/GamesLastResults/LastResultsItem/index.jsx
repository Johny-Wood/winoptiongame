import React, { useState } from "react";
import "./index.scss";
import clsx from "clsx";

const LastResultsItem = ({ initialRate, finalRate, direction }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={clsx(
        "last-results-item",
        direction === "down" && "last-results-item--direction-down",
        active && "last-results-item--active"
      )}
    >
      <div className="last-results-item__info">
        <div className="last-results-item__block">
          <span className="last-results-item__title">Начальная ставка</span>
          <span className="last-results-item__value">{initialRate}</span>
        </div>
        <div className="last-results-item__block">
          <span className="last-results-item__title">Конечная ставка</span>
          <span className="last-results-item__value last-results-item__value--red">
            {finalRate}
          </span>
        </div>
      </div>
      <div
        className="last-results-item__container"
        onClick={() => setActive((active) => !active)}
      >
        <span className="last-results-item__icon">
          <svg
            width="23"
            height="17"
            viewBox="0 0 23 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.57559 2.16873C10.1587 0.459376 12.8619 0.459379 14.445 2.16874L21.2645 9.53202C23.6361 12.0927 21.82 16.25 18.3298 16.25H4.69082C1.20064 16.25 -0.615466 12.0927 1.75609 9.53202L8.57559 2.16873Z"
              fill="#5ED9B2"
            />
          </svg>
        </span>
        <span className="last-results-item__percentage">250%</span>
      </div>
    </div>
  );
};

export default LastResultsItem;
