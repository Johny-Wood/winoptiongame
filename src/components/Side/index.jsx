import React from "react";
import "./index.scss";
import clsx from "clsx";
import PulSize from "./PulSize";
import GamersList from "./GamersList";
import PulPayout from "./PulPayout";
import PulButton from "./PulButton";

const Side = ({ direction, gamers }) => {
  // const styles = {
  //   backgroundImage: clsx(
  //     direction === "up"
  //       ? "url(assets/side-green.svg)"
  //       : "url(assets/side-red.svg)"
  //   ),
  // };
  return (
    <div className="team-side">
      <img
        src={
          direction === "up" ? "assets/side-green.svg" : "assets/side-red.svg"
        }
        alt="Background"
        className="team-side__bg-image"
      />
      <div className="team-side__container">
        <div className="team-side__header">
          <PulSize direction={direction} />
        </div>
        <div className="team-side__gamers">
          <GamersList gamers={gamers} />
        </div>
        <div className="team-side__footer">
          <PulPayout direction={direction} />
          <div className="team-side__pul-btn">
            <PulButton direction={direction} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
