import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

let options = {
  baseURL: API_URL,
};

const axiosClient = axios.create(options);

// Add a response interceptor
axiosClient.interceptors.request.use(
  function (response) {
    if (localStorage.getItem("token")) {
      response.headers.Authorization = localStorage.getItem("token");
    }

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    if (error.response.status === 401) {
      //   store.dispatch(
      //     setAuthData({
      //       currentUser: null,
      //       token: null,
      //     })
      //   );
      // Need to logout here
      return Promise.reject(error);

    } else if (error.response.status === 422) {
      return Promise.reject(error);
    }
  }
);

export default axiosClient;
