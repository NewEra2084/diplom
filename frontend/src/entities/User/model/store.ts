import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { User, useUser } from "./types";

export const UserStore = create<useUser>()(
  devtools((set, get) => ({
    user: null,
    points: 0,
    setUser: (data: User) => {
      set((prev) => ({ ...prev, user: data }));
    },
    getUser: () => get().user,
    setPoints: (data: number) => {
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
