import style from "./index.module.css";
import useThemeStore from '../themeStore';
import whiteArrow from '../../assets/icons/whiteArrow.svg';
import arrow from '../../assets/icons/arrow.svg';
import gameImg from '../../assets/img/gameImg.png';
import polygonGame from '../../assets/icons/polygonGame.svg'
import polygonGame2 from '../../assets/icons/polygonGame2.svg'
import polygonGame3 from '../../assets/icons/polygonGame3.svg'


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
          src={gameImg}
          alt="game Img"
          className={style.gameImg}
        />
        <div className={style.overlayText}>
          Сыграть
          <img src={polygonGame} alt="poly1" className={style.polygon}></img>
          <img src={polygonGame2} alt="poly2" className={style.polygon}></img>
          <img src={polygonGame3} alt="poly3" className={style.polygon}></img>
        </div>
      </div>
    </div>
  );
};
