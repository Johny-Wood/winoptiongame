import axiosClient from "../../index.js";

const getUser = () => {
  return axiosClient.get(
    import.meta.env.PROD ? "/mockProd/user.json" : "/mock/user.json"
  );
};

export default getUser;
