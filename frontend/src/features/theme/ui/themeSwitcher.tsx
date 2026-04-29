"use client";
import { ReactNode } from "react";
import { useTheme } from "../model/use-theme";
import { Moon, Sun, SunMoon } from "lucide-react";

export const ThemeSwitcher = ({
  className,
  variant = "settings",
}: {
  className?: string;
  variant?: "footer" | "settings";
}) => {
  const switchTheme = useTheme((state) => state.switchTheme);

  return (
    <ul
      className={`flex lg:flex-row gap-3 lg:gap-0 justify-between ${variant==="footer" ? "border-2 rounded-lg" : "flex-col"} ${className}`}
    >
      <ThemeSwitcherItem
        theme="dark"
        variant={variant}
        onClick={() => {
          switchTheme("dark");
        }}
      >
        <Moon />
        <h6 className={`${variant === "footer" && "hidden"}`}>Тёмная</h6>
      </ThemeSwitcherItem>
      <ThemeSwitcherItem
        theme="light"
        variant={variant}
        onClick={() => {
          switchTheme("light");
        }}
      >
        <Sun />
        <h6 className={`${variant === "footer" && "hidden"}`}>Светлая</h6>
      </ThemeSwitcherItem>
      <ThemeSwitcherItem
        theme="system"
        variant={variant}
        onClick={() => {
          switchTheme("system");
        }}
      >
        <SunMoon />{" "}
        <h6 className={`${variant === "footer" && "hidden"}`}>Системная</h6>
      </ThemeSwitcherItem>
    </ul>
  );
};

const ThemeSwitcherItem = ({
  onClick,
  children,
  theme,
  variant,
}: {
  children: ReactNode;
  onClick: () => void;
  theme: string;
  variant: "footer" | "settings";
}) => {
  const themeMain = useTheme((state) => state.theme);
  if (variant == "settings") {
    return (
      <li
        onClick={onClick}
        className={`${themeMain == theme ? "bg-accent dark:bg-dark-secondary dark:border-dark-accent" : ""} flex flex-col gap-2 p-2 lg:p-8 lg:w-36 border-2 justify-center items-center rounded-lg`}
      >
        {children}
      </li>
    );
  } else {
    return (
      <li
        onClick={onClick}
        className={`${themeMain == theme ? "bg-accent dark:bg-dark-main" : ""} flex flex-col gap-2 p-2 w-fit justify-center items-center rounded-lg`}
      >
        {children}
      </li>
    );
  }
};
