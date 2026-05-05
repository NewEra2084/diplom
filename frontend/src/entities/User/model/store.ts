import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { useUser } from "./types";
import { fetchUserData, fetchUserPoints } from "../api/endpoints";

export const UserStore = create<useUser>()(
  devtools((set, get) => ({
    user: null,
    points: 0,
    setUser: async () => {
      const data = await fetchUserData();
      set((prev) => ({ ...prev, user: data }));
    },
    getUser: () => get().user,
    setPoints: async () => {
      const data = await fetchUserPoints();
      set({ points: data });
    },
    getPoints: () => get().points,
    logout: () => {
      set(() => ({ user: null }));
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  })),
);
