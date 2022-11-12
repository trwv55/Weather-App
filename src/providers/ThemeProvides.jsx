import React, { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext({ isDark: false });

export const ThemeProvider = ({ children }) => {
  const getTheme = JSON.parse(window.localStorage.getItem("theme")) || false;
  const [isDark, setIsDark] = useState(getTheme);
  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
