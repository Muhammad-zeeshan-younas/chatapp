import axiosClient from "../apiClients";

const create = (data: object) => {
  return axiosClient.post("/auth", data);
};

const authenticate = (data: object) => {
  return axiosClient.post("/auth/sign_in", data);
};

const logout = () => {
  return axiosClient.delete("/auth/sign_out");
};

const getUser = () => {
  return axiosClient.get("/user");
};

export default {
  create,
  authenticate,
  logout,
  getUser,
};
