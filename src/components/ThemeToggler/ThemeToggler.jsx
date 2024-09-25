import React from "react";
import useThemeContext from "../../context/ThemeProvider/useThemeContext";

/**
 * Toggles dark/light theme
 */
export default function ThemeToggler() {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <button
      data-test="theme-toggle-button"
      className="btn btn-tertiary"
      onClick={() => toggleTheme(theme)}
    >
      {`${theme === "light-theme" ? "dark mode" : "light mode"}`}
    </button>
  );
}