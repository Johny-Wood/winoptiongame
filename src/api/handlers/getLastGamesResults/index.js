import axiosClient from "../../index.js";

const getLastGamesResults = () => {
  return axiosClient.get("/mock/last-games-results.json");
};

export default getLastGamesResults;
