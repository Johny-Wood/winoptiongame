import axiosClient from "../../index.js";

const getWallet = () => {
  return axiosClient
    .get(import.meta.env.PROD ? "/mockProd/user.json" : "/mock/user.json")
    .then((res) => res.wallet);
};

export default getWallet;
