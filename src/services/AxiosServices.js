import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getHome() {
    return apiClient.get("/home.json");
  },
  getProductos() {
    return apiClient.get("/equipos.json");
  },
  postOrdenProce(orden) {
    return apiClient.post(`/orderprocessreq.json`, orden);
  },
  respOrdenProce() {
    return apiClient.get("/orderprocessresp.json");
  },
};
