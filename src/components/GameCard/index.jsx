import style from "./index.module.css";
import useThemeStore from '../themeStore';
import whiteArrow from '../../assets/icons/whiteArrow.svg';
import arrow from '../../assets/icons/arrow.svg';


export const GameCard = () => {
  const isDarkMode = useThemeStore(state => state.isDarkMode);
  return (
    <div className={ isDarkMode ? style.cardDark : style.card}>
      <div className={style.cardTittle}>
        <div className={style.tittle}>
          <div className={style.dot} />
          <h1>Alfa-catch</h1>
        </div>
        <img
          src={ isDarkMode ? whiteArrow : arrow}
          alt="Arrow Icon"
          className="icon"
        />
      </div>
      <div className={style.imgContainer}>
        <img
          src={`/img/gameImg.png`}
          alt="game Img"
          className={style.gameImg}
        />
        <div className={style.overlayText}>
          Сыграть
          <img src={`/icons/polygonGame.svg`} alt="whiteCircle" className={style.polygon}></img>
          <img src={`/icons/polygonGame2.svg`} alt="whiteCircle" className={style.polygon}></img>
          <img src={`/icons/polygonGame3.svg`} alt="whiteCircle" className={style.polygon}></img>
        </div>
      </div>
    </div>
  );
};
