import React, { createContext, Dispatch, SetStateAction, useMemo, useState } from "react";

type TypeSetState<T> = Dispatch<SetStateAction<T>>

export type ThemeContextType = {
  isDark: boolean
  setIsDark?: TypeSetState<boolean>
}

export type ChildrenProps = {
  children: React.ReactNode
}


export const ThemeContext = createContext<ThemeContextType>({ isDark: false });

export const ThemeProvider: React.FC<ChildrenProps> = ({ children }) => {
  const getTheme = () => {
  const storageVal = window.localStorage.getItem("theme")
    if(storageVal) {
      return JSON.parse(storageVal)
    } else return null
  }
  
  const [isDark, setIsDark] = useState<boolean>(getTheme);
  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
