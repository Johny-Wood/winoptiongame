import React from "react";
import "./index.scss";
import LastResultsItem from "./LastResultsItem";
import { useSelector } from "react-redux";

const GamesLastResults = () => {
  const results = useSelector((state) => state.lastGamesResults);

  return (
    <div className="games-last-results">
      <ul className="games-last-results__list">
        {results.map((result) => (
          <li className="games-last-results__item" key={result.id}>
            <LastResultsItem
              initialRate={result.initialRate}
              finalRate={result.finalRate}
              direction={result.direction}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GamesLastResults;
