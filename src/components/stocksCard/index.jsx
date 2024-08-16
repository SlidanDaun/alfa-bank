import style from "./index.module.css";
import useThemeStore from '../themeStore';
import { useState } from "react";
import { Tab } from "../Tab";

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

import kapo from "../../assets/logos/kapo.svg";
import flower from "../../assets/logos/flower.svg";
import maza from "../../assets/logos/maza.svg";
import yafisha from "../../assets/logos/yAfisha.svg";
import purple from "../../assets/logos/purple.svg";
import afisha from "../../assets/logos/afisha.svg";
import wink from "../../assets/logos/wink.svg";

import { Carousel } from "../Сarousel";

export const StockCard = () => {
  const isDarkMode = useThemeStore(state => state.isDarkMode);
  const shoppingLogos = [
    {src: lamoda, url: 'https://www.lamoda.ru/women-home/'},
    {src: ozon, url: 'https://www.ozon.ru/?__rr=1&abt_att=1&origin_referer=yandex.ru'},
    {src: republic, url: 'https://loverepublic.ru/'},
    {src: apple, url: 'https://goldapple.ru/'},
    {src: befree, url: 'https://befree.ru/zhenskaya'},
    {src: wb, url: 'https://www.wildberries.ru/'},
    {src: e, url: 'https://ekonika.ru/grany_obraza?utm_source=yandex&utm_medium=cpc&utm_campaign=65280373&utm_content=phid%7C34067440279%7Crid%7C34067440279%7Ccfid%7C0%7Ccid%7C65280373%7Cgid%7C4695493370%7Caid%7C16263483358%7Cadp%7Cno%7Cpos%7Cpremium1%7Csrc%7Csearch-none%7Cdvc%7Cmobile&utm_term=%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%20%D1%8D%D0%BA%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0&yclid=317714764982648831'},
    {src: ymarket, url: 'https://market.yandex.ru/?ysclid=lzw5hoslwd757298611&wprid=1723778963578724-12126556529705685566-balancer-l7leveler-kubr-yp-vla-166-BAL&utm_source_service=web&src_pof=703&baobab_event_id=lzw5hoslwd'},
    {src: magnit, url: 'https://cosmetic.magnit.ru/'},
  ];
  const foodLogos = [
    { src: live, url: 'https://lifemart.ru/ru/kurgan/blyuda/10000'},
    { src: rostics, url: 'https://rostics.ru/?ysclid=lzwav555fi546973701'},
    { src: bk, url: 'https://burgerkingrus.ru/?ysclid=lzwavshkye474861343'},
    { src: samokat, url: 'https://samokat.ru/?ysclid=lzwaw5735m332876881'}, 
    { src: mc, url: 'https://vkusnoitochka.ru/'}, 
    { src: dodo, url: 'https://dodopizza.ru/moscow'}, 
    { src: vkus, url: 'https://vkusvill.ru/'}, 
    { src: surf, url: 'https://www.surfcoffee.ru/?ysclid=lzway3caxi449586699'}, 
    { src: potato, url: 'https://www.kartoshka.com/'},
  ];
  const eduLogos = [
    { src: karpo, url: 'https://karpov.courses/?ysclid=lzw659prll152930873'}, 
    { src: flo, url: 'https://netology.ru/navigation?price=paid&utm_source=yandex&utm_medium=cpc&utm_campaign=brand_all_ou_ya_retarget_abtest_2023&utm_term=%D0%BD%D0%B5%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F&utm_content=k50id%7C0100000045952043757_45952043757%7Ccid%7C90455973%7Cgid%7C5238418472%7Caid%7C15614341498%7Cadp%7Cno%7Cpos%7Cpremium1%7Csrc%7Csearch_none%7Cdvc%7Cmobile%7Cmain&etext=2202.w4mES3INLiU79_tGazmhSPEeIDzt1MBM41aysjC2Sa5lemlzZHFudnlodW9zeXd3.8dced926b5803b7c64ada709aaeefc7d2a394fa2&yclid=17133364452474748927'}, 
    { src: leo, url: 'https://leonardo.ru/?ysclid=lzw66boyr2142896368'}, 
    { src: black, url: 'https://practicum.yandex.ru/?utm_source=yandex&utm_medium=cpc&utm_campaign=Yan_Sch_RF_Common_Resk_b2c_Gener_None_Brand_460&utm_content=sty_search:s_none:cid_103839249:gid_5365193600:kw_%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5:pid_49131446546:aid_15590360493:crid_0:rid_49131446546:p_1:pty_premium:mty_syn:mkw_:dty_mobile:cgcid_0:rn_%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C:rid_11&utm_term=%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5&etext=2202.-Bv14zKo2MqsvtbKNFhlG6ReAK7em_cJSv40k33wnN4vGbRS_GwtuXm0Rt-TmjYwZmFremVvaXhtb3l0a2F3eA.6cb11588ed79c1b7bbebc111e4ce55efcacfc3cc&yclid=15563524368657547263'}, 
    { src: o, url: 'https://online.artforintrovert.ru/?ysclid=lzw62k47l5714051859'}, 
    { src: gorod, url: 'https://www.chitai-gorod.ru'}, 
    { src: qvoe, url: 'https://www.bookvoed.ru/?ysclid=lzw63hh4x1969510548'}, 
    { src: publica, url: 'https://www.respublica.ru/?ysclid=lzw644v5g2196592561'}, 
    { src: factory, url: 'https://skillfactory.ru/?ysclid=lzw64s014q261517959'},
  ];
  const funLogos = [
    {src: kapo, url: 'https://karofilm.ru/?ysclid=lzwb0462qb677397496'},
    {src: flower, url: 'https://flowwow.com/'},
    {src: maza, url: 'https://mazapark.ru/?ysclid=lzwb10hnqp803641641'}, 
    {src: yafisha, url: 'https://afisha.yandex.ru/moscow'}, 
    {src: purple, url: 'https://www.fitmost.ru/?ysclid=lzwb2p3x3d737173028'}, 
    {src: afisha, url: 'https://www.afisha.ru/?ysclid=lzwb39ohrm402645629'}, 
    {src: wink, url: 'https://wink.ru/?ysclid=lzwazppns0903538173'}
  ];

  const [activeTab, setActiveTab] = useState("Еда");
  const tabs = ["Шоппинг", "Образование", "Еда", "Развлечения"];

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
    <div className={ isDarkMode ? style.cardDark : style.card}>
      <h1>Акции у партнёров</h1>
      <div className={style.categories}>
        <div className={style.tabsContainer}>
          {tabs.map((tab) => (
            <Tab
              key={tab}
              label={tab}
              active={tab === activeTab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>
        <div className={style.tabsConten}>
          {/* <SliderComponent logos={categoriesLogos[activeTab]} /> */}
          <Carousel logos={categoriesLogos[activeTab]} />
        </div>
      </div>
    </div>
  );
};
