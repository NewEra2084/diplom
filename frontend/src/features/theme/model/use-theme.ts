import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  theme: "light" | "dark";
  switchTheme: (variant: "dark" | "light" | "system") => void;
  getTheme: () => "light" | "dark";
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
        if (get().theme === variant) {
          return;
        }
        if (variant === "system") {
          set(() => ({
            theme: getSystemTheme(),
          }));
        } else {
          set(() => ({
            theme: variant,
          }));
        }

        if (get().theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      },
      getTheme: () => get().theme,
    }),
    { name: "theme" },
  ),
);
