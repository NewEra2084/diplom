"use client";
import { ReactNode } from "react";
import { useTheme } from "../model/use-theme";
import { Moon, Sun, SunMoon } from "lucide-react";

export const ThemeSwitcher = ({ className }: { className: string }) => {
  const switchTheme = useTheme((state) => state.switchTheme);

  return (
    <ul className={`flex lg:flex-row flex-col gap-3 lg:gap-0 justify-between ${className}`}>
      <ThemeSwitcherItem
        theme="dark"
        onClick={() => {
          switchTheme("dark");
        }}
      >
        <Moon />
        <h6>Тёмная</h6>
      </ThemeSwitcherItem>
      <ThemeSwitcherItem
        theme="light"
        onClick={() => {
          switchTheme("light");
        }}
      >
        <Sun />
        <h6>Светлая</h6>
      </ThemeSwitcherItem>
      <ThemeSwitcherItem
        theme="system"
        onClick={() => {
          switchTheme("system");
        }}
      >
        <SunMoon /> <h6>Системная</h6>
      </ThemeSwitcherItem>
    </ul>
  );
};

const ThemeSwitcherItem = ({
  onClick,
  children,
  theme,
}: {
  children: ReactNode;
  onClick: () => void;
  theme: string;
}) => {
  const themeMain = useTheme((state) => state.theme);
  return (
    <li
      onClick={onClick}
      className={`${themeMain == theme ? "bg-accent dark:border-dark-accent" : ""} flex flex-col gap-2 p-2 lg:p-8 lg:w-36 border-2 justify-center items-center rounded-lg`}
    >
      {children}
    </li>
  );
};
