import style from "./index.module.css";
import redArrow from "../../assets/icons/redArrowIcon.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import useThemeStore from "../themeStore";

export const Tab = ({ label, active, onClick }) => {
  const isMobileCard = useMediaQuery({ query: '(max-width: 555px)' });
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  return (
    <div
      className={ isDarkMode ? `${style.tabDark} ${active ? style.active : ""}` : `${style.tab} ${active ? style.active : ""}`}
      onClick={onClick}
    >
      <span className={ isDarkMode ? `${style.labelDark} ${active ? style.active : ""}` : style.label} >{label}</span>
      {!isMobileCard && <img src={redArrow} className={ style.icon}></img>}
    </div>
  );
};
