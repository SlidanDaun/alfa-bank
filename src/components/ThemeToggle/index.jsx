import React, { useEffect } from "react";
import style from "./index.module.css";
import useThemeStore from "../themeStore.jsx";

const ThemeToggle = (T) => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className={style.switchContainer}>
      <label className={style.switch}>
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        <span className={style.slider}>
          <span className={style.iconSun}></span>
          <span className={style.iconMoon}></span>
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;
