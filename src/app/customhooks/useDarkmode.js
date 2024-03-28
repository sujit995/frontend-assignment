import { useEffect, useState } from 'react';

export default function useDarkSide() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('theme');
    } else {
      return 'light';
    }
  });

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);

      // Save theme to local storage
      window.localStorage.setItem('theme', theme);
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
