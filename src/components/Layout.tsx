import React, { useContext } from "react";
import { ChildrenProps, ThemeContext } from "../providers/ThemeProvides";

import cn from "classnames";

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className={cn("layout", {
        dark: isDark,
      })}>
      {children}
    </div>
  );
};

export default Layout;
