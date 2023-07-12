import axios from "axios";

export const axiosInstancex = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
