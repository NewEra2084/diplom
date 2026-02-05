import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
    theme: "light" | "dark";
    switchTheme: () => void;
    getTheme: () => "light" | "dark";
}

export const useTheme = create<ThemeState>()(
    persist(
        (set, get) => ({
            theme: "light",
            switchTheme: () =>
            {
                set((state) => ({
                    theme: state.theme === "light" ? "dark" : "light",
                }));
                get().theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
            },
            getTheme: () => get().theme,
        }),
        { name: "theme" },
    ),
);