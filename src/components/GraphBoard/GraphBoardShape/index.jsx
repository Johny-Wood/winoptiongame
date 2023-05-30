import React from "react";
import "./index.scss";
import screenBg from "@/assets/screen-bg.svg";

const GraphBoardShape = () => {
  return (
    <img src={screenBg} alt="" className="graph-board-shape" />
    // {/* <div */}
    // {/*   className="graph-board-shape" */}
    // {/*   style={{ backgroundImage: "url(/assets/screen-bg.svg)" }} */}
    // {/* ></div> */}
  );
};

export default GraphBoardShape;
