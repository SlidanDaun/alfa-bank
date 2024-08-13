import style from "./index.module.css";
import useThemeStore from '../themeStore';

import plane from '../../assets/img/plane.png';
import cloud from '../../assets/img/cloud.png';
import smallCloud from '../../assets/img/smallCloud.png';

import planeIcon from '../../assets/icons/planeIcon.png';
import trainIcon from '../../assets/icons/trainIcon.png'; 
import webIcon from '../../assets/icons/webIcon.png';
import arrow from '../../assets/icons/arrow.svg';

export const TravelCard = () => {
  const isDarkMode = useThemeStore(state => state.isDarkMode);
  return (
    <div className={ isDarkMode ? style.cardDark : style.card}>
      <div className={style.imgContainer}>
        <img src={plane} alt="Самолет" className={style.plane} />
        <img src={cloud} alt="Облако" className={style.cloud} />
        <img src={smallCloud} alt="Облако" className={style.smallCloud} />
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
            <img src={planeIcon} alt="whiteCircle" /> <p> Кэшбек 7% на авиа </p>
          </div>
          <div className={style.tag} id={style.tag2}>
            <img src={trainIcon} alt="whiteCircle" /> <p> Кэшбек 5% на ж/д</p>
          </div>
          <div className={style.tag} id={style.tag3}>
            <p> Больше приятного </p> <img src={webIcon} alt="whiteCircle" /> <img className={style.arrowIcon} alt="whiteCircle" src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};
