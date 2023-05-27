import axiosClient from "../../index.js";

const getGameSession = () => {
  return axiosClient.get(
    import.meta.env.PROD
      ? "/mockProd/game-session.json"
      : "/mock/game-session.json"
  );
};

export default getGameSession;
