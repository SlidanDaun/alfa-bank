import style from "./index.module.css";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import useStore from "../store";

import { Header } from "../../components/Header";
import HelloCard from "../../components/HelloCard";
import { GameCard } from "../../components/GameCard";
import { TravelCard } from "../../components/TravelCard";
import { AccountsCard } from "../../components/accountsCard";
import { StockCard } from "../../components/stocksCard";
import { StoriesCard } from "../../components/StoriesCard";
import { MapCard } from "../../components/MapCard";
import { MapLittleCard } from "../../components/MapLittleCard"

export const MainPage = () => {
  const isMobileQuery = useMediaQuery({ query: '(max-width: 1023px)' });
  const { isMobile, setIsMobile } = useStore();

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery, setIsMobile]);

  return (
    <div>
      {isMobile ? (
        <div className={style.pageContainerMobile}>
          <Header />
          <HelloCard />
          <StoriesCard />
          <AccountsCard />
          <MapLittleCard />
          <StockCard />
          <GameCard />
        </div>
      ) : (
        <div className={style.pageContainer}>
          <Header></Header>
          <div className={style.firstCardLine}>
            <HelloCard />
            <GameCard />
          </div>
          <div className={style.secondCardLine}>
            <AccountsCard />
            <div className={style.stockAndStories}>
              <StockCard />
              <StoriesCard />
            </div>
          </div>
          <MapCard />
          <TravelCard />
        </div>
      )}
    </div>
  );
};
