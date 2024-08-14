import style from "./index.module.css";
import redArrow from '../../assets/icons/redArrowIcon.svg'
import { useState } from "react";

export const Tab = ({ label, active, onClick }) => {
  return (
    <div className={`${style.tab} ${active ? style.active : ""}`} onClick={onClick}>
      <span className={style.label}>{label}</span>
      <img src={redArrow} className={style.icon}></img>
    </div>
  );
};
