import React, { useEffect } from "react";
import "./index.scss";
import Chart from "./Chart";
import GamesLastResults from "./GamesLastResults";
import { useDispatch } from "react-redux";
import getLastGamesResults from "../../../../api/handlers/getLastGamesResults";
import { setLastGamesResults } from "../../../../store/slices/lastGamesResultsSlice";

const Graph = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await getLastGamesResults();

      dispatch(setLastGamesResults(res));
    })();
  }, []);

  return (
    <div className="graph">
      <Chart width={740} height={304} />
      <GamesLastResults />
    </div>
  );
};

export default Graph;
