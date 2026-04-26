import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  theme: "light" | "dark";
  switchTheme: (variant: "dark" | "light" | "system") => void;
}

export const getSystemTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const useTheme = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "light",
      switchTheme: (variant) => {
        let newTheme: "light" | "dark";
        if(variant === get().theme){
          return;
        }

        if (variant === "system") {
          newTheme = getSystemTheme();
        } else {
          newTheme = variant;
        }

        // Обновляем DOM сразу
        if (newTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }

        set({ theme: newTheme });

        (async () => {
          const { setThemeCookie } = await import("../ui/SetThemeCookie");
          await setThemeCookie(newTheme);
        })();
      },
    }),
    {
      name: "theme-storage", // ключ для localStorage (fallback если не куки)
    },
  ),
);
