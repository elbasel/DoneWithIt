import apiClient from "./client";

const register = (token) => {
  apiClient.post("/expoPushTokens", {
    token,
  });
};

export default {
  register,
};
