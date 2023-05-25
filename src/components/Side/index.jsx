import React from "react";
import "./index.scss";
import clsx from "clsx";
import PulSize from "./PulSize";
import GamersList from "./GamersList";

const Side = ({ color }) => {
  const styles = {
    backgroundImage: clsx(
      color === "green" ? "url(/side-green.svg)" : "url(/side-red.svg)"
    ),
  };
  return (
    <div className="team-side" style={styles}>
      <div className="team-side__header">
        <PulSize direction="up" />
      </div>
      <div className="team-side__gamers">
        <GamersList />
      </div>
    </div>
  );
};

export default Side;
