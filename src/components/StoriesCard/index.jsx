import style from "./index.module.css";
import useThemeStore from '../themeStore';

import { useState } from "react";
import { StorieComponent } from "../StorieComponent";
import "stories-react/dist/index.css";

import storiesPreview1 from "../../assets/stories/storiesPreview1.png";
import storiesPreview2Background from "../../assets/stories/storiesPreview2Background.png";
import bag from "../../assets/stories/storiesPreview2Bag.svg";
import purpleLine from "../../assets/stories/storiesPreview2PurpleLine.svg";
import storiesPreview3 from "../../assets/stories/storiesPreview3.png";

import AmStorie1 from "../../assets/stories/AmStorie1.png";
import AmStorie2 from "../../assets/stories/AmStorie2.png";
import AmStorie3 from "../../assets/stories/AmStorie3.png";

import ShoppingStorie1 from "../../assets/stories/ShoppingStorie1.png";
import ShoppingStorie2 from "../../assets/stories/ShoppingStorie2.png";
import ShoppingStorie3 from "../../assets/stories/ShoppingStorie3.png";

import WeekendStorie1 from "../../assets/stories/WeekendStorie1.png";
import WeekendStorie2 from "../../assets/stories/WeekendStorie2.png";
import WeekendStorie3 from "../../assets/stories/WeekendStorie3.png";

export const StoriesCard = () => {
  const isDarkMode = useThemeStore(state => state.isDarkMode);
  const [isOpen, setIsOpen] = useState(false);

  const AmbassadorImages = [
    {
      type: "image",
      url: AmStorie1,
      duration: 5000,
    },
    {
      type: "image",
      duration: 5000,
      url: AmStorie2,
    },
    {
      duration: 5000,
      type: "image",
      url: AmStorie3,
    },
  ];

  const ShoppingImages = [
    {
      type: "image",
      url: ShoppingStorie1,
      duration: 5000,
    },
    {
      type: "image",
      url: ShoppingStorie2,
      duration: 5000,
    },
    {
      duration: 5000,
      type: "image",
      url: ShoppingStorie3,
    },
  ];

  const WeekendImages = [
    {
      type: "image",
      url: WeekendStorie1,
      duration: 5000,
    },
    {
      type: "image",
      url: WeekendStorie2,
      duration: 5000,
    },
    {
      duration: 5000,
      url: WeekendStorie3,
      type: "image",
    },
  ];

  const [stories, setStories] = useState();

  return (
    <div className={ isDarkMode ? style.storiesDark : style.stories}>
      {isOpen ? (
        <StorieComponent
          stories={stories}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : (
        <div />
      )}
      <h1>Что нового?</h1>
      <div className={style.storiesContainer}>
        <div
          className={style.storiesButton}
          onClick={() => {
            setStories(AmbassadorImages);
            setIsOpen(true);
          }}
        >
          <img src={storiesPreview1} alt="storiesPreview" />
          <div className={style.overlay}></div>
          <p>Стань амбассадором Альфа-Банка</p>
        </div>
        <div
          className={style.storiesButton1}
          onClick={() => {
            setStories(ShoppingImages);
            setIsOpen(true);
          }}
        >
          <img
            src={storiesPreview2Background}
            className={style.background}
            alt="storiesPreview"
          />
          <img src={bag} className={style.bag} alt="bag" />
          <img src={purpleLine} className={style.purpleLine} alt="line" />
          <p>
            Что в тренде: <br /> идем на шоппинг
          </p>
        </div>
        <div
          className={style.storiesButton}
          onClick={() => {
            setStories(WeekendImages);
            setIsOpen(true);
          }}
        >
          <img src={storiesPreview3} alt="storiesPreview" />
          <div className={style.overlay}></div>
          <p>Куда сходить в эти выходные?</p>
        </div>
      </div>
    </div>
  );
};
