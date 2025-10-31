import { api } from "./axiosConfig";
import type { User } from "../interfaces/User.interface";

export const usersApi = {
  getAll: async (): Promise<User[]> => {
    const response = await api.request({
      url: "/users",
      method: "GET",
      params: {
        limit: 0
      },
      withCredentials: false,
    });

    return response.data.users;
  },
};
