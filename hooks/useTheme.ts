'use client';
import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

export function useTheme(initial: Theme = 'dark') {
  const [theme, setTheme] = useState<Theme>(initial);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = (color: string) => setTheme(theme === 'dark' ? 'light' : 'dark');

  return { theme, setTheme, toggleTheme };
}
