import type { UserInterface } from "../interfaces/UserInterface";
import { api } from "./axiosConfig";

export const usersApi = {
  get: async (): Promise<UserInterface[]> => {
    const response = await api.request({
      url: "/users",
      method: "GET",
      withCredentials: false,
    });

    return response.data.users;
  },
};
