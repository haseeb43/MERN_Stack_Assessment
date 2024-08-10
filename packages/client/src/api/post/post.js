import axiosClient from "..";

class BlogPostApi {
  static create_post(data) {
    return axiosClient.post("/api/v1/posts", data);
  }
  static get_all() {
    return axiosClient.get("/api/v1/posts");
  }
  static get_single(id) {
    return axiosClient.get(`/api/v1/posts/${id}`);
  }
  static delete_post(id) {
    return axiosClient.delete(`/api/v1/posts/${id}`);
  }
  static update_post(id, data) {
    return axiosClient.put(`/api/v1/posts/${id}`, data);
  }
}

export default BlogPostApi;
