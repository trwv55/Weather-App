import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../providers/ThemeProvides";

const Toggle: React.FC = () => {
  const { setIsDark, isDark } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem("theme", String(isDark));
  }, [isDark]);

  const handleChange = () => {
    if(setIsDark) setIsDark(!isDark)
  }

  return (
    <label className='wrapper' htmlFor='toggler'>
      <input
        id='toggler'
        type='checkbox'
        onClick={handleChange}
        checked={isDark}
        readOnly
      />
      <span className='slider' />
      <span className='wave' />
    </label>
  );
};

export default Toggle;
