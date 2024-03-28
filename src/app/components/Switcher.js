"use client"
import React, { useState } from 'react';
import useDarkSide from '../customhooks/useDarkmode.js'
import { DarkModeSwitch } from 'react-toggle-dark-mode';


function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={56} />
      </div>
    </>
  );
}

export default Switcher;