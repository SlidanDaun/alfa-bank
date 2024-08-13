import style from "./index.module.css";
import useThemeStore from '../themeStore';

export const TravelCard = () => {
  const isDarkMode = useThemeStore(state => state.isDarkMode);
  return (
    <div className={ isDarkMode ? style.cardDark : style.card}>
      <div className={style.imgContainer}>
        <img src="/img/plane.png" alt="Самолет" className={style.plane} />
        <img src="/img/cloud.png" alt="Облако" className={style.cloud} />
        <img src="/img/cloud.png" alt="Облако" className={style.smallCloud} />
      </div>
      <div className={style.textContainer}>
        <h1>Билет на учёбу</h1>
        <p>
          Лето подходит к концу. Надеемся, ты успел опустошить родительский
          холодильник и встретится с школьными товарищами. Время отправляться на
          учёбу!
        </p>
        <div className={style.tagsContiner}>
          <div className={style.tag} id={style.tag1}>
            <img src="/icons/planeIcon.png" alt="whiteCircle" /> <p> Кэшбек 7% на авиа </p>
          </div>
          <div className={style.tag} id={style.tag2}>
            <img src="/icons/trainIcon.png" alt="whiteCircle" /> <p> Кэшбек 5% на ж/д</p>
          </div>
          <div className={style.tag} id={style.tag3}>
            <p> Больше приятного </p> <img src="/icons/webIcon.png" alt="whiteCircle" /> <img className={style.arrowIcon} alt="whiteCircle" src="/icons/arrow.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
