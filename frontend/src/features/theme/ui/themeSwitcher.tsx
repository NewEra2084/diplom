"use client"
import { useEffect } from "react";
import { useTheme } from "../model/use-theme";

export const ThemeSwitcher = ({ }) => {
    const { theme, switchTheme } = useTheme();
    const currentTheme = useTheme(state => state.getTheme)
    useEffect(() => {
        if (localStorage.getItem("theme") == null) {
            localStorage.setItem("theme", JSON.stringify({state: {theme: "light"}}));
        } 
        const c = JSON.parse(localStorage.getItem("theme")!)["state"]["theme"]
            if(c === 'dark') {
                document.documentElement.classList.add('dark');
            }
        }, []);
  return (
    <button onClick={switchTheme}>
        {theme}
    </button>
  );
};
