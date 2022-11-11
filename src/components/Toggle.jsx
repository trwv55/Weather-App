import React, { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvides";

const Toggle = () => {
  const { setIsDark, isDark } = useContext(ThemeContext);
  return (
    <label className='wrapper' htmlFor='toggler'>
      <input
        id='toggler'
        type='checkbox'
        onClick={() => setIsDark(!isDark)}
        checked={isDark}
        readOnly
      />
      <span className='slider' />
      <span className='wave' />
    </label>
  );
};

export default Toggle;
