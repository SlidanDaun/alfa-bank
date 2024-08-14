import style from "./index.module.css";
import { useState } from "react";
import { Tab } from "../Tab";
import { SliderComponent } from "../SliderComponent";

import live from "../../assets/logos/live.svg";
import rostics from "../../assets/logos/rostics.svg";
import bk from "../../assets/logos/bk.svg";
import samokat from "../../assets/logos/samokat.svg";
import mc from "../../assets/logos/mc.svg";
import dodo from "../../assets/logos/dodo.svg";
import vkus from "../../assets/logos/vkus.svg";
import surf from "../../assets/logos/surf.svg";
import potato from "../../assets/logos/potato.svg";

import lamoda from "../../assets/logos/lamoda.svg";
import ozon from "../../assets/logos/ozon.svg";
import republic from "../../assets/logos/republic.svg";
import apple from "../../assets/logos/apple.svg";
import befree from "../../assets/logos/befree.svg";
import wb from "../../assets/logos/wb.svg";
import e from "../../assets/logos/e.svg";
import ymarket from "../../assets/logos/ymarket.svg";
import magnit from "../../assets/logos/magnit.svg";

import karpo from "../../assets/logos/karpo.svg";
import flo from "../../assets/logos/flo.svg";
import leo from "../../assets/logos/leo.svg";
import black from "../../assets/logos/black.svg";
import o from "../../assets/logos/o.svg";
import gorod from "../../assets/logos/gorod.svg";
import qvoe from "../../assets/logos/qvoe.svg";
import publica from "../../assets/logos/public.svg";
import factory from "../../assets/logos/factoty.svg";
import { Carousel } from "../Сarousel";

export const StockCard = () => {
  const shoppingLogos = [
    lamoda,
    ozon,
    republic,
    apple,
    befree,
    wb,
    e,
    ymarket,
    magnit,
  ];
  const foodLogos = [live, rostics, bk, samokat, mc, dodo, vkus, surf, potato];
  const eduLogos = [karpo, flo, leo, black, o, gorod, qvoe, publica, factory];
  const funLogos = [];

  const shoppingClick = () => {
    window.open("https://google.com", "_blank");
  };

  const [activeTab, setActiveTab] = useState("Еда");
  const tabs = ["Шоппинг", "Образование", "Еда", "Развлечения"];
  const content = {
    Шоппинг: (
      <div className={style.showAll} onClick={shoppingClick}>
        Посмотреть все
      </div>
    ),
    Образование: (
      <div className={style.showAll} onClick={shoppingClick}>
        Посмотреть все
      </div>
    ),
    Еда: (
      <div className={style.showAll} onClick={shoppingClick}>
        Посмотреть все
      </div>
    ),
    Развлечения: (
      <div className={style.showAll} onClick={shoppingClick}>
        Посмотреть все
      </div>
    ),
  };

  const categoriesLogos = {
    Шоппинг: shoppingLogos,
    Образование: eduLogos,
    Еда: foodLogos,
    Развлечения: funLogos,
  };

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
  };

  return (
    <div className={style.card}>
      <h1>Акции у партнёров</h1>
      <div className={style.categories}>
        <div className="tabsContainer">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              label={tab}
              active={tab === activeTab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>
        <div className="tabsContent">
          {content[activeTab]}
          {/* <SliderComponent logos={categoriesLogos[activeTab]} /> */}
          <Carousel logos={categoriesLogos[activeTab]} />
        </div>
      </div>
      <div className="news"></div>
    </div>
  );
};
