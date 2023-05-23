import axiosClient from "../../index.js";

const getUser = () => {
  return axiosClient.get("/src/mock/user.json");
};

export default getUser;
