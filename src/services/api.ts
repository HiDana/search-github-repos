import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
  // xsrfCookieName: "csrftoken",
  // xsrfHeaderName: "X-CSRFToken",
  // withCredentials: true,
});
