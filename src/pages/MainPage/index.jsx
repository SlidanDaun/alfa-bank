import { Header } from "../../components/Header"
import HelloCard from "../../components/HelloCard";
import { GameCard } from "../../components/GameCard";
import style from "./index.module.css";
import { TravelCard } from "../../components/TravelCard";
import { AccountsCard } from "../../components/accountsCard";
import { StockCard } from "../../components/stocksCard";

export const MainPage = () => {
    return <div className={style.pageContainer}>
        <Header></Header>
        <div className={style.firstCardLine}>
            <HelloCard />
            <GameCard />
        </div>
        <div className={style.secondCardLine}>
            <AccountsCard />
            <StockCard />
        </div>
        <TravelCard />
    </div>
}