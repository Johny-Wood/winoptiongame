import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${
    import.meta.env.PROD
      ? "https://johny-wood.github.io/winoptiongame/"
      : "http://localhost:5173/winoptiongame"
  }`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    let res = error.response;
    console.error(`Looks like there was a problem. Status Code: ` + res.status);
    return Promise.reject(error);
  }
);

export default axiosClient;
