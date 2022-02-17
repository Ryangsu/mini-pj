import axios from "axios";

export const instance = axios.create({
  baseURL: "http://3.38.193.111",
  // baseURL: "http://localhost:3000/",

  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json, text/plain,*/*",
  },
  
});

instance.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem("token")}`;

export const apis = {
  createUser: (user) => instance.post("/api/signup", user),
  createLogin: (user) => instance.post("/api/login", user),
  getUserInfo: () => instance.get("/api/auth"),
  postWrite: (items) => instance.post("/api/items", items),
  imageUpload: (image) => instance.post("/api/imgs", image),
  // postWrite: (items) => instance.post("/api/items", items),
  postGet : (items) => instance.get("/api/items/", items),
  // postGetOne : (items) => instance.get(`/api/items/${}`),
  deletePost: () => instance.delete("/api/items/:itemid"),
};