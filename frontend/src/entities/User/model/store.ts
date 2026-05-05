import { getTemplate } from "@/shared/api/client";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { User, useUser } from "./types";

export const useUserStore = create<useUser>()(
  devtools((set) => ({
    user: null,
    points: 0,
    fetchUser: async () => {
      const response = await getTemplate("/employee/get_employee_data");
      const data = response.data as User;
      set((prev) => ({ ...prev, user: data }));
    },
    getPoints: async () => {
      const response = await getTemplate("/employee/get_points");
      const data = response.data as { points: number };
      set({ points: data.points });
    },
    logout: () => {
      set(() => ({ user: null }));
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  })),
);
