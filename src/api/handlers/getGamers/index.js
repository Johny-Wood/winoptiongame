import axiosClient from "../../index.js";

const getGamers = () => {
  return axiosClient.get(
    import.meta.env.PROD ? "/mockProd/gamers.json" : "/mock/gamers.json"
  );
};

export default getGamers;
