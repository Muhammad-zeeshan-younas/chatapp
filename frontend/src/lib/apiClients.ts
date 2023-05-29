import axios from "axios";
import { config } from "./config";
import { AppError } from "./AppError";

const redirectToLoginPage = () => {
  window.location.assign(
    `${window.location.protocol}//${window.location.host}/signin`
  );
  return;
};

const checkIfAtLoginPage = () => {
  if (
    window.location.href ===
    `${window.location.protocol}//${window.location.host}/signin`
  ) {
    return true;
  }

  return false;
};

const checkIfLoggedOut = (response: any) => {
  if (response?.status === 401) {
    return true;
  }
  return false;
};

const throwError = (response: any) => {
  const message = response.data.message
    ? response.data.message
    : "Something went wrong, please try again later";

  if (checkIfLoggedOut(response)) {
    if (checkIfAtLoginPage() == false) {
      redirectToLoginPage();
    }
  }

  if (checkIfAtLoginPage()) {
    if (response?.data?.message) {
      throw new AppError(message);
    } else {
      return;
    }
  }

  throw new AppError(message);
};

const axiosClient = axios.create({
  baseURL: config().backend_url,
  headers: {
    "Content-Type": "application/json",
  },
});

const checkResponseStatus = (response: any, error: boolean = false) => {
  if (response == undefined) {
    throwError(response);
  }

  if (error) {
    throwError(response);
  }
};

axiosClient.interceptors.response.use(
  (response) => {
    if (response.headers.uid)
      sessionStorage.setItem("uid", response.headers.uid);
    if (response.headers["access-token"])
      sessionStorage.setItem("accessToken", response.headers["access-token"]);
    if (response.headers.client)
      sessionStorage.setItem("client", response.headers.client);
    if (response.headers.expiry)
      sessionStorage.setItem("expiry", response.headers.expiry);
    if (response.headers["token-type"])
      sessionStorage.setItem("tokenType", response.headers["token-type"]);

    checkResponseStatus(response);

    return response;
  },

  (error) => {
    let response = error.response;
    checkResponseStatus(response, true);

    return Promise.reject(error);
  }
);

axiosClient.interceptors.request.use((request) => {
  if (!request?.headers) return request;

  request.headers.uid = sessionStorage.getItem("uid") || "";
  request.headers["access-token"] = sessionStorage.getItem("accessToken") || "";
  request.headers.client = sessionStorage.getItem("client") || "";
  request.headers.expiry = sessionStorage.getItem("expiry") || "";
  request.headers.tokenType = sessionStorage.getItem("tokenType") || "Bearer";

  return request;
});

export default axiosClient;
