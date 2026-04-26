'use client';

import { useEffect } from 'react';

export function ThemeInitializer({ theme }: { theme: string | undefined }) {
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return null;
}