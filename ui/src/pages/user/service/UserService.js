import { UserAPI } from "../../../api/axios";

export const registerUser = (userData) => {
  return UserAPI.post("/register", userData);
};

export const loginUser = (userData) => {
  return UserAPI.post("/login", userData);
};