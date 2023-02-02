import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

const requestApi = (finalUrl, email, password) => {
  return axios
    .post(apiUrl + finalUrl, { email, password }, { withCredentials: true })
    .then((response) => response.data);
};

export const loginUser = (email, password) => {
  return requestApi("user/login", email, password);
};
