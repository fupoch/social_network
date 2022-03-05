import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "2960d932-f0c4-4b24-83de-07450ba1b5f6",
  },
});
