"use client";
import { useEffect } from "react";
import { useTheme } from "../model/use-theme";

import { Moon, Sun, SunMoon } from "lucide-react";

export const ThemeSwitcher = ({className} : {className:string}) => {
  const { theme, switchTheme } = useTheme();
  useEffect(() => {
    if (localStorage.getItem("theme") == null) {
      localStorage.setItem(
        "theme",
        JSON.stringify({ state: { theme: "light" } }),
      );
    }
    const c = JSON.parse(localStorage.getItem("theme")!)["state"]["theme"];
    if (c === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);
  
  return (
    <ul className={`flex justify-between ${className}`}>
      <li onClick={() => {switchTheme("dark")}} className={`${theme == "dark" ? "bg-accent dark:border-dark-accent" : ""} flex flex-col gap-2 p-8 w-36 border-2 justify-center items-center rounded-lg`}>
        <Moon />
        <h6>Тёмная</h6>
      </li>
      <li onClick={() => {switchTheme("light")}} className={`${theme == "light" ? "bg-dark-accent border-accent dark:border-dark-accent" : ""} flex flex-col gap-2 p-8 w-36 border-2 justify-center items-center rounded-lg`}>
        <Sun />
        <h6>Светлая</h6>
      </li>
      <li onClick={() => {switchTheme("system")}} className={`flex flex-col gap-2 p-8 w-36 border-2 justify-center items-center rounded-lg`}>
        <SunMoon /> <h6>Системная</h6>
      </li>
    </ul>
  );
};
