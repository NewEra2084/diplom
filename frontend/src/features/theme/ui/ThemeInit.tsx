"use client";

import { useEffect } from "react";
import { useTheme, getSystemTheme } from "@/features/theme/model/use-theme";

export function ThemeInitializer({
  serverTheme,
}: {
  serverTheme: "light" | "dark";
}) {
  const theme = useTheme((store) => store.theme);
  console.log(serverTheme, theme);

  useEffect(() => {
    // Если на сервере уже есть кука — синхронизируем стор
    if (serverTheme && theme !== serverTheme) {
      if (serverTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      useTheme.setState({ theme: serverTheme });
    }
    // Если куки нет — определим через систему
    else if (!serverTheme) {
      const systemTheme = getSystemTheme();
      if (systemTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
      useTheme.setState({ theme: systemTheme });
    }
  }, [serverTheme, theme]);

  return null;
}
