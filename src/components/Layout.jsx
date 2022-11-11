import React, { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvides";

import cn from "classnames";

const Layout = ({ children }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className={cn("layout", {
        dark: isDark === true,
      })}>
      {children}
    </div>
  );
};

export default Layout;
