import React, {
  useEffect,
  useMemo,
  useState,
} from "react";
import { getStorageTheme } from "../../utils";
import ThemeContext from "./ThemeContext";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getStorageTheme("light-theme"));

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  /**
   * Toggles app theme - light or dark
   */
  const toggleTheme = (currentTheme) => {
    let theme = currentTheme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(theme);
  };

  const api = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={api}>{children}</ThemeContext.Provider>;
}
