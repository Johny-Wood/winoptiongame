import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { setGamers } from "../../../store/slices/gamersSlice";
import Gamer from "../../Gamer";
import getGamers from "../../../api/handlers/getGamers";
// import userAvatar from "@/assets/avatar.png";
// import franceIcon from "@/assets/france.jpg";
// import boostX5 from "@/assets/boost-x5.svg";
// import awardStar from "@/assets/award-star.svg";

const GamersList = () => {
  const gamers = useSelector((state) => state.gamers);
  const dispatch = useDispatch();

  useEffect(() => {
    const requestGamers = (async () => {
      const response = await getGamers();

      dispatch(setGamers(response));
    })();
  }, []);

  return (
    <div className="gamers-list">
      {gamers.map((gamer) => (
        <Gamer
          avatar={gamer.userAvatar}
          country={gamer.country}
          boost={gamer.boost}
          award={gamer.award}
          key={gamer.userId}
        />
      ))}
      {/* <Gamer */}
      {/*   avatar={userAvatar} */}
      {/*   countryIcon={franceIcon} */}
      {/*   boostIcon={boostX5} */}
      {/*   awardIcon={awardStar} */}
      {/* /> */}
    </div>
  );
};

export default GamersList;
