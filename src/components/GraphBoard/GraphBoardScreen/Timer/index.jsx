import React from "react";
import "./index.scss";
// import timerBg from "@/assets/timer-bg.svg";

const Timer = () => {
  return (
    <div className="game-timer">
      <div className="game-timer__container">
        <span className="game-timer__time-left">0</span>
        <span className="game-timer__units">sec</span>
      </div>
    </div>
  );
};

export default Timer;
