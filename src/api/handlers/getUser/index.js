import axiosClient from "../../index.js";

const getUser = () => {
  return axiosClient.get("/mock/user.json");
};

export default getUser;
