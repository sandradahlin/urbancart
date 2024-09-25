import React from "react";
import { useLocation } from "react-router-dom";
import useThemeContext from "../../context/ThemeProvider/useThemeContext";
import { ButtonTertiary, StyledLink } from "../App.styled";

/**
 * Toggles dark/light theme
 */
export default function ThemeToggler() {
  const { toggleTheme, theme } = useThemeContext();
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <ButtonTertiary
      data-test="theme-toggle-button"
      className="btn btn-tertiary"
      onClick={() => toggleTheme(theme)}
      landing={isLandingPage}
    >
      {`${theme === "light-theme" ? "dark mode" : "light mode"}`}
    </ButtonTertiary>
  );
}
