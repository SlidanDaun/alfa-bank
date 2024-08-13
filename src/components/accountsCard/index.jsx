import style from "./index.module.css"


export const AccountsCard = () => {
    return (
        <div className={style.card}>
            <h1>cовместные счета</h1>
            <div className={style.accountsContainer}>
                <div className={style.account}>
                    <div className={style.accIconContainer}>
                        <img className={style.purpleCircle} alt="purpleCircle" src="/icons/circleAccIcon.png" />
                        <img className={style.redSimeCircle} alt="redCircle" src="/icons/halfCircleAccIcon.png" />
                        <img className={style.whiteCircle} alt="whiteCircle" src="/icons/whiteCircle.png" />
                        <div className={style.percentage}>49%</div>
                    </div>
                    <div className={style.textAccContainer}>
                        <h4>На сочи с девочками</h4>
                        <p><span className={style.accParams}>копят:</span> Маша, Ритка, Аня</p>
                        <p><span className={style.accParams}>описание:</span> Девочки, там море и Егор Крид!!!</p>
                        <div className={style.moneyValues}>
                            <div>35 280</div>
                            <div>72 000</div>
                        </div>
                        <div className={style.moneyRange}>
                            <img className={style.grayLine} alt="grayLine" src="/icons/grayLineMoneyRange.png" />
                            <img className={style.redLine} alt="redLine" src="/icons/redLineMoneyRange.png" />
                            <img className={style.whiteCircleMoneyRange} alt="whiteCircle" src="/icons/whiteCircle.png" />
                        </div>
                    </div>
                </div>
                <div className={style.account}>
                    <div className={style.accIconContainer}>
                        <img className={style.purpleCircle} alt="purpleCircle" src="/icons/circleAccIcon.png" />
                        <img className={style.redSimeCircle} alt="redCircle" src="/icons/halfCircleAccIcon.png" />
                        <img className={style.whiteCircle} alt="whiteCircle" src="/icons/whiteCircle.png" />
                        <div className={style.percentage}>27%</div>
                    </div>
                    <div className={style.textAccContainer}>
                        <h4>На мечту</h4>
                        <p><span className={style.accParams}>копят:</span> Маша, Илья</p>
                        <p><span className={style.accParams}>описание:</span> У нас всё получится</p>
                        <div className={style.moneyValues}>
                            <div>32 400</div>
                            <div>120 000</div>
                        </div>
                        <div className={style.moneyRange}>
                            <img className={style.grayLine} alt="grayLine" src="/icons/grayLineMoneyRange.png" />
                            <img className={style.redLine} alt="redLine" src="/icons/longRedLineMoneyRange.svg" />
                            <img className={style.whiteCircleMoneyRangeLong} alt="whiteCircle" src="/icons/whiteCircle.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}