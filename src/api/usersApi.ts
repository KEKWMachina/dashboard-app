import type { UserInterface } from "../interfaces/UserInterface";
import { api } from "./axiosConfig";

export const usersApi = {
  getAll: async (): Promise<UserInterface[]> => {
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
