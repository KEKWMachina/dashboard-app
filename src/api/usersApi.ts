import { api } from "./axiosConfig";

export const usersApi = {
  get: async () => {
    const response = await api.request({
      url: "/users",
      method: "GET",
      withCredentials: false,
    });

    return response.data;
  },
};
