import style from "./index.module.css";
import useThemeStore from '../themeStore';

import circleAccIcon from '../../assets/icons/circleAccIcon.png';
import halfCircleAccIcon from '../../assets/icons/halfCircleAccIcon.png';
import whiteCircle from '../../assets/icons/whiteCircle.png';
import grayLine from '../../assets/icons/grayLineMoneyRange.png';
import redLine from '../../assets/icons/redLineMoneyRange.png';
import longRedLine from '../../assets/icons/longRedLineMoneyRange.svg';

export const AccountsCard = () => {
    const isDarkMode = useThemeStore(state => state.isDarkMode);
    return (
        <div className={ isDarkMode ? style.cardDark : style.card}>
            <h1>cовместные счета</h1>
            <div className={style.accountsContainer}>
                <div className={style.account}>
                    <div className={style.accIconContainer}>
                        <img className={style.purpleCircle} alt="purpleCircle" src={circleAccIcon} />
                        <img className={style.redSimeCircle} alt="redCircle" src={halfCircleAccIcon} />
                        <img className={style.whiteCircle} alt="whiteCircle" src={whiteCircle} />
                        <div className={ isDarkMode ? style.percentageDark : style.percentage}>49%</div>
                    </div>
                    <div className={ isDarkMode ? style.textAccContainerDark : style.textAccContainer}>
                        <h4>На сочи с девочками</h4>
                        <p><span className={style.accParams}>копят:</span> Маша, Ритка, Аня</p>
                        <p><span className={style.accParams}>описание:</span> Девочки, там море и Егор Крид!!!</p>
                        <div className={isDarkMode ? style.moneyValuesDark : style.moneyValues}>
                            <div>35 280</div>
                            <div>72 000</div>
                        </div>
                        <div className={style.moneyRange}>
                            <img className={style.grayLine} alt="grayLine" src={grayLine} />
                            <img className={style.redLine} alt="redLine" src={redLine} />
                            <img className={style.whiteCircleMoneyRange} alt="whiteCircle" src={whiteCircle} />
                        </div>
                    </div>
                </div>
                <div className={style.account}>
                    <div className={style.accIconContainer}>
                        <img className={style.purpleCircle} alt="purpleCircle" src={circleAccIcon} />
                        <img className={style.redSimeCircle} alt="redCircle" src={halfCircleAccIcon} />
                        <img className={style.whiteCircle} alt="whiteCircle" src={whiteCircle} />
                        <div className={ isDarkMode ? style.percentageDark : style.percentage}>27%</div>
                    </div>
                    <div className={ isDarkMode ? style.textAccContainerDark : style.textAccContainer}>
                        <h4>На мечту</h4>
                        <p><span className={style.accParams}>копят:</span> Маша, Илья</p>
                        <p><span className={style.accParams}>описание:</span> У нас всё получится</p>
                        <div className={isDarkMode ? style.moneyValuesDark : style.moneyValues}>
                            <div>32 400</div>
                            <div>120 000</div>
                        </div>
                        <div className={style.moneyRange}>
                            <img className={style.grayLine} alt="grayLine" src={grayLine} />
                            <img className={style.redLine} alt="redLine" src={longRedLine} />
                            <img className={style.whiteCircleMoneyRangeLong} alt="whiteCircle" src={whiteCircle} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}