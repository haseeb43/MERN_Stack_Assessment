import axiosClient from "..";

class UserApi {
  static register(data) {
    return axiosClient.post("/api/v1/users/register", data);
  }
  static login(data) {
    return axiosClient.post("/api/v1/users/login", data);
  }
  static logout() {
    return axiosClient.post("/api/v1/users/logout");
  }
  static refresh_token() {
    return axiosClient.post("/v1/users/refresh-token");
  }
}

export default UserApi;
