import React from "react";
import "./index.scss";
import Chart from "./Chart";

const Graph = () => {
  return (
    <div className="graph">
      <Chart width={740} height={304} />
    </div>
  );
};

export default Graph;
