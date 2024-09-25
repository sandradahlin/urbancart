import React, { useEffect, useState, createContext } from "react";

const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {},
});

export default ThemeContext;
