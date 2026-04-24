import { getTemplate } from "@/shared/api/client";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { User, useUser } from "../types";

export const useUserStore = create<useUser>()(
  devtools((set) => ({
    user: null,
    fetchUser: async () => {
      const response = await getTemplate("/employee/get_employee_data");
      const data = response.data as User;
      set({ user: data });
    },
    logout: ()=>{
      set((state)=> ({user: null}))
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  })),
);
